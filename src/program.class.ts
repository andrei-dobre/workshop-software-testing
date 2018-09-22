import { IPipeComponent } from './pipe/interfaces/i-pipe-component.interface';
import { createInterface } from "readline";
import { IPipe } from './pipe/interfaces/i-pipe.interface';
import { IOperationsCatalog } from './operations/interfaces/i-operations-catalog.interface';
import { IOperation } from "./operations/interfaces/i-operation.interface";
import { ProvidedValueOperationPipeComponent } from './pipe/provided-value-operation-pipe-component.class';

export class Program {
    public constructor(
        private operationsCatalog: IOperationsCatalog, 
        private pipe: IPipe
    ) { }

    public async run(): Promise<any> {
        await this.menu();
    }

    protected menu(): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            while (true) {
                this.printLine('-------------------------------------------');
                this.printLine('Please select one of the following options:');
                this.printLine('1 - Add component to the pipe');
                this.printLine('2 - Run the pipe');
                this.printLine('3 - Exit');

                switch (await this.readLine()) {
                    case '1':
                        this.printLine("## Symbol:");
                        const symbol = await this.readLine();

                        this.printLine("## Right value:");
                        const rightValue: number = +await this.readLine();

                        if (false === Number.isNaN(rightValue)) {
                            this.addComponent(symbol, rightValue);
                        }
                        break;
                    case '2':
                        this.printLine("## Input value:");
                        const input: number = +await this.readLine();

                        if (false === Number.isNaN(input)) {
                            this.printLine(`Pipe output: ${await this.runPipe(input)}`);
                        }
                        break;
                    case '3':

                        resolve();
                        return;
                }
                
                this.printLine('Press enter to continue...');
                await this.readLine();

                console.clear();
            }
        });
    }

    protected addComponent(symbol: string, value: number): void {
        if (this.operationsCatalog.contains(symbol)) {
            const operation = this.operationsCatalog.get(symbol).create();
            const pipeComponent: IPipeComponent = this.createComponent(operation, value);

            this.pipe.addComponent(pipeComponent);
        }

    }

    protected createComponent(operation: IOperation, value: number) : IPipeComponent {
        return new ProvidedValueOperationPipeComponent(operation, value);
    }

    protected runPipe(input: number): Promise<number> {
        return new Promise<number>(async (resolve, reject) => {
            resolve(await this.pipe.compute(input));
        });
    }

    protected readLine(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const readLine = createInterface(process.stdin, process.stdout, undefined, false);
            readLine.on('line', (line) => {
            
                resolve(line);
                readLine.close();
            });
        });
    }

    protected printLine(line: string) {
        console.log(line);
    }
}
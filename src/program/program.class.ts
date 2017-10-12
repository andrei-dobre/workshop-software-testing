import { BaseOperationPipeComponent } from '../pipe/base-operation-pipe-component.class';
import { MultiplicationOperation } from '../operations/multiplication-operation.class';
import { BaseOperation } from '../operations/base-operation.class';
import { IPipeComponent } from '../pipe-interfaces/i-pipe-component.interface';
import { ReadLine, createInterface } from "readline";
import { IPipe } from '../pipe-interfaces/i-pipe.interface';
import { IOperationsCatalog } from '../operations-interfaces/i-operations-catalog.interface';
import { IOperation } from "../operations-interfaces/i-operation.interface";
import { ProvidedValueOperationPipeComponent } from '../pipe/provided-value-operation-pipe-component.class';

/**
 * Contains the program's interaction logic.
 */
export class Program {

    private _operationsCatalog: IOperationsCatalog;
    private _pipe: IPipe;

    /**
     * Initializes a new Program instance.
     * 
     * @param operationsCatalog The IOperationsCatalog instance used by the new object.
     * @param pipe              The IPipe instance used by the new object.
     */
    constructor(operationsCatalog: IOperationsCatalog, pipe: IPipe) {

        this._operationsCatalog = operationsCatalog;
        this._pipe = pipe;
    }

    /**
     * Executes the program.
     */
    public async run(): Promise<any> {

        await this.menu();
    }

    /**
     * Gets the IOperationsCatalog object used by the current instance.
     */
    protected get operationsCatalog(): IOperationsCatalog {

        return this._operationsCatalog;
    }

    /**
     * Gets the IPipe object used by the current instance.
     */
    protected get pipe(): IPipe {

        return this._pipe;
    }

    /**
     * Opens the program's menu in order to handle the user interaction.
     */
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

    /**
     * Adds a component to the pipe according to the specified parameters.
     * 
     * @param symbol    The symbol of the operation that is to be added.
     * @param value     The right value of the operation.
     */
    protected addComponent(symbol: string, value: number): void {

        if (this.operationsCatalog.contains(symbol)) {
        
            const operation = this.operationsCatalog.get(symbol).create();
            const pipeComponent: IPipeComponent = this.createComponent(operation, value);

            this.pipe.addComponent(pipeComponent);
        }

    }

    /**
     * Creates a pipe component using the specified operation and right value.
     * 
     * @param operation The operation used by the pipe component.
     * @param value     The operation's right value.
     */
    protected createComponent(operation: IOperation, value: number) : IPipeComponent {

        return new ProvidedValueOperationPipeComponent(operation, value);
    }

    /**
     * Executes the pipe.
     * 
     * @param input The desired input.
     */
    protected runPipe(input: number): Promise<number> {

        return new Promise<number>(async (resolve, reject) => {

            resolve(await this.pipe.compute(input));
        });
    }

    /**
     * Reads a line from the stdin stream.
     */
    protected readLine(): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            const readLine = createInterface(process.stdin, process.stdout, undefined, false);
            readLine.on('line', (line) => {
            
                resolve(line);
                readLine.close();
            });
        });
    }

    /**
     * Prints the specified line in the stdout stream.
     * 
     * @param line The line that is to be printed.
     */
    protected printLine(line: string) {

        console.log(line);
    }
}
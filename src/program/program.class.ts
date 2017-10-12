import { ReadLine, createInterface } from "readline";
import { IPipe } from '../pipe-interfaces/i-pipe.interface';
import { IOperationsCatalog } from '../operations-interfaces/i-operations-catalog.interface';

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
                        break;
                    case '2':
                        break;
                    case '3':

                        resolve();
                        return;
                }
                
                this.printLine('###########################################');
            }
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
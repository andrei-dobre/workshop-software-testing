import { IOperation } from '../operations-interfaces/i-operation.interface';
import { IPipeComponent } from '../pipe-interfaces/i-pipe-component.interface';

/**
 * Provides functionality shared by the pipe components that use an operation
 * to carry out the computation.
 */
export class BaseOperationPipeComponent implements IPipeComponent {

    private _operation: IOperation;

    /**
     * Initializes a new BaseOperationPipeComponent instance.
     * 
     * @param operation The operation that will be used to carry out the computation.
     */
    constructor(operation: IOperation) {

        this._operation = operation;
    }
    
    /**
     * Gets the operation that will be used to carry out the computation.
     */
    protected get operation(): IOperation {

        return this._operation;
    }

    /**
     * Carries out the computation.
     */
    async compute(input: number): Promise<number> {
        
        const rightValue = await this.getRightValue();

        return new Promise<number>((resolve, reject) => {

            resolve(this.operation.compute(input, rightValue));
        });
    }

    /**
     * Gets the operation's right value.
     */
    protected getRightValue(): Promise<number> {

        return new Promise<number>((resolve, reject) => {

            resolve(this.operation.neutralElement);
        });
    }
}
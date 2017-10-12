import { IOperation } from '../operations-interfaces/i-operation.interface';
import { BaseOperationPipeComponent } from './base-operation-pipe-component.class';

/**
 * An operation pipe component whose right value is directly provided.
 */
export class ProvidedValueOperationPipeComponent extends BaseOperationPipeComponent {

    private _rightValue: number;

    /**
     * Initializes a new ProvidedValueOperationPipeComponent instance.
     * 
     * @param operation     The operation that will be used to carry out the computation.
     * @param rightValue    The operation's right value.
     */
    constructor(operation: IOperation, rightValue: number) {

        super(operation);

        this._rightValue = rightValue;
    }

    /**
     * Gets the operation's right member.
     */
    protected getRightValue(): Promise<number> {

        return new Promise<number>((resolve, reject) => {

            resolve(this._rightValue);
        });
    }
}
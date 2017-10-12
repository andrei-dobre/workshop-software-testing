import { IOperator } from '../operators-interfaces/i-operator.interface';
import { BaseOperatorPipeComponent } from './base-operator-pipe-component.class';

/**
 * An operator pipe component whose right value is directly provided.
 */
export class ProvidedValueOperatorPipeComponent extends BaseOperatorPipeComponent {

    private _rightValue: number;

    /**
     * Initializes a new ProvidedValueOperatorPipeComponent instance.
     * 
     * @param operator      The operator that will be used to carry out the computation.
     * @param rightValue    The operator's right value.
     */
    constructor(operator: IOperator, rightValue: number) {

        super(operator);

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
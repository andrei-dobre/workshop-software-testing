import { IOperator } from '../operators-interfaces/i-operator.interface';
import { IPipeComponent } from '../pipe-interfaces/i-pipe-component.interface';
import { AdditionOperator } from '../operators/addition-operator.class';

/**
 * Provides functionality shared by the pipe components that use an operator
 * to carry out the computation.
 */
export class BaseOperatorPipeComponent implements IPipeComponent {

    private _operator: IOperator;

    /**
     * Initializes a new BaseOperatorPipeComponent instance.
     * 
     * @param operator The operator that will be used to carry out the computation.
     */
    constructor(operator: IOperator) {

        this._operator = operator;
    }
    
    /**
     * Gets the operator that will be used to carry out the computation.
     */
    protected get operator(): IOperator {

        return this._operator;
    }

    /**
     * Carries out the computational operations.
     */
    async compute(input: number): Promise<number> {
        
        const rightMember = await this.getRightValue();

        return new Promise<number>((resolve, reject) => {

            resolve(this.operator.compute(input, rightMember));
        });
    }

    /**
     * Gets the operation's right member.
     */
    protected getRightValue(): Promise<number> {

        return new Promise<number>((resolve, reject) => {

            resolve(this.operator.neutralElement);
        });
    }
}
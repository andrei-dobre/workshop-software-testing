import { IOperator } from '../operators-interfaces/i-operator.interface';

/**
 * Provides funtionality shared by the operators.
 */
export class BaseOperator implements IOperator {

    private _symbol: string;

    /**
     * Initializes a new BaseOperator instance.
     * 
     * @param symbol The operator's symbol.
     */
    constructor(symbol: string) {

        this._symbol = symbol;
    }

    /**
     * Gets the operation member used to get a result equal to the other member.
     */
    public get neutralElement(): number {

        return 1;
    }

    /**
     * Gets the operator's symbol.
     */
    public get symbol(): string {

        return this._symbol;
    }

    /**
     * Applies the operations on the two provided values.
     */
    public compute(left: number, right: number): number {

        return 0;
    }
}
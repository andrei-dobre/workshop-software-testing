import { IOperation } from '../operations-interfaces/i-operation.interface';

/**
 * Provides functionality shared by the operations.
 */
export class BaseOperation implements IOperation {

    private _symbol: string;

    /**
     * Initializes a new BaseOperation instance.
     * 
     * @param symbol The operation's symbol.
     */
    constructor(symbol: string) {

        this._symbol = symbol;
    }

    /**
     * Gets the operation's neutral element.
     */
    public get neutralElement(): number {

        return 1;
    }

    /**
     * Gets the operation's symbol.
     */
    public get symbol(): string {

        return this._symbol;
    }

    /**
     * Applies the operation on the two provided values.
     */
    public compute(left: number, right: number): number {

        return 0;
    }
}
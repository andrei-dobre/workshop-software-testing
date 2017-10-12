import { BaseOperation } from './base-operation.class';

/**
 * The addition operation.
 */
export class AdditionOperation extends BaseOperation {

    /**
     * Initializes a new AdditionOperation instance.
     */
    constructor() {

        super('+');
    }
    
    /**
     * Gets the operation's neutral element.
     */
    public get neutralElement(): number {

        return 0;
    }

    /**
     * Applies the operation on the two provided values.
     */
    public compute(left: number, right: number): number {

        return left + right;
    }
}
import { BaseOperation } from './base-operation.class';

/**
 * The subtraction operation.
 */
export class SubtractionOperation extends BaseOperation {

    /**
     * Initializes a new SubtractionOperation instance.
     */
    constructor() {

        super('-');
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
        
        return left - right;
    }
}
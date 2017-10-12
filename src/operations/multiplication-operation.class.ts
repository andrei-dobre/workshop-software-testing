import { BaseOperation } from './base-operation.class';

/**
 * The multiplication operation.
 */
export class MultiplicationOperation extends BaseOperation {

    /**
     * Initializes a new MultiplicationOperation instance.
     */
    constructor() {

        super('*');
    }

    /**
     * Applies the operation on the two provided values.
     */
    public compute(left: number, right: number): number {
        
        return left * right;
    }
}
import { BaseOperator } from './base-operator.class';

/**
 * The multiplication operator.
 */
export class MultiplicationOperator extends BaseOperator {

    /**
     * Initializes a new MultiplicationOperator instance.
     */
    constructor() {

        super('*');
    }

    /**
     * Applies the operations on the two provided values.
     */
    public compute(left: number, right: number): number {
        
        return left * right;
    }
}
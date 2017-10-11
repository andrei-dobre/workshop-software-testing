import { BaseOperator } from './base-operator.class';

/**
 * The division operator.
 */
export class DivisionOperator extends BaseOperator {

    /**
     * Initializes a new DivisionOperator instance.
     */
    constructor() {

        super('/');
    }

    
    /**
     * Applies the operations on the two provided values.
     */
    public compute(left: number, right: number): number {
        
        return left / right;
    }
}
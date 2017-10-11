import { BaseOperator } from './base-operator.class';

/**
 * The power operator.
 */
export class PowerOperator extends BaseOperator {

    /**
     * Initializes a new PowerOperator instance.
     */
    constructor() {

        super('^');
    }
    
    /**
     * Applies the operations on the two provided values.
     */
    public compute(left: number, right: number): number {

        return Math.pow(left, right);
    }
}
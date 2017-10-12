import { BaseOperation } from './base-operation.class';

/**
 * The power operation.
 */
export class PowerOperation extends BaseOperation {

    /**
     * Initializes a new PowerOperation instance.
     */
    constructor() {

        super('^');
    }
    
    /**
     * Applies the operation on the two provided values.
     */
    public compute(left: number, right: number): number {

        return Math.pow(left, right);
    }
}
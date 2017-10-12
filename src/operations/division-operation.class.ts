import { BaseOperation } from './base-operation.class';

/**
 * The division operation.
 */
export class DivisionOperation extends BaseOperation {

    /**
     * Initializes a new DivisionOperation instance.
     */
    constructor() {

        super('/');
    }
    
    /**
     * Applies the operation on the two provided values.
     */
    public compute(left: number, right: number): number {
        
        return left / right;
    }
}
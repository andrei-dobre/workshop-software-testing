import { BaseOperator } from './base-operator.class';

/**
 * The addition operator.
 */
export class AdditionOperator extends BaseOperator {

    /**
     * Initializes a new AdditionOperator instance.
     */
    constructor() {

        super('+');
    }
    
    /**
     * Gets the operation member used to get a result equal to the other member.
     */
    public get neutralElement(): number {

        return 0;
    }

    /**
     * Applies the operations on the two provided values.
     */
    public compute(left: number, right: number): number {

        return left + right;
    }
}
/**
 * An operator.
 */
export interface IOperator {

    /**
     * Gets the operator's symbol.
     */
    readonly symbol: string;

    /**
     * Gets the operation member used to get a result equal to the other member.
     */
    readonly neutralElement: number;

    /**
     * Applies the operations on the two provided values.
     */
    compute(left: number, right: number): number;
}
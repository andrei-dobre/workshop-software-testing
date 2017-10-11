/**
 * An operator.
 */
export interface IOperator {

    /**
     * Gets the operator's symbol.
     */
    readonly symbol: string;

    /**
     * Applies the operations on the two provided values.
     */
    compute(left: number, right: number): number;
}
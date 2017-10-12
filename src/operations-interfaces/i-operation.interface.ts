/**
 * An operation.
 */
export interface IOperation {

    /**
     * Gets the operation's symbol.
     */
    readonly symbol: string;

    /**
     * Gets the operation's neutral element.
     */
    readonly neutralElement: number;

    /**
     * Applies the operation on the two provided values.
     */
    compute(left: number, right: number): number;
}
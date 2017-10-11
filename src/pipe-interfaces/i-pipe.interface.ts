/**
 * A pipe.
 */
export interface IPipe {

    /**
     * Runs the specified input through the pipe.
     */
    compute(input: number): Promise<number>;
}
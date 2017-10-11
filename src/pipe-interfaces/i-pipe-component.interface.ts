/**
 * A component in a pipe.
 */
export interface IPipeComponent {

    /**
     * Carries out the computational operations.
     */
    compute(input: number): Promise<number>;
}
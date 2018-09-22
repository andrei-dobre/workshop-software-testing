import { IPipeComponent } from './i-pipe-component.interface';

/**
 * A pipe.
 */
export interface IPipe {

    /**
     * Runs the specified input through the pipe.
     */
    compute(input: number): Promise<number>;

    /**
     * Adds a component at the end of the pipe.
     */
    addComponent(component: IPipeComponent): void;
}
import { IOperation } from './i-operation.interface';

/**
 * A factory capable of instantiating an operation.
 */
export interface IOperationFactory {

    /**
     * Create a new operation instance.
     */
    create(): IOperation;
}
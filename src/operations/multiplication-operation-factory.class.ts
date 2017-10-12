import { IOperation } from '../operations-interfaces/i-operation.interface';
import { IOperationFactory } from '../operations-interfaces/i-operation-factory.interface';
import { MultiplicationOperation } from './multiplication-operation.class';

/**
 * A factory capable of instantiating MultiplicationOperation objects.
 */
export class MultiplicationOperationFactory implements IOperationFactory {

    /**
     * Create a new operation instance.
     */
    public create(): IOperation {
        
        return new MultiplicationOperation();
    }
}
import { IOperationFactory } from '../operations-interfaces/i-operation-factory.interface';
import { IOperation } from '../operations-interfaces/i-operation.interface';
import { SubtractionOperation } from './subtraction-operation.class';

/**
 * A factory capable of instantiating SubtractionOperation objects.
 */
export class SubtractionOperationFactory implements IOperationFactory {

    /**
     * Create a new operation instance.
     */
    public create(): IOperation {
        
        return new SubtractionOperation();
    }
}
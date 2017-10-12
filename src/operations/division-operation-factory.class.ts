import { IOperationFactory } from '../operations-interfaces/i-operation-factory.interface';
import { IOperation } from '../operations-interfaces/i-operation.interface';
import { DivisionOperation } from '../operations/division-operation.class';

/**
 * A factory capable of instantiating DivisionOperation objects.
 */
export class DivisionOperationFactory implements IOperationFactory {

    /**
     * Create a new operation instance.
     */
    public create(): IOperation {

        return new DivisionOperation();
    }
}
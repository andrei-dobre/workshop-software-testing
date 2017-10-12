import { IOperation } from '../operations-interfaces/i-operation.interface';
import { IOperationFactory } from '../operations-interfaces/i-operation-factory.interface';
import { AdditionOperation } from '../operations/addition-operation.class';

/**
 * A factory capable of instantiating AdditionOperation objects.
 */
export class AdditionOperationFactory implements IOperationFactory {

    /**
     * Create a new operation instance.
     */
    public create(): IOperation {

        return new AdditionOperation();
    }
}
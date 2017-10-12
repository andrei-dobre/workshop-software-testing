import { IOperation } from '../operations-interfaces/i-operation.interface';
import { IOperationFactory } from '../operations-interfaces/i-operation-factory.interface';
import { PowerOperation } from '../operations/power-operation.class';

/**
 * A factory capable of instantiating PowerOperation objects.
 */
export class PowerOperationFactory implements IOperationFactory {

    /**
     * Create a new operation instance.
     */
    public create(): IOperation {
        
        return new PowerOperation();
    }
}
import { IOperation } from './interfaces/i-operation.interface';
import { IOperationFactory } from './interfaces/i-operation-factory.interface';
import { PowerOperation } from '../operations/power-operation.class';

export class PowerOperationFactory implements IOperationFactory {
    public create(): IOperation {
        return new PowerOperation();
    }
}

import { IOperationFactory } from './interfaces/i-operation-factory.interface';
import { IOperation } from './interfaces/i-operation.interface';
import { SubtractionOperation } from './subtraction-operation.class';

export class SubtractionOperationFactory implements IOperationFactory {
    public create(): IOperation {
        return new SubtractionOperation();
    }
}

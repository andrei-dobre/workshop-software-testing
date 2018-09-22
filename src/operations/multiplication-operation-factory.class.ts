import { IOperation } from './interfaces/i-operation.interface';
import { IOperationFactory } from './interfaces/i-operation-factory.interface';
import { MultiplicationOperation } from './multiplication-operation.class';

export class MultiplicationOperationFactory implements IOperationFactory {
    public create(): IOperation {
        return new MultiplicationOperation();
    }
}
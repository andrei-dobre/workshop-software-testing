import { IOperation } from './interfaces/i-operation.interface';
import { IOperationFactory } from './interfaces/i-operation-factory.interface';
import { AdditionOperation } from '../operations/addition-operation.class';

export class AdditionOperationFactory implements IOperationFactory {
    public create(): IOperation {
        return new AdditionOperation();
    }
}
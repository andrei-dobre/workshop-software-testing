import { IOperationFactory } from './interfaces/i-operation-factory.interface';
import { IOperation } from './interfaces/i-operation.interface';
import { DivisionOperation } from '../operations/division-operation.class';

export class DivisionOperationFactory implements IOperationFactory {
    public create(): IOperation {
        return new DivisionOperation();
    }
}
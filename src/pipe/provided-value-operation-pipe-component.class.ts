import { IOperation } from '../operations/interfaces/i-operation.interface';
import { BaseOperationPipeComponent } from './base-operation-pipe-component.class';

export class ProvidedValueOperationPipeComponent extends BaseOperationPipeComponent {
    public constructor(
        operation: IOperation, 
        private rightValue: number
    ) {
        super(operation);
    }

    protected getRightValue(): Promise<number> {
        return Promise.resolve(this.rightValue);
    }
}

import { IOperation } from '../operations/interfaces/i-operation.interface';
import { IPipeComponent } from './interfaces/i-pipe-component.interface';

export class BaseOperationPipeComponent implements IPipeComponent {
    public constructor(private operation: IOperation) {
    }

    public async compute(input: number): Promise<number> {
        const rightValue = await this.getRightValue();

        return this.operation.compute(input, rightValue);
    }

    protected async getRightValue(): Promise<number> {
        return this.operation.neutralElement;
    }
}
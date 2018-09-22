import { IOperation } from './interfaces/i-operation.interface';

export class BaseOperation implements IOperation {
    public constructor(public readonly symbol: string) {
    }

    public get neutralElement(): number {
        return 1;
    }

    public compute(left: number, right: number): number {
        return 0;
    }
}
import { BaseOperation } from './base-operation.class';

export class MultiplicationOperation extends BaseOperation {
    public constructor() {
        super('*');
    }

    public compute(left: number, right: number): number {
        return left * right;
    }
}
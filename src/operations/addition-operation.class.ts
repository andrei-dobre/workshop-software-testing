import { BaseOperation } from './base-operation.class';

export class AdditionOperation extends BaseOperation {
    public constructor() {
        super('+');
    }
    
    public get neutralElement(): number {
        return 0;
    }

    public compute(left: number, right: number): number {
        return left + right;
    }
}
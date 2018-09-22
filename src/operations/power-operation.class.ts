import { BaseOperation } from './base-operation.class';

export class PowerOperation extends BaseOperation {
	public constructor() {
        super('^');
    }
    
    public compute(left: number, right: number): number {
        return Math.pow(left, right);
    }
}

import { IOperationFactory } from "./interfaces/i-operation-factory.interface";
import { IOperationsCatalog } from "./interfaces/i-operations-catalog.interface";
import { AdditionOperationFactory } from './addition-operation-factory.class';
import { SubtractionOperationFactory } from "./subtraction-operation-factory.class";
import { MultiplicationOperationFactory } from './multiplication-operation-factory.class';
import { DivisionOperationFactory } from "./division-operation-factory.class";
import { PowerOperationFactory } from "./power-operation-factory.class";

export class OperationsCatalog implements IOperationsCatalog {
    private operationsDictionary: Map<string, IOperationFactory>;

    public constructor() {
        this.operationsDictionary = new Map<string, IOperationFactory>();

        this.operationsDictionary.set('+', new AdditionOperationFactory());
        this.operationsDictionary.set('-', new SubtractionOperationFactory());
        this.operationsDictionary.set('*', new MultiplicationOperationFactory());
        this.operationsDictionary.set('/', new DivisionOperationFactory());
        this.operationsDictionary.set('^', new PowerOperationFactory());
    }
    
    public get(symbol: string) : IOperationFactory {
        return this.operationsDictionary.get(symbol) || new AdditionOperationFactory();
    }
    
    public contains(symbol: string): boolean {
       return this.operationsDictionary.has(symbol);
    }
}

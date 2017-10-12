import { IOperationFactory } from "../operations-interfaces/i-operation-factory.interface";
import { IOperationsCatalog } from "../operations-interfaces/i-operations-catalog.interface";
import { AdditionOperationFactory } from './addition-operation-factory.class';
import { SubtractionOperationFactory } from "./subtraction-operation-factory.class";
import { MultiplicationOperationFactory } from './multiplication-operation-factory.class';
import { DivisionOperationFactory } from "./division-operation-factory.class";
import { PowerOperationFactory } from "./power-operation-factory.class";

/**
 * An operations catalog that is aware of all the implemented operations.
 */
export class OperationsCatalog implements IOperationsCatalog {

    private _operationsDictionary: Map<string, IOperationFactory>;

    constructor() {

        this._operationsDictionary = new Map<string, IOperationFactory>();

        this._operationsDictionary.set('+', new AdditionOperationFactory());
        this._operationsDictionary.set('-', new SubtractionOperationFactory());
        this._operationsDictionary.set('*', new MultiplicationOperationFactory());
        this._operationsDictionary.set('/', new DivisionOperationFactory());
        this._operationsDictionary.set('^', new PowerOperationFactory());
    }
    
    /**
     * Gets a factory capable of instantiating the operation associated with the specified symbol.
     */
    public get(symbol: string) : IOperationFactory {

        return this._operationsDictionary.get(symbol) || new AdditionOperationFactory();
    }
    
    /**
     * Returns a value that specifies whether the catalog contains the operation associated with the specified symbol or not.
     */
    public contains(symbol: string): boolean {

       return this._operationsDictionary.has(symbol);
    }
}
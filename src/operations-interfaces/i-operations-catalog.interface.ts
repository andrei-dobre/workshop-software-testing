import { IOperationFactory } from './i-operation-factory.interface';

export interface IOperationsCatalog {

    /**
     * Gets a factory capable of instantiating the operation associated with the specified symbol.
     */
    get(symbol: string) : IOperationFactory;

    /**
     * Returns a value that specifies whether the catalog contains the operation associated with the specified symbol or not.
     */
    contains(symbol: string): boolean;
}
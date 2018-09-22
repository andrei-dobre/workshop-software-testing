import { suite, test } from "mocha-typescript";
import { assert } from "chai";
import { OperationsCatalog } from '../../src/operations/operations-catalog.class';
import { AdditionOperationFactory } from '../../src/operations/addition-operation-factory.class';
import { SubtractionOperationFactory } from '../../src/operations/subtraction-operation-factory.class';
import { DivisionOperationFactory } from '../../src/operations/division-operation-factory.class';
import { MultiplicationOperationFactory } from '../../src/operations/multiplication-operation-factory.class';
import { PowerOperationFactory } from '../../src/operations/power-operation-factory.class';

@suite
class OperationsCatalogTest {
    @test
    public get_Plus_AdditionOperationFactory() {
        const testInstance = new OperationsCatalog();

        assert.isTrue(testInstance.get('+') instanceof AdditionOperationFactory);
    }

    @test
    public get_Minus_SubtractionOperationFactory() {
        const testInstance = new OperationsCatalog();

        assert.isTrue(testInstance.get('-') instanceof SubtractionOperationFactory);
    }
    
    @test
    public get_Star_MultiplicationOperationFactory() {
        const testInstance = new OperationsCatalog();

        assert.isTrue(testInstance.get('*') instanceof MultiplicationOperationFactory);
    }
    
    @test
    public get_Slash_DivisionOperationFactory() {
        const testInstance = new OperationsCatalog();

        assert.isTrue(testInstance.get('/') instanceof DivisionOperationFactory);
    }
    
    @test
    public get_Power_PowerOperationFactory() {
        const testInstance = new OperationsCatalog();

        assert.isTrue(testInstance.get('^') instanceof PowerOperationFactory);
    }

    @test
    public get_Unknown_Undefined() {
        const testInstance = new OperationsCatalog();

        assert.isTrue(testInstance.get('SomeUnknownSymbol') instanceof AdditionOperationFactory);
    }

    @test
    public contains_Plus_True() {
        const testInstance = new OperationsCatalog();

        assert.isTrue(testInstance.contains('+'));
    }

    @test
    public contains_Minus_True() {
        const testInstance = new OperationsCatalog();

        assert.isTrue(testInstance.contains('-'));
    }
    
    @test
    public contains_Star_True() {
        const testInstance = new OperationsCatalog();

        assert.isTrue(testInstance.contains('*'));
    }
    
    @test
    public contains_Slash_True() {
        const testInstance = new OperationsCatalog();

        assert.isTrue(testInstance.contains('/'));
    }
    
    @test
    public contains_Power_True() {
        const testInstance = new OperationsCatalog();

        assert.isTrue(testInstance.contains('^'));
    }
    
    @test
    public contains_Unknown_False() {
        const testInstance = new OperationsCatalog();

        assert.isFalse(testInstance.contains('SomeUnknownSymbol'));
    }
}
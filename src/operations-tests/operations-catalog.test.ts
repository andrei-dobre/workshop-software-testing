import { suite, test } from "mocha-typescript";
import { assert } from "chai";
import { OperationsCatalog } from '../operations/operations-catalog.class';
import { AdditionOperationFactory } from '../operations/addition-operation-factory.class';
import { SubtractionOperationFactory } from '../operations/subtraction-operation-factory.class';
import { DivisionOperationFactory } from '../operations/division-operation-factory.class';
import { MultiplicationOperationFactory } from '../operations/multiplication-operation-factory.class';
import { PowerOperationFactory } from '../operations/power-operation-factory.class';

@suite
class OperationsCatalogTest {

    @test
    public get_Plus_AdditionOperationFactory() {
        
        const obj = new OperationsCatalog();

        assert.isTrue(obj.get('+') instanceof AdditionOperationFactory);
    }

    @test
    public get_Minus_SubtractionOperationFactory() {
        
        const obj = new OperationsCatalog();

        assert.isTrue(obj.get('-') instanceof SubtractionOperationFactory);
    }
    
    @test
    public get_Star_MultiplicationOperationFactory() {
        
        const obj = new OperationsCatalog();

        assert.isTrue(obj.get('*') instanceof MultiplicationOperationFactory);
    }
    
    @test
    public get_Slash_DivisionOperationFactory() {
        
        const obj = new OperationsCatalog();

        assert.isTrue(obj.get('/') instanceof DivisionOperationFactory);
    }
    
    @test
    public get_Power_PowerOperationFactory() {
        
        const obj = new OperationsCatalog();

        assert.isTrue(obj.get('^') instanceof PowerOperationFactory);
    }

    @test
    public get_Unknown_Undefined() {
        
        const obj = new OperationsCatalog();

        assert.isTrue(obj.get('SomeUnknownSymbol') instanceof AdditionOperationFactory);
    }

    @test
    public contains_Plus_True() {
        
        const obj = new OperationsCatalog();

        assert.isTrue(obj.contains('+'));
    }

    @test
    public contains_Minus_True() {
        
        const obj = new OperationsCatalog();

        assert.isTrue(obj.contains('-'));
    }
    
    @test
    public contains_Star_True() {
        
        const obj = new OperationsCatalog();

        assert.isTrue(obj.contains('*'));
    }
    
    @test
    public contains_Slash_True() {
        
        const obj = new OperationsCatalog();

        assert.isTrue(obj.contains('/'));
    }
    
    @test
    public contains_Power_True() {
        
        const obj = new OperationsCatalog();

        assert.isTrue(obj.contains('^'));
    }
    
    @test
    public contains_Unknown_False() {
        
        const obj = new OperationsCatalog();

        assert.isFalse(obj.contains('SomeUnknownSymbol'));
    }
}
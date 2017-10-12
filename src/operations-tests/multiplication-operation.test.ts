import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { MultiplicationOperation } from '../operations/multiplication-operation.class';

@suite
class MultiplicationOperationTest {

    private _testInstance: MultiplicationOperation;

    public before() {

        this._testInstance = new MultiplicationOperation();
    }

    @test
    public getSymbol__Star() {
        
        assert.equal(this._testInstance.symbol, '*');
    }

    @test
    public compute__2_3__6() {

        assert.equal(this._testInstance.compute(2, 3), 6);
    }
    
    @test
    public compute__4_5__20() {

        assert.equal(this._testInstance.compute(4, 5), 20);
    }
}
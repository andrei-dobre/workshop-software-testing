import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { MultiplicationOperator } from '../operators/multiplication-operator.class';

@suite
class MultiplicationOperatorTest {

    private _testInstance: MultiplicationOperator;

    public before() {

        this._testInstance = new MultiplicationOperator();
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
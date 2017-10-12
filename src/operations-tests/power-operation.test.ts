import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { PowerOperation } from '../operations/power-operation.class';

@suite
class PowerOperationTest {

    private _testInstance: PowerOperation;

    public before() {

        this._testInstance = new PowerOperation();
    }

    @test
    public getSymbol__ExpectedValue() {

        assert.equal(this._testInstance.symbol, '^');
    }

    @test
    public compute__2_3__8() {

        assert.equal(this._testInstance.compute(2, 3), 8);
    }
    
    @test
    public compute__4_0Point5__2() {

        assert.equal(this._testInstance.compute(4, 0.5), 2);
    }
}
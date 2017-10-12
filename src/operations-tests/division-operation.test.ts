import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { DivisionOperation } from '../operations/division-operation.class';

@suite
class DivisionOperationTest {

    private _testInstance: DivisionOperation;

    public before() {

        this._testInstance = new DivisionOperation();
    }

    @test
    public getSymbol__Slash() {

        assert.equal(this._testInstance.symbol, '/');
    }

    @test
    public compute__32_2__16() {

        assert.equal(this._testInstance.compute(32, 2), 16);
    }

    @test
    public compute__1_2__0Point5() {

        assert.equal(this._testInstance.compute(1, 2), 0.5);
    }
}
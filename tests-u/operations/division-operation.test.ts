import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { DivisionOperation } from '../../src/operations/division-operation.class';

@suite
class DivisionOperationTest {
    private testInstance: DivisionOperation;

    public before() {
        this.testInstance = new DivisionOperation();
    }

    @test
    public getSymbol__Slash() {
        assert.equal(this.testInstance.symbol, '/');
    }

    @test
    public compute__32_2__16() {
        assert.equal(this.testInstance.compute(32, 2), 16);
    }

    @test
    public compute__1_2__0Point5() {
        assert.equal(this.testInstance.compute(1, 2), 0.5);
    }
}

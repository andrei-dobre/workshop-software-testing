import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { PowerOperation } from '../../src/operations/power-operation.class';

@suite
class PowerOperationTest {
    private testInstance: PowerOperation;

    public before() {
        this.testInstance = new PowerOperation();
    }

    @test
    public getSymbol__ExpectedValue() {
        assert.equal(this.testInstance.symbol, '^');
    }

    @test
    public compute__2_3__8() {
        assert.equal(this.testInstance.compute(2, 3), 8);
    }
    
    @test
    public compute__4_0Point5__2() {
        assert.equal(this.testInstance.compute(4, 0.5), 2);
    }
}
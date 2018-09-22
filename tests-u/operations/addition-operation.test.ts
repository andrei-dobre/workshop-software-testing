import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { AdditionOperation } from '../../src/operations/addition-operation.class';

@suite
class AdditionOperationTest {
    private testInstance: AdditionOperation;

    public before() {
        this.testInstance = new AdditionOperation();
    }

    @test
    public getSymbol__Plus() {
        assert.equal(this.testInstance.symbol, '+');
    }

    @test
    public getNeutralElement__0() {
        assert.equal(this.testInstance.neutralElement, 0);
    }

    @test
    public compute__5_6__11() {
        assert.equal(this.testInstance.compute(5, 6), 11);
    }

    @test
    public compute__6_7__13() {
        assert.equal(this.testInstance.compute(6, 7), 13);
    }
}

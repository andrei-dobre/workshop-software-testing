import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { SubstractionOperator } from '../operators/substraction-operator.class';

@suite
class SubstractionOperatorTest {

    private _testInstance: SubstractionOperator;

    public before() {

        this._testInstance = new SubstractionOperator();
    }

    @test
    public getSymbol__Minus() {

        assert.equal(this._testInstance.symbol, '-');
    }

    @test
    public compute__3_2__1() {

        assert.equal(this._testInstance.compute(3, 2), 1);
    }

    @test
    public compute__4_5__Neg1() {

        assert.equal(this._testInstance.compute(4, 5), -1);
    }
}
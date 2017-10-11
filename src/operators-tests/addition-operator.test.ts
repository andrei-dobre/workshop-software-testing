import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { AdditionOperator } from '../operators/addition-operator.class';

@suite
class AdditionOperatorTest {

    private _testInstance: AdditionOperator;

    public before() {

        this._testInstance = new AdditionOperator();
    }

    @test
    public getSymbol__Plus() {

        assert.equal(this._testInstance.symbol, '+');
    }

    @test
    public compute__5_6__11() {

        assert.equal(this._testInstance.compute(5, 6), 11);
    }

    @test
    public compute__6_7__13() {

        assert.equal(this._testInstance.compute(6, 7), 13);
    }
}
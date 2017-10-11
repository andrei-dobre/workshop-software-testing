import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { AdditionOperator } from '../operators/addition-operator.class';

@suite
class AdditionOperatorTest {

    @test
    public getSymbol__Plus() {

        const obj = new AdditionOperator();

        assert.equal(obj.symbol, '+');
    }

    @test
    public compute__5_6__11() {

        const obj = new AdditionOperator();

        assert.equal(obj.compute(5, 6), 11);
    }

    @test
    public compute__6_7__13() {

        const obj = new AdditionOperator();

        assert.equal(obj.compute(6, 7), 13);
    }
}
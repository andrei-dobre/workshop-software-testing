import { suite, test } from "mocha-typescript"
import { BaseOperator } from '../operators/base-operator.class';
import { assert } from "chai";

@suite
class BaseOperatorTest {

    @test
    public getSymol__ProvidedValue() {

        let providedValue: string;
        let receivedValue: string;

        providedValue = 'SomeValue';

        const obj = new BaseOperator(providedValue);

        receivedValue = obj.symbol;

        assert.equal(receivedValue, providedValue);
    }

    @test
    public getNeutralElement__1() {

        const obj = new BaseOperator('');

        assert.equal(obj.neutralElement, 1);
    }

    @test
    public compute__AnyValues__0() {

        const obj = new BaseOperator('');

        assert.equal(obj.compute(1, 2), 0);
    }
}
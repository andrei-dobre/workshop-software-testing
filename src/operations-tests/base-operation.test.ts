import { suite, test } from "mocha-typescript"
import { assert } from "chai";
import { BaseOperation } from '../operations/base-operation.class';

@suite
class BaseOperationTest {

    @test
    public getSymbol__ProvidedValue() {

        let providedValue: string;
        let receivedValue: string;

        providedValue = 'SomeValue';

        const obj = new BaseOperation(providedValue);

        receivedValue = obj.symbol;

        assert.equal(receivedValue, providedValue);
    }

    @test
    public getNeutralElement__1() {

        const obj = new BaseOperation('');

        assert.equal(obj.neutralElement, 1);
    }

    @test
    public compute__AnyValues__0() {

        const obj = new BaseOperation('');

        assert.equal(obj.compute(1, 2), 0);
    }
}
import { suite, test } from "mocha-typescript"
import { assert } from "chai";
import { BaseOperation } from '../../src/operations/base-operation.class';

@suite
class BaseOperationTest {
    @test
    public getSymbol__ProvidedValue() {
        let providedValue: string;
        let receivedValue: string;

        providedValue = 'SomeValue';

        const testInstance = new BaseOperation(providedValue);

        receivedValue = testInstance.symbol;

        assert.equal(receivedValue, providedValue);
    }

    @test
    public getNeutralElement__1() {
        const testInstance = new BaseOperation('');

        assert.equal(testInstance.neutralElement, 1);
    }

    @test
    public compute__AnyValues__0() {
        const testInstance = new BaseOperation('');

        assert.equal(testInstance.compute(1, 2), 0);
    }
}

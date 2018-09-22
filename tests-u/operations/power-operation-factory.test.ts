import { suite, test } from "mocha-typescript";
import { assert } from 'chai';
import { PowerOperation } from '../../src/operations/power-operation.class';
import { PowerOperationFactory } from '../../src/operations/power-operation-factory.class';

@suite
class PowerOperationFactoryTest {
    @test
    public create__PowerOperation() {
        const testInstance = new PowerOperationFactory();

        assert.isTrue(testInstance.create() instanceof PowerOperation);
    }
}
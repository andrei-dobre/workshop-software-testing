import { suite, test } from "mocha-typescript";
import { assert } from 'chai';
import { MultiplicationOperation } from "../../src/operations/multiplication-operation.class";
import { MultiplicationOperationFactory } from "../../src/operations/multiplication-operation-factory.class";


@suite
class MultiplicationOperationFactoryTest {
    @test
    public create__MultiplicationOperation() {
        const testInstance = new MultiplicationOperationFactory();

        assert.isTrue(testInstance.create() instanceof MultiplicationOperation);
    }
}

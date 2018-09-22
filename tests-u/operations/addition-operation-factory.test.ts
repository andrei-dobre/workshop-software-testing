import { suite, test } from "mocha-typescript";
import { assert } from "chai";
import { AdditionOperation } from '../../src/operations/addition-operation.class';
import { AdditionOperationFactory } from '../../src/operations/addition-operation-factory.class';

@suite
class AdditionOperationFactoryTest {
    @test
    public create__AdditionOperation() {
        const testInstance = new AdditionOperationFactory();

        assert.isTrue(testInstance.create() instanceof AdditionOperation);
    }
}
import { suite, test } from "mocha-typescript";
import { assert } from "chai";
import { SubtractionOperation } from '../../src/operations/subtraction-operation.class';
import { SubtractionOperationFactory } from '../../src/operations/subtraction-operation-factory.class';

@suite
class SubtractionOperationFactoryTest {
    @test
    public create__SubtractionOperation() {
        const testInstance = new SubtractionOperationFactory();

        assert.isTrue(testInstance.create() instanceof SubtractionOperation);
    }
}
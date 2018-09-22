import { suite, test } from "mocha-typescript";
import { assert } from 'chai';
import { DivisionOperation } from '../../src/operations/division-operation.class';
import { DivisionOperationFactory } from '../../src/operations/division-operation-factory.class';


@suite
class DivisionOperationFactoryTest {
    @test
    public create__DivisionOperation() {
        const testInstance = new DivisionOperationFactory();

        assert.isTrue(testInstance.create() instanceof DivisionOperation);
    }
}

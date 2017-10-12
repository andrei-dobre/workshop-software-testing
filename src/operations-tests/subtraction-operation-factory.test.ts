import { suite, test } from "mocha-typescript";
import { assert } from "chai";
import { SubtractionOperation } from '../operations/subtraction-operation.class';
import { SubtractionOperationFactory } from '../operations/subtraction-operation-factory.class';

@suite
class SubtractionOperationFactoryTest {

    @test
    public create__SubtractionOperation() {
       
        const obj = new SubtractionOperationFactory();

        assert.isTrue(obj.create() instanceof SubtractionOperation);
    }
}
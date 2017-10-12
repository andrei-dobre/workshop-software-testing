import { suite, test } from "mocha-typescript";
import { assert } from "chai";
import { AdditionOperation } from '../operations/addition-operation.class';
import { AdditionOperationFactory } from '../operations/addition-operation-factory.class';

@suite
class AdditionOperationFactoryTest {

    @test
    public create__AdditionOperation() {
       
        const obj = new AdditionOperationFactory();

        assert.isTrue(obj.create() instanceof AdditionOperation);
    }
}
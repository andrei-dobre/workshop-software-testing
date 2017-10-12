import { suite, test } from "mocha-typescript";
import { assert } from 'chai';
import { DivisionOperation } from '../operations/division-operation.class';
import { DivisionOperationFactory } from '../operations/division-operation-factory.class';


@suite
class DivisionOperationFactoryTest {
    
    @test
    public create__DivisionOperation() {
       
        const obj = new DivisionOperationFactory();

        assert.isTrue(obj.create() instanceof DivisionOperation);
    }
}
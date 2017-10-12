import { suite, test } from "mocha-typescript";
import { assert } from 'chai';
import { MultiplicationOperation } from "../operations/multiplication-operation.class";
import { MultiplicationOperationFactory } from "../operations/multiplication-operation-factory.class";


@suite
class MultiplicationOperationFactoryTest {
    
    @test
    public create__MultiplicationOperation() {
       
        const obj = new MultiplicationOperationFactory();

        assert.isTrue(obj.create() instanceof MultiplicationOperation);
    }
}
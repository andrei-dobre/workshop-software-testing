import { suite, test } from "mocha-typescript";
import { assert } from 'chai';
import { PowerOperation } from '../operations/power-operation.class';
import { PowerOperationFactory } from '../operations/power-operation-factory.class';

@suite
class PowerOperationFactoryTest {

    @test
    public create__PowerOperation() {
        
        const obj = new PowerOperationFactory();

        assert.isTrue(obj.create() instanceof PowerOperation);
    }
}
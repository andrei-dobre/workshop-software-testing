import { suite, test } from "mocha-typescript";
import * as Moq from "typemoq";
import { assert } from "chai";
import { IOperation } from '../operations-interfaces/i-operation.interface';
import { ProvidedValueOperationPipeComponent } from '../pipe/provided-value-operation-pipe-component.class';

@suite
class ProvidedValueOperationPipeComponentTest {

    @test
    public async getRightValue__ProvidedValue() {

        let providedValue: number;
        let receivedValue: number;

        providedValue = 2345;

        const operationMock = Moq.Mock.ofType<IOperation>();
        const obj = new ProvidedValueOperationPipeComponent(operationMock.object, providedValue);

        receivedValue = await obj['getRightValue']();

        assert.equal(receivedValue, providedValue);
    }
}
import { suite, test } from "mocha-typescript";
import * as Moq from "typemoq";
import { assert } from "chai";
import { IOperation } from '../../src/operations/interfaces/i-operation.interface';
import { ProvidedValueOperationPipeComponent } from '../../src/pipe/provided-value-operation-pipe-component.class';

@suite
class ProvidedValueOperationPipeComponentTest {
    @test
    public async getRightValue__ProvidedValue() {
        let providedValue: number;
        let receivedValue: number;

        providedValue = 2345;

        const operationMock = Moq.Mock.ofType<IOperation>();
        const testInstance = new ProvidedValueOperationPipeComponent(operationMock.object, providedValue);

        receivedValue = await testInstance['getRightValue']();

        assert.equal(receivedValue, providedValue);
    }
}
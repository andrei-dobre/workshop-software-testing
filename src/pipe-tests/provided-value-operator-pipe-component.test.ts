import { suite, test } from "mocha-typescript";
import * as Moq from "typemoq";
import { assert } from "chai";
import { IOperator } from '../operators-interfaces/i-operator.interface';
import { ProvidedValueOperatorPipeComponent } from '../pipe/provided-value-operator-pipe-component.class';

@suite
class ProvidedValueOperatorPipeComponentTest {

    @test
    public async getRightValue__ProvidedValue() {

        let providedValue: number;
        let receivedValue: number;

        providedValue = 2345;

        const operatorMock = Moq.Mock.ofType<IOperator>();
        const obj = new ProvidedValueOperatorPipeComponent(operatorMock.object, providedValue);

        receivedValue = await obj['getRightValue']();

        assert.equal(receivedValue, providedValue);
    }
}
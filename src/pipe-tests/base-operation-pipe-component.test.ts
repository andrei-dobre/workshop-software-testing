import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import * as Moq from 'typemoq';
import { IOperation } from '../operations-interfaces/i-operation.interface';
import { BaseOperationPipeComponent } from '../pipe/base-operation-pipe-component.class';

@suite
class BaseOperationPipeComponentTest {

    @test
    public getOperation__ProvidedValue() {
        
        let providedValue: IOperation;
        let receivedValue: IOperation;
        
        providedValue = Moq.Mock.ofType<IOperation>().object;
        
        const obj = new BaseOperationPipeComponent(providedValue);
        
        receivedValue = obj['operation'];
        
        assert.equal(receivedValue, providedValue);
    }

    @test
    public async getRightValue__OperationNeutralElement() {
       
        let providedValue: number;
        let receivedValue: number;

        providedValue = 123.45;

        const operationMock = Moq.Mock.ofType<IOperation>();
        operationMock.setup(x => x.neutralElement).returns(() => providedValue);

        const objMock = Moq.Mock.ofType(BaseOperationPipeComponent);
        objMock.callBase = true;
        objMock.setup(x => x['operation']).returns(() => operationMock.object);
        
        receivedValue = await objMock.object['getRightValue']();

        assert.equal(receivedValue, providedValue);
    }
    
    @test
    public async compute__operation_compute() {

        let providedValue: number;
        let receivedValue: number;

        providedValue = 123.45;

        const operationMock = Moq.Mock.ofType<IOperation>();
        operationMock.setup(x => x.compute(Moq.It.isAnyNumber(), Moq.It.isAnyNumber())).returns(() => providedValue);
        
        const objMock = Moq.Mock.ofType(BaseOperationPipeComponent);
        objMock.callBase = true;
        objMock.setup(x => x['operation']).returns(() => operationMock.object);
        objMock.setup(x => x['getRightValue']()).returns(() =>  new Promise<number>((resolve, reject) => resolve(0)));

        receivedValue = await objMock.object.compute(0);

        assert.equal(receivedValue, providedValue);
    }

    @test
    public async compute__operation_compute_correct_parameters() {

        let providedLeftValue: number;
        let receivedLeftValue: number;
        let providedRightValue: number;
        let receivedRightValue: number;

        providedLeftValue = 123.45;
        receivedLeftValue = 0;
        providedRightValue = 234.56;
        receivedRightValue = 0;

        const operationMock = Moq.Mock.ofType<IOperation>();
        operationMock
            .setup(x => x.compute(Moq.It.isAnyNumber(), Moq.It.isAnyNumber()))
            .callback((left, right) => {

                receivedLeftValue = left;
                receivedRightValue = right;
            })
            .returns(() => 0);

        const objMock = Moq.Mock.ofType(BaseOperationPipeComponent);
        objMock.callBase = true;
        objMock.setup(x => x['operation']).returns(() => operationMock.object);
        objMock.setup(x => x['getRightValue']()).returns(() =>  new Promise<number>((resolve, reject) => resolve(providedRightValue)));
    
        await objMock.object.compute(providedLeftValue);

        assert.equal(receivedLeftValue, providedLeftValue);
        assert.equal(receivedRightValue, providedRightValue);
    }
}
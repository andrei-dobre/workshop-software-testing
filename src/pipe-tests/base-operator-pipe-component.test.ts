import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import * as Moq from 'typemoq';
import { IOperator } from '../operators-interfaces/i-operator.interface';
import { BaseOperatorPipeComponent } from '../pipe/base-operator-pipe-component.class';

@suite
class BaseOperatorPipeComponentTest {

    @test
    public getOperator__ProvidedValue() {
        
        let providedValue: IOperator;
        let receivedValue: IOperator;
        
        providedValue = Moq.Mock.ofType<IOperator>().object;
        
        const obj = new BaseOperatorPipeComponent(providedValue);
        
        receivedValue = obj['operator'];
        
        assert.equal(receivedValue, providedValue);
    }

    @test
    public async getRightValue__OperatorNeutralElement() {
       
        let providedValue: number;
        let receivedValue: number;

        providedValue = 123.45;

        const operatorMock = Moq.Mock.ofType<IOperator>();
        operatorMock.setup(x => x.neutralElement).returns(() => providedValue);

        const objMock = Moq.Mock.ofType(BaseOperatorPipeComponent);
        objMock.callBase = true;
        objMock.setup(x => x['operator']).returns(() => operatorMock.object);
        
        receivedValue = await objMock.object['getRightValue']();

        assert.equal(receivedValue, providedValue);
    }
    
    @test
    public async compute__operator_compute() {

        let providedValue: number;
        let receivedValue: number;

        providedValue = 123.45;

        const operatorMock = Moq.Mock.ofType<IOperator>();
        operatorMock.setup(x => x.compute(Moq.It.isAnyNumber(), Moq.It.isAnyNumber())).returns(() => providedValue);
        
        const objMock = Moq.Mock.ofType(BaseOperatorPipeComponent);
        objMock.callBase = true;
        objMock.setup(x => x['operator']).returns(() => operatorMock.object);
        objMock.setup(x => x['getRightValue']()).returns(() =>  new Promise<number>((resolve, reject) => resolve(0)));

        receivedValue = await objMock.object.compute(0);

        assert.equal(receivedValue, providedValue);
    }

    @test
    public async compute__operator_compute_correct_parameters() {

        let providedLeftMember: number;
        let receivedLeftMember: number;
        let providedRightMember: number;
        let receivedRightMember: number;

        providedLeftMember = 123.45;
        receivedLeftMember = 0;
        providedRightMember = 234.56;
        receivedRightMember = 0;

        const operatorMock = Moq.Mock.ofType<IOperator>();
        operatorMock
            .setup(x => x.compute(Moq.It.isAnyNumber(), Moq.It.isAnyNumber()))
            .callback((left, right) => {

                receivedLeftMember = left;
                receivedRightMember = right;
            })
            .returns(() => 0);

        const objMock = Moq.Mock.ofType(BaseOperatorPipeComponent);
        objMock.callBase = true;
        objMock.setup(x => x['operator']).returns(() => operatorMock.object);
        objMock.setup(x => x['getRightValue']()).returns(() =>  new Promise<number>((resolve, reject) => resolve(providedRightMember)));
    
        await objMock.object.compute(providedLeftMember);

        assert.equal(receivedLeftMember, providedLeftMember);
        assert.equal(receivedRightMember, providedRightMember);
    }
}
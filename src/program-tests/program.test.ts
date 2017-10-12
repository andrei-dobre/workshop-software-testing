import { suite, test } from "mocha-typescript";
import * as Moq from 'typemoq';
import { assert } from "chai";
import { IPipe } from '../pipe-interfaces/i-pipe.interface';
import { IPipeComponent } from '../pipe-interfaces/i-pipe-component.interface';
import { IOperation } from '../operations-interfaces/i-operation.interface';
import { IOperationsCatalog } from '../operations-interfaces/i-operations-catalog.interface';
import { IOperationFactory } from '../operations-interfaces/i-operation-factory.interface';
import { Program } from "../program/program.class";
import { ProvidedValueOperationPipeComponent } from '../pipe/provided-value-operation-pipe-component.class';

@suite
class ProgramTest {

    @test
    public getOperationsCatalog__ProvidedValue() {
        
        let providedValue: IOperationsCatalog;
        let receivedValue: IOperationsCatalog;

        providedValue = Moq.Mock.ofType<IOperationsCatalog>().object;

        const obj = new Program(providedValue, Moq.Mock.ofType<IPipe>().object);

        receivedValue = obj['operationsCatalog'];

        assert.equal(receivedValue, providedValue);
    }

    @test
    public pipe__ProvidedValue() {

        let providedValue: IPipe;
        let receivedValue: IPipe;

        providedValue = Moq.Mock.ofType<IPipe>().object;

        const obj = new Program(Moq.Mock.ofType<IOperationsCatalog>().object, providedValue);

        receivedValue = obj['pipe'];

        assert.equal(receivedValue, providedValue);
    }

    @test
    public async run__ExecutesAndAwaitsForMenu() {

        let spyCalled: boolean = false;

        const objMock = Moq.Mock.ofType(Program, Moq.MockBehavior.Loose, false, Moq.Mock.ofType<IOperationsCatalog>().object, Moq.Mock.ofType<IPipe>().object);
        objMock.callBase = true;
        objMock
            .setup(x => x['menu']())
            .returns(() => new Promise<any>((resolve, reject) => {
                
                setTimeout(() => {
                    
                    resolve('Anything');
                    spyCalled = true;
                }, 20);
            }));

        await objMock.object.run();

        assert.isTrue(spyCalled);
    }

    @test
    public async runPipe__ResolvePipeOutput_CorrectPipeInput() {

        let inputValue: number = 345.67;
        let providedValue: number;
        let receivedValue: number;

        providedValue = 123.45;

        const pipeMock = Moq.Mock.ofType<IPipe>();
        pipeMock.setup(x => x.compute(inputValue)).returns(x => new Promise<number>((resolve, reject) => resolve(providedValue)));

        const objMock = Moq.Mock.ofType(Program, Moq.MockBehavior.Loose, false);
        objMock.callBase = true;
        objMock.setup(x => x['pipe']).returns(() => pipeMock.object);

        receivedValue = await objMock.object['runPipe'](inputValue);

        assert.equal(receivedValue, providedValue);
    }

    @test
    public createComponent__ProvidedValueOperationPipeComponent_CorrectlyCreated() {

        const operationMock = Moq.Mock.ofType<IOperation>();
        const rightValue = 123.45;

        const obj = new Program(Moq.Mock.ofType<IOperationsCatalog>().object, Moq.Mock.ofType<IPipe>().object);

        const createdComponent = obj['createComponent'](operationMock.object, rightValue);

        assert.isTrue(createdComponent instanceof ProvidedValueOperationPipeComponent);
        
        const castedCreatedComponent = createdComponent as ProvidedValueOperationPipeComponent;

        assert.equal(operationMock.object, castedCreatedComponent['operation']);
        assert.equal(rightValue, castedCreatedComponent['_rightValue']);
    }

    @test
    public addComponent__CorrectSymbol__AddsCreatedComponent() {

        let createComponentSpyCalled: boolean = false;
        let addComponentSpyCalled: boolean = false;

        const specifiedValue = 123.45;
        const operationFactoryMock = Moq.Mock.ofType<IOperationFactory>();
        const operationMock = Moq.Mock.ofType<IOperation>();
        const operationsCatalogMock = Moq.Mock.ofType<IOperationsCatalog>();
        const pipeComponentMock = Moq.Mock.ofType<IPipeComponent>();
        const pipeMock = Moq.Mock.ofType<IPipe>();
        const objMock = Moq.Mock.ofType(Program, Moq.MockBehavior.Loose, false, operationsCatalogMock.object, pipeMock.object);
        objMock.callBase = true;
        objMock
            .setup(x => x['createComponent'](operationMock.object, specifiedValue))
            .callback(() => createComponentSpyCalled = true)
            .returns(() => pipeComponentMock.object);

        operationsCatalogMock.setup(x => x.contains(Moq.It.isAnyString())).returns(() => true);
        operationsCatalogMock.setup(x => x.get(Moq.It.isAnyString())).returns(() => operationFactoryMock.object);
        operationFactoryMock.setup(x => x.create()).returns(() => operationMock.object);
        pipeMock
            .setup(x => x.addComponent(pipeComponentMock.object))
            .callback(() => addComponentSpyCalled = true);

        objMock.object['addComponent']('SomeSymbol', specifiedValue);

        assert.isTrue(createComponentSpyCalled, 'The component was not created');
        assert.isTrue(addComponentSpyCalled, 'The component was not added');
    }

    @test
    public addComponent__UnknownSymbol__ComponentNotCreated_NotAdded() {

        let createComponentSpyCalled: boolean = false;
        let addComponentSpyCalled: boolean = false;

        const operationsCatalogMock = Moq.Mock.ofType<IOperationsCatalog>();
        const pipeMock = Moq.Mock.ofType<IPipe>();
        const objMock = Moq.Mock.ofType(Program, Moq.MockBehavior.Loose, false, operationsCatalogMock.object, pipeMock.object);
        objMock.callBase = true;
        objMock
            .setup(x => x['createComponent'](Moq.It.isAny(), Moq.It.isAnyNumber()))
            .callback(() => createComponentSpyCalled = true);

        operationsCatalogMock.setup(x => x.contains(Moq.It.isAnyString())).returns(() => false);
        pipeMock
            .setup(x => x.addComponent(Moq.It.isAny()))
            .callback(() => addComponentSpyCalled = true);

        objMock.object['addComponent']('SomeSymbol', 123.45);

        assert.isFalse(createComponentSpyCalled, 'An attempt to create the component was made');
        assert.isFalse(addComponentSpyCalled, 'An attempt to add the component was made');
    }
}
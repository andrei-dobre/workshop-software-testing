import { suite, test } from "mocha-typescript";
import * as Moq from 'typemoq';
import { assert } from "chai";
import { IPipe } from '../src/pipe/interfaces/i-pipe.interface';
import { IPipeComponent } from '../src/pipe/interfaces/i-pipe-component.interface';
import { IOperation } from '../src/operations/interfaces/i-operation.interface';
import { IOperationsCatalog } from '../src/operations/interfaces/i-operations-catalog.interface';
import { IOperationFactory } from '../src/operations/interfaces/i-operation-factory.interface';
import { Program } from "../src/program.class";
import { ProvidedValueOperationPipeComponent } from '../src/pipe/provided-value-operation-pipe-component.class';

@suite
class ProgramTest {
    @test
    public getOperationsCatalog__ProvidedValue() {
        let providedValue: IOperationsCatalog;
        let receivedValue: IOperationsCatalog;

        providedValue = Moq.Mock.ofType<IOperationsCatalog>().object;

        const testInstance = new Program(providedValue, Moq.Mock.ofType<IPipe>().object);

        receivedValue = testInstance['operationsCatalog'];

        assert.equal(receivedValue, providedValue);
    }

    @test
    public pipe__ProvidedValue() {
        let providedValue: IPipe;
        let receivedValue: IPipe;

        providedValue = Moq.Mock.ofType<IPipe>().object;

        const testInstance = new Program(Moq.Mock.ofType<IOperationsCatalog>().object, providedValue);

        receivedValue = testInstance['pipe'];

        assert.equal(receivedValue, providedValue);
    }

    @test
    public async run__ExecutesAndAwaitsForMenu() {
        let spyCalled: boolean = false;

        const testInstanceMock = Moq.Mock.ofType(Program, Moq.MockBehavior.Loose, false, Moq.Mock.ofType<IOperationsCatalog>().object, Moq.Mock.ofType<IPipe>().object);
        testInstanceMock.callBase = true;
        testInstanceMock
            .setup(x => x['menu']())
            .returns(() => new Promise<any>((resolve, reject) => {
                setTimeout(() => {
                    resolve('Anything');
                    spyCalled = true;
                }, 20);
            }));

        await testInstanceMock.object.run();

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

        const testInstanceMock = Moq.Mock.ofType(Program, Moq.MockBehavior.Loose, false);
        testInstanceMock.callBase = true;
        testInstanceMock.setup(x => x['pipe']).returns(() => pipeMock.object);

        receivedValue = await testInstanceMock.object['runPipe'](inputValue);

        assert.equal(receivedValue, providedValue);
    }

    @test
    public createComponent__ProvidedValueOperationPipeComponent_CorrectlyCreated() {
        const operationMock = Moq.Mock.ofType<IOperation>();
        const rightValue = 123.45;

        const testInstance = new Program(Moq.Mock.ofType<IOperationsCatalog>().object, Moq.Mock.ofType<IPipe>().object);

        const createdComponent = testInstance['createComponent'](operationMock.object, rightValue);

        assert.isTrue(createdComponent instanceof ProvidedValueOperationPipeComponent);
        
        const castedCreatedComponent = createdComponent as ProvidedValueOperationPipeComponent;

        assert.equal(operationMock.object, castedCreatedComponent['operation']);
        assert.equal(rightValue, castedCreatedComponent['rightValue']);
    }

    @test
    public addComponent__CorrectSymbol__AddsCreatedComponent() {
        const specifiedValue = 123.45;
        const operationFactoryMock = Moq.Mock.ofType<IOperationFactory>();
        const operationMock = Moq.Mock.ofType<IOperation>();
        const operationsCatalogMock = Moq.Mock.ofType<IOperationsCatalog>();
        const pipeComponentMock = Moq.Mock.ofType<IPipeComponent>();
        const pipeMock = Moq.Mock.ofType<IPipe>();
        const testInstanceMock = Moq.Mock.ofType(Program);
        testInstanceMock.callBase = true;
        testInstanceMock
            .setup(x => x['createComponent'](Moq.It.isAny(), Moq.It.isAny()))
			.returns(() => pipeComponentMock.object);
		testInstanceMock
			.setup(_ => _["operationsCatalog"])
			.returns(() => operationsCatalogMock.object);
		testInstanceMock
			.setup(_ => _["pipe"])
			.returns(() => pipeMock.object);

        operationsCatalogMock.setup(x => x.contains(Moq.It.isAnyString())).returns(() => true);
        operationsCatalogMock.setup(x => x.get(Moq.It.isAnyString())).returns(() => operationFactoryMock.object);
        operationFactoryMock.setup(x => x.create()).returns(() => operationMock.object);

        testInstanceMock.object['addComponent']('SomeSymbol', specifiedValue);

		testInstanceMock.verify(_ => _["createComponent"](operationMock.object, specifiedValue), Moq.Times.once());
		pipeMock.verify(_ => _["addComponent"](pipeComponentMock.object), Moq.Times.once());
    }

    @test
    public addComponent__UnknownSymbol__ComponentNotCreated_NotAdded() {
        let createComponentSpyCalled: boolean = false;
        let addComponentSpyCalled: boolean = false;

        const operationsCatalogMock = Moq.Mock.ofType<IOperationsCatalog>();
        const pipeMock = Moq.Mock.ofType<IPipe>();
        const testInstanceMock = Moq.Mock.ofType(Program);
        testInstanceMock.callBase = true;
        testInstanceMock
            .setup(x => x['createComponent'](Moq.It.isAny(), Moq.It.isAnyNumber()))
            .callback(() => createComponentSpyCalled = true);
		testInstanceMock
			.setup(_ => _["operationsCatalog"])
			.returns(() => operationsCatalogMock.object);
		testInstanceMock
			.setup(_ => _["pipe"])
			.returns(() => pipeMock.object);

        operationsCatalogMock.setup(x => x.contains(Moq.It.isAnyString())).returns(() => false);
        pipeMock
            .setup(x => x.addComponent(Moq.It.isAny()))
            .callback(() => addComponentSpyCalled = true);

        testInstanceMock.object['addComponent']('SomeSymbol', 123.45);

        assert.isFalse(createComponentSpyCalled, 'An attempt to create the component was made');
        assert.isFalse(addComponentSpyCalled, 'An attempt to add the component was made');
    }
}
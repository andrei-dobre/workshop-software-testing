import { IPipe } from '../pipe-interfaces/i-pipe.interface';
import { suite, test } from "mocha-typescript";
import * as Moq from 'typemoq';
import { assert } from "chai";
import { IOperationsCatalog } from '../operations-interfaces/i-operations-catalog.interface';
import { Program } from "../program/program.class";

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
}
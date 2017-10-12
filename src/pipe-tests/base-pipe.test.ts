import { suite, test } from "mocha-typescript";
import { assert } from 'chai';
import * as Moq from 'typemoq';
import { IPipeComponent } from '../pipe-interfaces/i-pipe-component.interface';
import { BasePipe } from "../pipe/base-pipe.class";

@suite
class BasePipeTest {

    @test
    public addComponent__AppendedAtTheEnd() {
       
        const obj = new BasePipe();
        const componentsQueue = obj['_componentsQueue'];

        componentsQueue.push(Moq.Mock.ofType<IPipeComponent>().object);
        componentsQueue.push(Moq.Mock.ofType<IPipeComponent>().object);
        componentsQueue.push(Moq.Mock.ofType<IPipeComponent>().object);
        componentsQueue.push(Moq.Mock.ofType<IPipeComponent>().object);
        
        const initialLength = componentsQueue.length;

        let addedComponent: IPipeComponent;
        addedComponent = Moq.Mock.ofType<IPipeComponent>().object;

        obj.addComponent(addedComponent);

        assert.equal(componentsQueue.length, initialLength + 1);
        assert.equal(componentsQueue[componentsQueue.length - 1], addedComponent);
    }

    @test
    public async compute__AllComponentsPiped() {

        const obj = new BasePipe();

        const inputs = new Array<number>();
        const outputs = new Array<number>();
        const componentsQueue = obj['_componentsQueue'];

        const componentsCount = 5;

        for (let i = 0; i < componentsCount; ++i) {

            if (0 === i) {
                
                inputs.push((i + 1) * 4.65);
            }
            else {

                inputs.push(outputs[i-1]);
            }

            outputs.push((i + 1) * 2.24);

            const componentMock = Moq.Mock.ofType<IPipeComponent>();
            componentMock
                .setup(x => x.compute(inputs[i]))
                .returns(() => new Promise<number>((resolve, reject) => resolve(outputs[i])));

            componentsQueue.push(componentMock.object);
        }

        const result = await obj.compute(inputs[0]);

        assert.equal(result, outputs[componentsCount - 1]);
    }

    @test
    public async compute_NoComponents_Input() {

        let providedValue: number;
        let receivedValue: number;

        providedValue = 123.45;

        const obj = new BasePipe();

        receivedValue = await obj.compute(providedValue);

        assert.equal(providedValue, receivedValue);
    }
}
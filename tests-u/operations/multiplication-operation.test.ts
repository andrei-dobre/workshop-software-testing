import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { MultiplicationOperation } from '../../src/operations/multiplication-operation.class';

@suite
class MultiplicationOperationTest {
    private testInstance: MultiplicationOperation;

    public before() {
        this.testInstance = new MultiplicationOperation();
    }

    @test
    public getSymbol__Star() {
        assert.equal(this.testInstance.symbol, '*');
    }

    @test
    public compute__2_3__6() {
        assert.equal(this.testInstance.compute(2, 3), 6);
    }
    
    @test
    public compute__4_5__20() {
        assert.equal(this.testInstance.compute(4, 5), 20);
    }
}

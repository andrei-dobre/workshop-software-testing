import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { SubtractionOperation } from '../../src/operations/subtraction-operation.class';

@suite
class SubtractionOperationTest {
    private testInstance: SubtractionOperation;

    public before() {
        this.testInstance = new SubtractionOperation();
    }

    @test
    public getSymbol__Minus() {
        assert.equal(this.testInstance.symbol, '-');
    }
    
    @test
    public getNeutralElement__0() {
        assert.equal(this.testInstance.neutralElement, 0);
    }

    @test
    public compute__3_2__1() {
        assert.equal(this.testInstance.compute(3, 2), 1);
    }

    @test
    public compute__4_5__Neg1() {
        assert.equal(this.testInstance.compute(4, 5), -1);
    }
}
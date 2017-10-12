import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';
import { SubtractionOperation } from '../operations/subtraction-operation.class';

@suite
class SubtractionOperationTest {

    private _testInstance: SubtractionOperation;

    public before() {

        this._testInstance = new SubtractionOperation();
    }

    @test
    public getSymbol__Minus() {

        assert.equal(this._testInstance.symbol, '-');
    }
    
    @test
    public getNeutralElement__0() {

        assert.equal(this._testInstance.neutralElement, 0);
    }

    @test
    public compute__3_2__1() {

        assert.equal(this._testInstance.compute(3, 2), 1);
    }

    @test
    public compute__4_5__Neg1() {

        assert.equal(this._testInstance.compute(4, 5), -1);
    }
}
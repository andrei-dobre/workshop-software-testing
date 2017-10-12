import { IPipe } from '../pipe-interfaces/i-pipe.interface';
import { IPipeComponent } from '../pipe-interfaces/i-pipe-component.interface';

/**
 * A basic implementation of the IPipe interface.
 * 
 * @see IPipe
 */
export class BasePipe implements IPipe {
    
    private _componentsQueue: Array<IPipeComponent>;

    /**
     * Initializes a new BasePipe instance.
     */
    constructor() {

        this._componentsQueue = [];
    }

    /**
     * Runs the specified input through the pipe.
     */
    public compute(input: number): Promise<number> {

        return new Promise<number>(async (resolve, reject) => {

            let output = input;

            for (const component of this._componentsQueue) {

                output = await component.compute(output);
            }

            resolve(output);
        });
    }

    /**
     * Adds a component at the end of the pipe.
     */
    public addComponent(component: IPipeComponent): void {
        
        this._componentsQueue.push(component);
    }
}
import { IPipe } from './interfaces/i-pipe.interface';
import { IPipeComponent } from './interfaces/i-pipe-component.interface';

export class BasePipe implements IPipe {
    private components: Array<IPipeComponent>;

    public constructor() {
        this.components = [];
    }

    public async compute(input: number): Promise<number> {
        let output = input;

        for (const component of this.components) {
            output = await component.compute(output);
        }
        
        return output;
    }

    public addComponent(component: IPipeComponent): void {
        this.components.push(component);
    }
}
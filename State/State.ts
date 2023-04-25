
class Context{
    private state: State;

    constructor(state: State){
        this.transition(state);
    }

    public transition(state: State): void{
        console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    public request1(): void{
        this.state.handle1();
    }

    public request2(): void{
        this.state.handle2();
    }
}

abstract class State{
    protected context: Context;

    public setContext(context: Context){
        this.context = context;
    }

    public abstract handle1(): void;

    public abstract handle2(): void;
}

// 기본기능을 담당하는 ConcreteComponent와 추가 기능을 담당하는 Decorator의 공통 기능 정의
interface Component{
    operation(): string;
}

class ConcreteComponent implements Component{
    public operation(): string {
        return 'ConcreteComponent';
    }
}

class Decorator implements Component{
    protected component: Component;

    constructor(component: Component){
        this.component = component;
    }

    public operation(): string{
        return this.component.operation();
    }
}

class ConCreteDecoratorA extends Decorator{
    public override operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`
    }
}

class ConCreteDecoratorB extends Decorator{
    public override operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`
    }
}

function clientCode(component: Component){
    console.log(`Result: ${component.operation()}`);
}

// 데코레이터를 적용안한 컴포넌트 생성
const test = new ConcreteComponent();
console.log(`Client: 기본 기능만을 가지고 있음`);
clientCode(test);
console.log("\n");

// 데코레이터 결합
const decorator1 = new ConCreteDecoratorA(test);
const decorator2 = new ConCreteDecoratorB(decorator1);
console.log(`Client: 데코레이터 적용`);
clientCode(decorator2);

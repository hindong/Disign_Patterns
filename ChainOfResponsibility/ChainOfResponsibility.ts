interface Handler{
    setNext(handler: Handler): Handler;

    handle(request: string): string;
}

abstract class AbstractHandler implements Handler{
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
        
    }
}

interface Handler{
    setNext(handler: Handler): Handler;

    handle(request: string): string;
}

abstract class AbstractHandler implements Handler{
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
        
    }
    
    public handle(request: string): string {
      if (this.nextHandler) {
         return this.nextHandler.handle(request);
      }

      return null;
    }
}

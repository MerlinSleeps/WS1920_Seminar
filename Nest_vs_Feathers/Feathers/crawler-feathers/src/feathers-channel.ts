

export default class FeathersChannel {

  public handle(req: any, res: any) {
    let body = '';
    req.on('data', (chunk: any) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.table(`Incoming data: ${body}`);
      const answer = {
        greetings: 'Hello from the feathers backend',
        eventList: []
      };
      res.status(200)
        .send(answer)
        .end('ok');
    });
  }

}

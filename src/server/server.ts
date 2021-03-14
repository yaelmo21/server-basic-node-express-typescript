import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import Enviroment from '../environment/environment';

export default class Server {
  private static _instance: Server;
  public port: number;
  public app: express.Application;
  private constructor() {
    this.port = Enviroment.SERVER_PORT;
    this.app = express();
    this.configServer();
  }

  private configServer(): void {
    this.app.use(compression());
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(helmet());
  }

  public static get instance(): Server {
    return this._instance || (this._instance = new this());
  }

  start(callback: (() => void)): void {
    this.app.listen(this.port, callback);
  }
}
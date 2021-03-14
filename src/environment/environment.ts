import * as dotenv from "dotenv";
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Add Environment Variables
export interface Enviroment {
  SERVER_PORT: number
}


const Enviroment: Enviroment = {
  SERVER_PORT: Number(process.env.PORT) || 3000,
}

export default Enviroment;
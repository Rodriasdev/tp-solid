import express, {Application} from "express";
import cors from 'cors';
import morgan from "morgan";
import { PORT } from "./config/config";


class Server {

    private app: Application;
    private port: number | undefined

    constructor(){
        
        this.port = +PORT!
        this.app = express()
        

        this.dbconnect()
        this.middlewares()
        this.Routes()
    }

    async dbconnect():Promise<void>{

    }

    
    middlewares():void{
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    Routes():void{

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server listening in the port ${this.port}`);
            
        })
    }

}


new Server().listen()
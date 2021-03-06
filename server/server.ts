import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();
import {knex} from './knex';
import { UserService } from './user-Service';


const app = express();

app.use(express.json());
app.use(express.urlencoded());

let userService = new UserService(knex)



//from browser to submit form to DB
//Get /questions -> http://localhost:8080/questions
app.post("/questionnaire", (req: Request, res: Response)=>{
    // const formData = req.body; //request form from browser
    


 
});

//Get /questions ->localhost:8080/questions
//browser to get questions from database to browser
app.get("/questions", async(req: Request, res: Response)=>{
    const questions = await knex("question_list").select("id", "code", "title", "description", "options", "min", "max").where("form_id",1);
    res.json(questions);
    console.log(questions);
})
//POST /questionaire ->localhost:8080/questionaire
app.post("/questionaire", async(req: Request, res: Response)=>{
    const questions = await knex("questions").select("id", "question","option_0","option_1","option_2", "option_3", "option_4", "remark")
    res.json(questions);
})

app.post("/login", async(req: Request, res: Response)=>{
    // const userLogin = await knex("questions").select("id", "question","option_0","option_1","option_2", "option_3", "option_4", "remark")
    // res.json(userLogin);
})


// app.use((req, res) => {
//     res.status(404).sendFile(path.resolve(path.join('public', '404.html')))
//   })
// }


app.listen(process.env.PORT, ()=>{console.log( `backend server is listening to PORT ${process.env.PORT}`)})

import path from "path"
import express from "express"
const __dirname = path.resolve()
const app = express();

app.use(express.static(path.join(__dirname,'build'))) //  usar de forma estatica toos os arquivos da pasta "dist";
app.set('port', process.env.PORT || 3002);



const server = app.listen(app.get('port'), () =>{
    console.log("Escutando a Porta " , server.address().port)
});

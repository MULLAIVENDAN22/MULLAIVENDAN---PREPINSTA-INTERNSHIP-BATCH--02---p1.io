const app = express();
const port = 4000

require('./db/connection')

const signupRecord =require('./models/signupschema')

app.set('view engine','ejs')
app.use('/css')

app.get('/',(req,res)=>{
    res.render(index)
})

app.listen(port,()=>console.log("connected to port"))
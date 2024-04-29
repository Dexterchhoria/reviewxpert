const express = require("express");
const path = require("path");
const app = express();
const hbs=require("hbs");
const collection = require("./mongodb")

app.use(express.json())

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))
app.use(express.urlencoded({extended:false}))


app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/login', (req, res) => {
    res.render('login')
})


app.post('/signup',async(req, res) => {

    const data = {
        name: req.body.name,
        password: req.body.password
    }

        await collection.insertMany([data])

        res.render("login")
    
})

app.post('/login', async (req, res) => {

    try {
        const check = await collection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
           res.render("home")
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
        

    }


})

       
app.listen(5600, () => {
    console.log('port connected localhost:5600/login ');
})
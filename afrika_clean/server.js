const one_express = require('express');

const app = one_express();

app.use(one_express.static('public'));

app.set("view engine", "ejs");



app.get('/', (req, res) => {
    res.render("pages/index",{path:'/'})
})

app.get('/about', (req, res) => {
    res.render("pages/about",{path:'/about'})
})

app.get('/contact', (req, res) => {
    res.render("pages/contact",{path:'/contact'})
})
app.get('/service', (req, res) => {
    res.render("pages/service",{path:'/service'})
})


app.listen(3000, () => {
    console.log("Server is running on  localhost:3000");
})

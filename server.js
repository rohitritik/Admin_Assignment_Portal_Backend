import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});  

// app.get('/',()=>{
//     console.log(`<h1>This is home page</h1>`)
// })

// app.get('/login',()=>{
//     console.log(`This is login page`)
// }); 
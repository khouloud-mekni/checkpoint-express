//requiring the dependcies
const express = require("express")
const app = express()
//middleware
app.use(workingTime=(req,res,next)=>{
    const days = new Date().getDay()
    const hours= new Date().getHours()
    if( 
        (days==0)||(days==6)||(hours<=9)||(hours>=17)
        
        
        )
        
            {
                res.sendFile(__dirname+ "/Views/closed.html");
            }
            else{
                next()
            }
});

app.use(express.static('Views'))

//server on listen
app.listen(5001,(err)=>{
if (err){
    console.log('server is down')
}
console.log('server is running')
})
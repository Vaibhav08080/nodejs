console.log("HI")


function runsetTimeOut():void{
    console.log("1.SetTimeout exampe started")
    setTimeout(()=>{
        console.log("This runs after 1 second")
    },1000)
    console.log("3.this will run immideately")
}


runsetTimeOut()


function forresetingsettimeout():void{
    const timer = setTimeout(() => {
        console.log("print this timer ")
    }, 3000);
    clearTimeout(timer)
}

forresetingsettimeout()

//setinterval is going to run the same callback again and again after a time
function setintervalfxn():void{
    let count=0
    const intervalid=setInterval(()=>{
        count++
        console.log(`${count}`);
        if (count==3){
            clearInterval(intervalid)
        }
        
    },1000)
}
setintervalfxn()
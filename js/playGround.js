var time = new Date();
if (time.getHours() <= 18 ){
   console.log(time.getHours());
    document.body.style.backgroundColor = "#F5F5F5";
   console.log("it's going to be a long day");
}

else if (time.getHours() >= 19 && time.getHours <= 21){
    console.log(time.getHours());
    document.body.style.backgroundColor = "9E9E9E";
}

else{
   
   console.log(time.getHours());
   console.log("when all other colors fail");
   document.body.style.backgroundColor = "#2E2E2E";
}



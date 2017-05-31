var time = new Date();
if (time.getHours() < 8){
   console.log(time.getHours());
   document.body.style.backgroundColor = "white";
   console.log("it's going to be a long day");
}

else if (time.getHours() <= 8 && time.getHours <= 16){
    console.log(time.getHours());
    document.body.style.backgroundColor = "gray";
}

else{
   
   console.log(time.getHours());
   document.body.style.backgroundColor = body.style.backgroundColor;
}



function hamburgerExpand(){
    var x = document.getElementById("navlinksID");
    console.log(x)
    if(x.style.display==="block"){
        x.style.display="none";
    }else{
         x.style.display="block";
     
    }
}
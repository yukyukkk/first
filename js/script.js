

let i = 0;
setInterval(function(){
    if(i<2){
        i++
    }else{
        i=0
    }
    $('.slide ul').animate({marginLeft:-1200 * i}, 1000);
}, 3000);


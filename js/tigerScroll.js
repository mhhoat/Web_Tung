window.addEventListener("scroll",function(){
    var y= window.scrollY.toFixed(2);
    if(y>0&&y<500){

        console.log("Đã cuộn chuột đến vị trí y= "+y+" pixcel");
    }
    if(y>500){
        console.log("Đã cuộn chuột lớn hơn 500 px");
    }
})
var toggle; 
var on="main";
toggle=(id) => {
    if(on!=id){
        document.getElementById(on).style.display="none";
        document.getElementById(id).style.display="flex";
        on=id;
    }
}
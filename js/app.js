window.onload=function(){

var pos=0, posy=150,m=10;
var box=document.getElementById("box");

var t= setInterval(mover,10);

function mover()
{
    if(pos>=150)//abajo
    {
        posy-=m;
    }
    if(pos<=150 && posy==150)//derecha
    {
        pos+=m;
    }
    if(posy==0 && pos>=0)//izquierda
    {
        pos-=m;
    }
    if(pos==0 && posy<=150)//arriba
    {
        posy+=m;
    }
    box.style.left=pos+"px";
    box.style.bottom=posy+"px";
}
};
function parar(){
    alert("Parar Animación");
}
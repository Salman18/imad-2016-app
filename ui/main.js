console.log('Loaded!');
//change the text of main-text div
var element = document.getElementById("main.text");

element.innerHTML="HI,I am salman ,welocme to WEB APP";

//move the image
var img=document.getElementById("madi");
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+2;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function()
{

    var interval=setInterval(moveRight,50);
};

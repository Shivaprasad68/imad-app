console.log('Loaded!');

var element= document.getElementById('maintext');
element.innerHTML='my name is shivaprasad dude';

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft= marginLeft + 5;
    image.style.marginLeft= marginLeft + 'px';
}
img.oneclick = function(){
    var interval = setInterval(moveRight,50);
};

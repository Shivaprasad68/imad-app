console.log('Loaded!');

var element= document.getElementById('maintext');
element.innerHTML='my name is shivaprasad dude';

var img=document.getElementById('madi');
var marginLeft=0;
function marginRight()
{
    marginLeft= marginLeft + 10;
    image.style.marginLeft= marginLeft + 'px';
}
img.oneclick = function(){
    var interval = setInterval(moveRight,0);
};

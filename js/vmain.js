/*const toggle= document.getElementById('toggle');
toggle.onclick = function(){
   toggle.classList.toggle('active');
}*/

const playpause = document.querySelector('.playpause');

playpause.addEventListener('click', () => {
  playpause.classList.toggle('playing');
});


var mySong =document.getElementById("mySong");
var icon_play =document.getElementById("icon_play");

icon_play.onclick = function(){
    if(mySong.paused){
        mySong.play();
    }else{
        mySong.pause();
    }
}

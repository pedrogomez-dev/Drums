let buttons = document.querySelectorAll(".drum").length;
for(let i=0; i<buttons;i++){
document.querySelectorAll(".set button")[i].addEventListener("click", function(){
    /*let song = new Audio('./sounds/tom-1.mp3');
    song.play();*/
    let decision = this.innerHTML;
    makeSound(decision);
    sombrear(decision);
});
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    sombrear(event.key);
});
function makeSound(key){
    let sonido = new Audio;
    switch(key){
        case 'w':
            sonido.src = './sounds/crash.mp3';
            sonido.play();
            break;
        case 'a':
            sonido.src = './sounds/kick-bass.mp3';
            sonido.play();
            break;
        case 's':
            sonido.src = './sounds/snare.mp3';
            sonido.play();
            break;
        case 'd':
            sonido.src = './sounds/tom-1.mp3';
            sonido.play();
            break;
        case 'j':
            sonido.src = './sounds/tom-2.mp3';
            sonido.play();
            break;
        case 'k':
            sonido.src = './sounds/tom-3.mp3';
            sonido.play();
            break;
        case 'l':
            sonido.src = './sounds/tom-4.mp3';
            sonido.play();
            break;
        default:
    }
}
function sombrear(teclaActual){
    let activar = document.querySelector('.'+teclaActual);
    activar.classList.add('pressed');
    setTimeout(function(){
        activar.classList.remove('pressed')
    },(100));

}
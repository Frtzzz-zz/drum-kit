// const drumBtns = document.querySelectorAll('.drum');

// get everything
const kick = document.querySelector('.kick');
const snare1 = document.querySelector('.snare1'); // consistency sa naming tandaan
const snare2 = document.querySelector('.snare2');
const hiHat = document.querySelector('.hiHat');
const openHiHat = document.querySelector('.openHiHat');
const snareRoll = document.querySelector('.roll');

const tom1 = document.querySelector('.tom1');
const tom2 = document.querySelector('.tom2');
const tomScream = document.querySelector('.tomScream');
const crash1 = document.querySelector('.crash1');
const crash2 = document.querySelector('.crash2');
const ride = document.querySelector('.ride');

const crossStick = document.querySelector('.crossStick');
const floorTom = document.querySelector('.floorTom');

// define sfx
var kickSFX = new Audio();
kickSFX.src = 'assets/kick.wav';

var snare1SFX = new Audio();
snare1SFX.src = 'assets/snare1.wav';

var snare2SFX = new Audio();
snare2SFX.src = 'assets/snare1.wav';

var hiHatSFX = new Audio();
hiHatSFX.src = 'assets/hi-hat.wav';

var openHiHatSFX = new Audio();
openHiHatSFX.src = 'assets/open-hi-hat.wav';

var snareRollSFX = new Audio();
snareRollSFX.src = 'assets/roll.wav';

var tom1SFX = new Audio();
tom1SFX.src = 'assets/tom1.wav';

var tom2SFX = new Audio();
tom2SFX.src = 'assets/tom2.wav';

var tomScreamSFX = new Audio();
tomScreamSFX.src = 'assets/tom-scream.wav';

var crash1SFX = new Audio();
crash1SFX.src = 'assets/crash1.wav';

var crash2SFX = new Audio();
crash2SFX.src = 'assets/crash2.wav';

var rideSFX = new Audio();
rideSFX.src = 'assets/ride.wav';

var crossStickSFX = new Audio();
crossStickSFX.src = 'assets/cross-stick.wav';

var floorTomSFX = new Audio();
floorTomSFX.src = 'assets/floor-tom.wav';



// keydown events
document.addEventListener('keydown', (e) => {
                    //e.key === 'A' kung sakaling makalimutang naka capslock
  if(e.key === 'a' || e.key === 'A'){
        kickSFX.currentTime = 0;
        kickSFX.play();
        togglePressed(kick);
        console.log('KICK PRESSED');
    }
  if(e.key === 's' || e.key === 'S'){
        snare1SFX.currentTime = 0;
        snare1SFX.play();
        togglePressed(snare1);
        console.log('SNARE 1 PRESSED');
    }
  if(e.key === 'h' || e.key === 'H'){
        snare2SFX.currentTime = 0;
        snare2SFX.volume = 0.5; // onting dynamics or accenting
        snare2SFX.play();
        togglePressed(snare2);
        console.log('SNARE 2 PRESSED');
    }
  if(e.key === 'j' || e.key === 'J'){
        hiHatSFX.currentTime = 0;
        hiHatSFX.play();
        togglePressed(hiHat);
        console.log('HIHAT PRESSED');    
    }
  if(e.key === 'k' || e.key === 'K'){
        openHiHatSFX.currentTime = 0;
        openHiHatSFX.play();
        togglePressed(openHiHat);
        console.log('HIHAT PRESSED');    
    }
   if(e.key === 'd' || e.key === 'D'){
        snareRollSFX.currentTime = 0;
        snareRollSFX.play();
        togglePressed(snareRoll);
        console.log('ROLL PRESSED');    
    }
   if(e.key === 'e' || e.key === 'E'){
        tom1SFX.currentTime = 0;
        tom1SFX.play();
        togglePressed(tom1);
        console.log('TOM 1 PRESSED');    
    }
    if(e.key === 'u' || e.key === 'U'){
        tom2SFX.currentTime = 0;
        tom2SFX.play();
        togglePressed(tom2);
        console.log('TOM 2 PRESSED');    
    }
    if(e.key === 'q' || e.key === 'q'){
        tomScreamSFX.currentTime = 0;
        tomScreamSFX.play();
        togglePressed(tomScream);
        console.log('TOM SCREAM PRESSED');    
    }
    if(e.key === 'r' || e.key === 'R'){
        crash1SFX.currentTime = 0;
        crash1SFX.play();
        togglePressed(crash1);
        console.log('CRASH 1 PRESSED');    
    }
    if(e.key === 'y' || e.key === 'Y'){
        crash2SFX.currentTime = 0;
        crash2SFX.play();
        togglePressed(crash2);
        console.log('CRASH 2 PRESSED');    
    }
    if(e.key === 'i' || e.key === 'I'){
        rideSFX.currentTime = 0;
        rideSFX.play();
        togglePressed(ride);
        console.log('RIDE PRESSED');    
    }
    if(e.key === 'c' || e.key === 'C'){
        crossStickSFX.currentTime = 0;
        crossStickSFX.play();
        togglePressed(crossStick);
        console.log('CROSS-STICK PRESSED');    
    }
    if(e.key === 'b' || e.key === 'B' || e.key === 'm' || e.key === 'M'){
        floorTomSFX.currentTime = 0;
        floorTomSFX.play();
        togglePressed(floorTom);
        console.log('CROSS-STICK PRESSED');    
    }
})



function togglePressed(el){
    el.classList.toggle('pressed');
    setTimeout(() => {
        el.classList.toggle('pressed');
    }, 150);
}




// drumBtns.forEach(drum => {
    

// })

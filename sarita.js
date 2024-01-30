const canvas = document.querySelector('.canvas');
canvas.width = window.innerWidth;

canvas.height = 0.5625*window.innerWidth;

const context = canvas.getContext('2d');

const frameCount = 1074;

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = 0.5625*window.innerWidth;
})

window.addEventListener('load', () => {
    document.querySelector('#loading-screen').style.display = 'none';
})

function indexReturn(index){
    if (index < 10){
        return "000";
    }
    else if (index > 9 && index < 100){
        return "00";
    }
    else if (index > 99 && index < 1000){
        return "0";
    }
    else if (index > 999 && index < 10000){
        return "";
    }
}


const frameName = (index) => `./images/${indexReturn(index)}${index}.webp`;


const allIms = [];

let seek = { frame : 1};

for (var i = 1; i < frameCount; i++){
    const frame = new Image();
    frame.src = frameName(i);
    allIms.push(frame);
}

gsap.to(seek, {
    frame : frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger : {
        scrub: true,
        pin: 'canvas',
        end: '1500%'
    },
    onUpdate: Update,
})

allIms[0].onload = Update;


function Update(){
    // erase the existing canvas
    context.clearRect(0,0, canvas.width, canvas.height);
    context.drawImage(allIms[seek.frame], 0, 0, canvas.width, canvas.height);
}


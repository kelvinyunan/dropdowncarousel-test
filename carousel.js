const images = document.getElementsByClassName('slide');
const round = document.getElementsByClassName('round');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let index = 0;

leftBtn.addEventListener('click',()=>{
    if(index == 0) {
        images[index].classList.toggle('hidden');
        round[index].classList.toggle('whiteRound')
        index = images.length - 1;
        images[index].classList.toggle('hidden');
        round[index].classList.toggle('whiteRound')
    } else {
        images[index].classList.toggle('hidden');
        index--;
        images[index].classList.toggle('hidden');
    }
})

rightBtn.addEventListener('click',()=>{
    if(index == images.length - 1) {
        images[index].classList.toggle('hidden');
        round[index].classList.toggle('whiteRound')
        index = 0;
        images[index].classList.toggle('hidden');
        round[index].classList.toggle('whiteRound')
    } else {
        images[index].classList.toggle('hidden');
        round[index].classList.toggle('whiteRound')
        index++;
        images[index].classList.toggle('hidden');
        round[index].classList.toggle('whiteRound')
    }
})

Array.from(round).forEach((btn, idx)=>{
    btn.addEventListener('click',()=>{
        images[index].classList.toggle('hidden');
        round[index].classList.toggle('whiteRound')
        index = idx;
        images[index].classList.toggle('hidden');
        round[index].classList.toggle('whiteRound')
    })
})

function updateIndicator() {
    round[index].classList.add()
}

round[index].classList.toggle('whiteRound')
images[index].classList.toggle('hidden');

setInterval(()=>{
    if(index == images.length - 1) {
        images[index].classList.toggle('hidden');
        round[index].classList.toggle('whiteRound')
        index = 0;
        images[index].classList.toggle('hidden');
        round[index].classList.toggle('whiteRound')
    } else {
        images[index].classList.toggle('hidden');
        round[index].classList.toggle('whiteRound')
        index++;
        images[index].classList.toggle('hidden');
        round[index].classList.toggle('whiteRound')
    }
}, 5000)
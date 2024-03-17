const listImages = document.querySelector('.listImages');
const imgs = document.getElementsByClassName('imgInSlide');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
const limit = imgs.length;
let current = 0;

const handle = () => {
    if(current == limit - 1){
        current = 0;
        let width = imgs[0].offsetWidth;
        listImages.style.transform = `translateX(0px)`;
    }else{
        current++;
        let width =  imgs[0].offsetWidth;
        listImages.style.transform = `translateX(${width * -1 * current}px)`;
    }
}

let handleTimeSlide = setInterval(handle, 4000);

btnRight.addEventListener('click', () => {
    clearInterval(handleTimeSlide)
    handle()
    handleTimeSlide = setInterval(handle, 4000);
})

btnLeft.addEventListener('click', () => {
    clearInterval(handleTimeSlide)
    if(current == 0){
        current = limit - 1;
        let width = imgs[0].offsetWidth;
        listImages.style.transform = `translateX(${width * -1 * current}px)`;
    }else{
        current--;
        let width =  imgs[0].offsetWidth;
        listImages.style.transform = `translateX(${width * -1 * current}px)`;
    }
    handleTimeSlide = setInterval(handle, 4000);
})
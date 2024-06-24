const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 2;

function changeSlide(){
    for (let index = 0; index < imgs.length; index++) {
        imgs[index].style.display = 'none';

    }
    imgs[n].style.display = 'block'
}
changeSlide();
prev_btn.addEventListner('click', (e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length -1;
    }
    changeSlide();
})

next_btn.addEventListner('click', (e)=>{
    if(n < imgs.length-1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

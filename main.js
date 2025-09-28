let slideIndex = 1;
let remainingTima = 70000 ;

function setTime(){
    if(remainingTima == 0)return
    let h = Math.floor(remainingTima/3600);
    let m = Math.floor((remainingTima%3600)/60);
    let s = (remainingTima%3600)%60;
    document.querySelector('#hours').innerHTML =h
    document.querySelector('#minutes').innerHTML =m
    document.querySelector('#seconds').innerHTML =s
}

setInterval(()=>{
    remainingTima -= 1 ;
    setTime()
},1000)

function setSlide(input , index) {
   slideIndex = index;
   let item = document.querySelector(`#${input}`)
   let slides = [...document.querySelector('.slides').children]
   slides.forEach(element => {
        element.classList.remove('active');
   })
   item.classList.add('active');
}

setInterval(()=>{
slideIndex++;
if(slideIndex > 3){
    slideIndex = 1;
}
setSlide(`slide${slideIndex}`,slideIndex)
},4000);

function navigateTo(page) {
    window.location.href = page + '.html';
}
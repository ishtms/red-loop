let imgHeight = document.getElementById('main-img').clientHeight;
let secondDiv = document.getElementById('second');

secondDiv.style.marginTop = imgHeight+"px";

window.addEventListener('scroll', function(){
    if(window.scrollY >= 624){
        document.getElementById('navigation').classList.add('red-bg');
        document.getElementById('navigation').classList.remove('transparent-bg')
        document.getElementById('nav-logo').style.height = '46px'
    }else{
        document.getElementById('navigation').classList.remove('red-bg');
        document.getElementById('navigation').classList.add('transparent-bg')
        document.getElementById('nav-logo').style.height = '60px'
    }
})

console.log(document.getElementById('navigation').classList)
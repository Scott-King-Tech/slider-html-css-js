let nextbtn = document.querySelector('.next')
let prevbtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderlist = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.thumbnail')
let thumbnailitems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailitems[0])

// fuction for next button
nextbtn.onclick = function(){
    moveslider('next')
}


// fuction for prev button
prevbtn.onclick = function(){
    moveslider('prev')
}


function moveslider(direction){
    let slideritems = sliderlist.querySelectorAll('.item')
    let thumbnailitems = document.querySelectorAll('.thumbnail .item')

    if(direction === 'next'){
        sliderlist.appendChild(slideritems[0])
        thumbnail.appendChild(thumbnailitems[0])
        slider.classList.add('next')

    }else{
        sliderlist.prepend(slideritems[slideritems.length - 1])
        thumbnail.prepend(thumbnailitems[thumbnailitems.length - 1])
        slider.classList.add('prev')
    }
  
    slider.addEventListener('animationend', function(){
        if(direction == 'next'){
            slider.classList.remove('next')
        }else{
            slider.classList.remove('prev')
        }
    }, {once: true})
}
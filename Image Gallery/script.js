var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg"];

var i = 0;

//next btn
next.addEventListener('click', function(){
   i++;
   if(i > arr.length - 1){
        i = 0;
   }
   document.getElementById('image').src = arr[i];
})

//prev btn
prev.addEventListener('click', function(){
    i--;
    if(i < 0){
        i = arr.length - 1;
    }
    document.getElementById('image').src = arr[i];
})
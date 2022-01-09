// https://github.com/learn-webdevYT/Javascript-Beginner-Tutorials
//Colors array
let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange'];
let size = ['500px', '300px', '750px'];
let border_radius = ['50%', '10%', '25%']


//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container');

    container.style.background = randomColor;

    let randomNumber = Math.floor(Math.random() * size.length)

    container.style.width = size[randomNumber];
    container.style.height = size[randomNumber];
    container.style.borderRadius = border_radius[randomNumber];




})
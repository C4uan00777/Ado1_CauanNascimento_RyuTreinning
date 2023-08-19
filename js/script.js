var golpe = document.getElementById("golpe1")
var golpeDois = document.getElementById("golpe2")
var pose = document.getElementById("poseS")
var ryu = document.getElementsByClassName("ryu")[0]

var stance = function(){
    //Esses estilos são pra ele voltar ao normal
    ryu.src = "./img/ryu2.gif"
    ryu.style.width = "10%";
    ryu.style.left = "45%"
}


golpe.addEventListener("click", () =>{
    ryu.src = "./img/ryuhit.gif";
    // estilos aqui embaixo
    ryu.style.width = "22%"
    ryu.style.left = "41%"
    setTimeout(stance, 4000);
})

golpeDois.addEventListener("click", ()=>{
    ryu.src = "./img/ryuhit2.gif";//  <== Coloca o segundo sprite aqui
    // estilos aqui embaixo
    ryu.style.width = "22%"
    ryu.style.left = "45%"
    setTimeout(stance, 5000);
})
pose.addEventListener("click", ()=>{
    ryu.src = "./img/pose.gif";//  <== Coloca o segundo sprite aqui
    //Põe os estilos aqui embaixo
    ryu.style.width = "17%"
    ryu.style.left = "43%"
    setTimeout(stance, 3000);
})


document.addEventListener('keydown' , function(event){
    if(event.keyCode === 116){
        event.preventDefault()
        restartMusic()
    }
})

function  repeat (){
    var metal = document.getElementsById('metalica')
    metal.currentTime = 0;
    metal.play();
}
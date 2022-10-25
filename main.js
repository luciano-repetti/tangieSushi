const bgSushi = document.getElementById("background-sushi");


function changeBackground(){
    // if(bgSushi.className === "bg1"){
    //     bgSushi.classList.remove("bg1")
    //     bgSushi.classList.add("bg2")
    // }else{
    //     bgSushi.classList.remove("bg2")
    //     bgSushi.classList.add("bg1")
    // }

    if(bgSushi.className === "bg1"){
        bgSushi.classList.remove("bg1")
        bgSushi.classList.add("bg2")
    }else if(bgSushi.className === "bg2"){
        bgSushi.classList.remove("bg2")
        bgSushi.classList.add("bg3")
    }else if(bgSushi.className === "bg3"){
        bgSushi.classList.remove("bg3")
        bgSushi.classList.add("bg4")
    }else if(bgSushi.className === "bg4"){
        bgSushi.classList.remove("bg4")
        bgSushi.classList.add("bg1")
    }

    setTimeout(() => {
        changeBackground()
    }, 6000);
}

function changeBG(){
    setInterval(() => {
        
    }, 
    );
}

changeBackground()

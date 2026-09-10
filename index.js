
let images = [
    {
        name: "blankCoffee",
        mainUrl: "/cafe.png",
        secondaryUrls: [],
    },
    {
        name: "dashlyt",
        mainUrl: "/dashlyt_1.png",
        secondaryUrls: ["/dashlyt_2.png"],
    },
    {
        name: "noteboard",
        mainUrl: "/noteboard.png",
        secondaryUrls: [],
    },
    {
        name: "solv",
        mainUrl: "/solv_1.png",
        secondaryUrls: ["/solv_2.png", "/solv_3.png"],
    }
];
let sliderLeft = document.querySelector(".slider-left");
let sliderRight = document.querySelector(".slider-right");
let imgLeft, imgRight;
imgLeft = document.createElement("img");
imgLeft.classList.add("slider-img");
imgLeft.src = `./assets/images${images[0].mainUrl}`;
imgLeft.alt = images[0].name;
sliderLeft.appendChild(imgLeft);

for(let i = 0; i < images.length; i++){
    imgRight = document.createElement("img");
    
    imgRight.src = `./assets/images${images[i].mainUrl}`;
    imgRight.alt = images[i].name;
    if(i == 0){
    imgRight.classList.add("slider-img-current");

    }
    imgRight.classList.add("slider-img");
    


    sliderRight.appendChild(imgRight);

    imgRight.addEventListener("click",(e)=>{
        imgLeft.src = e.target.src;
        imgLeft.alt = e.target.alt;
        sliderRight.querySelectorAll(".slider-img").forEach((img)=>{
            img.classList.remove("slider-img-current");
        })
        e.target.classList.add("slider-img-current");

    })
}



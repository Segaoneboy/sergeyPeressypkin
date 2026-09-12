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
let sliderRight = document.querySelector(".slider-right-imgs");
let imgLeft, imgRight;
imgLeft = document.createElement("img");
imgLeft.classList.add("slider-img");
imgLeft.src = `./assets/images${images[0].mainUrl}`;
imgLeft.alt = images[0].name;
sliderLeft.appendChild(imgLeft);
let rightArray = [];
let curSwipeIdx = 0;
let arrowUp = document.querySelector(".slider-right-arrow-up");
let arrowDown = document.querySelector(".slider-right-arrow-down");




function setSliderSwipe(idx){
    if(idx > images.length-1){
        curSwipeIdx = 0;
    } else if(idx < 0){
        curSwipeIdx = images.length-1;
    } else {
        curSwipeIdx = idx;
    }
    imgLeft.src = `./assets/images${images[curSwipeIdx].mainUrl}`;
    imgLeft.alt = images[curSwipeIdx].name;
    sliderRight.querySelectorAll(".slider-img").forEach((img)=>{
        img.classList.remove("slider-img-current");
        img.classList.add("slider-img-no-current");
    })
    rightArray[curSwipeIdx].classList.add("slider-img-current");
    rightArray[curSwipeIdx].classList.remove("slider-img-no-current");

}

for(let i = 0; i < images.length; i++){
    imgRight = document.createElement("img");
    
    imgRight.src = `./assets/images${images[i].mainUrl}`;
    imgRight.alt = images[i].name;
    if(i == 0){
        imgRight.classList.add("slider-img-current");

    } else {
        imgRight.classList.add("slider-img-no-current");
    }
    imgRight.classList.add("slider-img");

    sliderRight.appendChild(imgRight);
    rightArray.push(imgRight);

    imgRight.addEventListener("click",(e)=>{
        setSliderSwipe(i);
    })
}

arrowUp.addEventListener("click",(e)=>{
    setSliderSwipe(curSwipeIdx - 1);
})

arrowDown.addEventListener("click",(e)=>{
    setSliderSwipe(curSwipeIdx + 1);
})

let isScrolling = false;
 sliderRight.addEventListener("wheel",(e)=>{
    e.preventDefault();
    if(isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0){
        setSliderSwipe(curSwipeIdx + 1);
    } else if (e.deltaY < 0){
        setSliderSwipe(curSwipeIdx - 1);
    }

    setTimeout(()=>{
        isScrolling = false;
    }, 300)
})




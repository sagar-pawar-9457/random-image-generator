const imgContainer = document.querySelector(".img-container");
const btnE1 = document.querySelector(".btn");
btnE1.addEventListener("click",()=>{
    imgNum = 6
    updateImg()
})

function updateImg(){
    for(let i =0; i < imgNum; i++){
        const newImg = document.createElement("img")
    imgContainer.appendChild(newImg)
    newImg.src = `https://picsum.photos/300?random=${Math.random()*1000}`
    }
}
    
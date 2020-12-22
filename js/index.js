
//add class active to Sections

function typeActive(){
    document.querySelectorAll(".type ul li .over").forEach(el => {
        el.addEventListener("click",function(e){
            document.querySelectorAll(".food-type").forEach(type => {
                console.log(e)
                el.parentElement.parentElement.querySelectorAll(".active").forEach(actClass=>{
                    actClass.classList.remove("active")
                })
                el.parentElement.classList.add("active");
                type.style.display = "none";
                console.log(e.target.getAttribute("data-class"))
                type.parentElement.querySelector(`.${e.target.getAttribute("data-class")}`).style.display = "block"
            })
        })
    })
}
typeActive()
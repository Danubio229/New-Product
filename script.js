let list = document.querySelectorAll(".item")
let back = document.getElementById("back")
let next = document.getElementById("next")

let count = list.length
let active = 0

next.onclick = () => {

    let activeOld = document.querySelector(".item.active");

    activeOld.classList.remove("active");

    active = active >= count - 1 ? 0 : active + 1;

    list[active].classList.add("active");
}
back.onclick = () => {
 let activeOld = document.querySelector(".item.active");

    activeOld.classList.remove("active");

    active = active <= 0 ? count -1 : active -1;
    list[active].classList.add("active");
}
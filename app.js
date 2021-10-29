let addItem = document.querySelector("#additem")
let addButton = document.querySelector("#addbutton")
let checkList = document.querySelector(".check-list")
let counted = document.querySelector("#counter")
let count = 0;
counted.value = 0;

addButton.addEventListener("click", (e) => {
    let listItem = document.createElement("LI")
    let delButton = document.createElement("BUTTON")
    let markDone = document.createElement("INPUT")
    markDone.setAttribute("type", "checkbox")

    if (addItem.value !== "") {
        listItem.innerText = addItem.value
        listItem.className = `list-items`
        delButton.innerText = "X";
        listItem.appendChild(delButton);
        listItem.appendChild(markDone);
        checkList.appendChild(listItem);
        count += 1;
        counted.innerText= `${counted.value} of ${count} completed.`
    }
    addItem.value = ""
    delButton.style.float = "right"
    markDone.style.float = "left"
    delButton.style.border = "none"
    delButton.style.backgroundColor = "white"
    delButton.style.fontSize = "0.7rem"
    delButton.style.paddingTop = "3px"

    markDone.addEventListener("click", (e) => {
        listItem.style.textDecoration = "line-through"
        if (markDone.checked) {
            counted.value += 1;
            counted.innerText= `${counted.value} of ${count} completed.`
        } else if (!markDone.checked) {
            counted.value -= 1;
            counted.innerText= `${counted.value} of ${count} completed.`
        }
    })

    delButton.addEventListener("click", (e) => {
        listItem.remove()
        if (count > counted.value && !markDone.checked) {
            count -= 1;
            counted.innerText= `${counted.value} of ${count} completed.`
        } else if (count > counted.value && markDone.checked) {
            count -= 1;
            counted.value -= 1;
            counted.innerText= `${counted.value} of ${count} completed.`
        } else if (count == counted.value) {
            count -= 1;
            counted.value -= 1;
            counted.innerText= `${counted.value} of ${count} completed.`
        }
    })

})





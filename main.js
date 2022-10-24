let containerEl = document.getElementById("container");

let myData = [];
for (let n = 1; n <= 30; n++) {
    myData.push(Math.random() * 600);
}
drawArray();

function drawArray() {
    let outputStr = "";
    for (let i = 0; i < myData.length; i++) {
        outputStr += `<div style = "height:${myData[i]}px"></div>`
    }
    containerEl.innerHTML = outputStr;
}


document.addEventListener("keydown", keyDownHandler);



function keyDownHandler(event) {
    if (event.keyCode === 38) {
        let middleIndex = Math.floor(myData.length / 2);
        myData.splice(middleIndex, 0, Math.random() * 600)
    } else if (event.keyCode === 40) {
        let middleIndex = Math.floor(myData.length / 2);
        myData.splice(middleIndex, 1);
    }


    drawArray();
}

// if (event.keyCode === 38) {
//     myData.push(Math.random() * 600)
// } else if (event.keyCode === 40) {
//     myData.pop();
// }

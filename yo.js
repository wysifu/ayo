let redCount = document.getElementById("rmc")
let blueCount = document.getElementById("bmc")
let greenCount = document.getElementById("gmc")

addOneR = () => {
    redCount++
    rmc.innerText = redCount
};

minusOneR = () => {
    redCount--
    rmc.innerText = redCount
};

addOneB = () => {
    blueCount++
    bmc.innerText = blueCount
};

minusOneB = () => {
    blueCount--
    bmc.innerText = blueCount
};

addOneG = () => {
    greenCount++
    gmc.innerText = greenCount
};

minusOneG = () => {
    greenCount--
    gmc.innerText = greenCount
};


let count = 0

let countDisplay = document.getElementById('count')


function decreaseCount(){
    count --
    countDisplay.textContent = count
}

function increaseCount(){
    count ++
    countDisplay.textContent = count
}

function resetCount(){
    count = 0
    countDisplay.textContent = count
}
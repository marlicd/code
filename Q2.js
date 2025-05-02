let speed = prompt("Enter the vehicle speed")
if (speed <= 70){
    console.log("Ok.")
} else if (speed >70){
    let above = (speed-70)/5
    console.log(above)
}
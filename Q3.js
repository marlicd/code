let bs = prompt("Enter your Basic Salary")
let additions = prompt("Enter any benefits/additions if any")
let gross = bs + additions
if (gross <= 24000){
    gross*0.9
    console.log(gross)
} else if (gross >24000 && gross <= 32333){
    gross*0.75
    console.log(gross)
} else if (gross >32333 && gross <= 500000){
    gross*0.7
    console.log(gross)
} else if (gross >500000 && gross <=800000){
    gross*0.675
    console.log(gross)
}
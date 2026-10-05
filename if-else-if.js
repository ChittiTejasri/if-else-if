                         // if-else-if statement
// 1.Display the day based on day number.
let day = 3;
if(day === 1) {
    console.log("Monday");
} else if(day === 2){
    console.log("Tuesday")
} else if(day === 3){
    console.log("Wednesday");
} else if(day === 4){
    console.log("Thursday");
} else if(day === 5){
    console.log("Friday");
} else if(day === 6){
    console.log("saturday");
} else if(day === 7){
    console.log("Sunday")
} else {
    console.log("Invalid day")
}

// --------------------------------------------------
// 2.display age category.
let age = 16;
if (age < 13) {
    console.log("Child");
} else if (age <= 19){
    console.log("Teenager");
} else if(age <= 59){
    console.log("Adult");
} else{
    console.log("Senior citizen");
}

// -----------------------------------------
// 3.Display mobile battery status.
let battery = 35;

if (battery >= 80) {
    console.log("Excellent Battery");
} else if (battery >= 50) {
    console.log("Good Battery");
} else if (battery >= 20) {
    console.log("Low Battery");
} else {
    console.log("Critical Battery");
}

// ---------------------------------------------------
// 4.calculate shipping charges based on weight.
let weight = 7;

if (weight <= 2) {
    console.log("Shipping Charge: ₹50");
} else if (weight <= 5) {
    console.log("Shipping Charge: ₹100");
} else if (weight <= 10) {
    console.log("Shipping Charge: ₹200");
} else {
    console.log("Shipping Charge: ₹300");
}

// ---------------------------------------------------
// 5.display loan eligibility category based on salary.
let salary = 55000;

if (salary < 20000) {
    console.log("Not Eligible");
} else if (salary < 40000) {
    console.log("Basic Eligibility");
} else if (salary < 70000) {
    console.log("Standard Eligibility");
} else {
    console.log("Premium Eligibility");
}

// ----------------------------------------------------------
// 6.display performance level in examination percentage.
let percentage = 78;

if (percentage >= 90) {
    console.log("Excellent");
} else if (percentage >= 75) {
    console.log("Very Good");
} else if (percentage >= 50) {
    console.log("Good");
} else {
    console.log("Needs Improvement");
}
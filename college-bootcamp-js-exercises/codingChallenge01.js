let marksWeightInKg = 95;
let marksMass = marksWeightInKg;
let johnsWeightInKg = 85;
let johnsMass = johnsWeightInKg;

let marksHeightInMeter = 1.88;
let marksHeight = marksHeightInMeter;
let johnsHeightInMeter = 1.76;
let johnsHeight = johnsHeightInMeter;

let markHigherBMI = undefined;

function myBMI(mass,height){
    let forBMI = mass/height**2;
    return forBMI;
}

let markBMI = myBMI(marksMass,marksHeight);
let johnBMI = myBMI(johnsMass,johnsHeight);

if(markBMI >johnBMI){
    markHigherBMI = true;
}else{
    markHigherBMI = false;
}

console.log(markHigherBMI);
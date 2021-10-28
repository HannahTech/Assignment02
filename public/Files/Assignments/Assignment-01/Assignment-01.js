
function weightConverter(source,valNum) {

    valNum = parseFloat(valNum);

    var inputPounds = document.getElementById("inputPounds");
    var inputKilograms = document.getElementById("inputKilograms");

    if (source == "inputPounds") {
      inputKilograms.value=(valNum/2.2046).toFixed(2);
    }
    else {
      inputPounds.value=(valNum*2.2046).toFixed(2);
    }

    return inputKilograms;
}



function lengthConverter(source,valNum) {

    valNum = parseFloat(valNum);

    var inputInches = document.getElementById("inputInches");
    var inputcm = document.getElementById("inputcm");

    if (source == "inputInches") {
        inputcm.value=(valNum / 0.39370).toFixed(2);
    }
    else {
        inputInches.value=(valNum * 0.39370).toFixed(2);
    }

    return inputcm;
}


function Gender(source){

    var rate ;

    if (source == "male") {

            rate = 5 ;
        }
        else {
            rate = -161 ;
        }

    return rate;
}



function activity(){

    var activityLevel ;
    var source = document.getElementById("activ");

    if ( source = "Nactivity" ){
            activityLevel = 1.2; }
        else if ( source = "Lactivity" ){
            activityLevel = 1.375; }
        else if ( source = "Mactivity" ){
            activityLevel = 1.55; }
        else if ( source = "Hactivity" ){
            activityLevel = 1.725; }
        else{
            activityLevel = 1.9; }

            return activityLevel;
}


function calculateBMR(){

    var age = document.getElementById("inputAge").value;
    var lenght = inputcm.value;
    var weight = inputKilograms.value ;
    var rates = Gender();
    var act = activity();
    var BMR = ((10 * weight) + (6.25 * lenght) - (5 * age) + rates) * act;

    document.getElementById("display_BMR").innerHTML = (" >> Your basal metabolic rate is " + BMR + " kCal per day. <<");
}


function formul(){

    document.getElementById("display_formula").innerHTML = 
            ("BMR = (10 × weight.kg) + (6.25 × height.cm) - (5 × age) + 5 (Male) , -161 (Female)");
}
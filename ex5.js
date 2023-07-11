function leapYear(Y) {

    if (Y%4==0){
        return true;
    }
    else if (Y%4>=1) {
        return false;
        
    }
}

console.log(leapYear(1990));
console.log(leapYear(1924));
console.log(leapYear(2021));
console.log(leapYear(2023));
console.log(leapYear(1992));

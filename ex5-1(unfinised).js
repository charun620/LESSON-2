function leapYear(Y) {
const y = new Date(Y); 
    if (y.getday==366){
        return true;
    }
    else if (y.getday==365) {
        return false;
        
    }
    else if (y.getday==400) {
        return true;
        
    }
}

console.log(leapYear(1990));
console.log(leapYear(1924));
 
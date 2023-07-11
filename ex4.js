function divEvenly(a,b) {
    if (a%b==0) {
        
        return true;
    } else  if (a%b==1) {
        return false;
    }
    
}
console.log(divEvenly(98,7));
console.log(divEvenly(85,4));
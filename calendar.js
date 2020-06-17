// find the 256th day of any given year from 1700 - 2700
// day of the programmer!

function dayOfProgrammer(year) {

    // Julian Calandar
    if (year <= 1917){
        if(year % 4 == 0){
            return `12.09.${year}`
        }
        else{
            return `13.09.${year}`
        }
    }

    // gregorian calandar
    else if (year >= 1919){
        // leap year
        if(year % 4 == 0 && year % 100 !=0){
            return `12.09.${year}`;
        } 
        // leap year
        else if( year % 400 == 0){
            return `12.09.${year}`;
        }
        // non leap year
        else {
            return `13.09.${year}`;
        }
    }
    // 1918 outlier
    else {
        return `26.09.${year}`
    }
}
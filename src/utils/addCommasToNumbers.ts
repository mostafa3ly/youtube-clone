/* 
Forked from the solution for stackoverflow thread
https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript 
*/
export const addCommasToNumbers = (number: number): string =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

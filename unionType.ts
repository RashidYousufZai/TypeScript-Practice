function printStatusCodeees(code: string | number) {
    console.log(`My status code is ${code}.`)
}
  
printStatusCode(404);
printStatusCode("Rashid");

        // Error

function printStatusCodes(code: string | number) {
    console.log(`My status code is ${code.toUpperCase()}.`)  //error: Property 'toUpperCase' does not exist ontype 'string | number'.
    // Property 'toUpperCase' does not exist on type 'number'
  }
        //  Solution
function printStatusCode(code: any) {
    console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
//     Property 'toUpperCase' does not exist on type 'number'
}
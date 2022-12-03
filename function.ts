            // Function return type
// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
}

// the `: void` here specifies that this function returns a number
function printHello(): void {
    console.log('Hello!');
}
                // Parameter argumet type
// Function parameters are typed with a similar syntax as variable declarations.
function multiply(a: number, b: number) : number {
    return a * b;
  }

                // Optional Parameters

// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) : number {
    return a + b + (c || 0);
  }


                // Default Parameters

function pow(x: number, y: number = 10) {
    return x ** y;
  }



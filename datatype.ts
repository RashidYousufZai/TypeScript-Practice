                         // Variables

// number 5 ,5.5 , -7
// String "apple"
// boolean true , fasle


                        // Varible Types
let person: string = "ishaq";
person = true;        //Type 'boolean' is not assignable to type 'string'.
person = 1;           //Type 'number' is not assignable to type 'string'

let age: number = 27;
age = "Sixteen"       //Type 'string' is not assignable to type 'number
age = true;           //Type 'boolean' is not assignable to type 'number'

let condition: boolean = true;
condition = "Sixteen" //Type 'string' is not assignable to type 'boolean'
condition = 27;       //Type 'number' is not assignable to type 'boolean'.

                                // Array
const data : any[] = ["rashid", 1, true];
const names : String[] = ["rashid", "Majid"];

let names: String[] = [];
names.push("Rashid");
names.push(1);        //Argument of type 'number' is not assignable to parameter of type 'String'.
names.push(true);     //Argument of type 'boolean' is not assignable to parameter of type 'String'.



                                // Fixed langth Array
let roles : [string , number] = ["Rashid" , 1];
roles = [1 , "Rashid"];  //Type 'number' is not assignable to type 'string' and Type 'string' is not assignable to type 'number'
roles = ["majid" , 2];

                                // Object
const persons: {
  names: string;
  age: number;
  hobbies: String[];
  email: String;
} = {
  names: "Rashid",
  age: 20,
  hobbies: ["Sports", "Programming"],
  email: "",
};
persons.email = "rishi2323@gmail.com";

                        // Custon type define of datatype
type Customer =  {
    names: string;
    age: number;
    hobbies: String[];
    email: String;
} 
const persons : Customer = {
  names: "Rashid",
  age: 20,
  hobbies: ["Sports", "Programming"],
  email: "",
};
persons.email = "rishi2323@gmail.com";


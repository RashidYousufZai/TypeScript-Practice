                        // Classes

// class Student{
//     name : string;
//     rollNo : number;
//     skills : string[] = [];

//     constructor( n :string , r : number ){
//         this.name = n;
//         this.rollNo = r;
//     }

//     addSkills(skills : string){
//         this.skills.push(skills);
//     }

//     getSkills(){
//         return this.skills;
//     }
// }
                       // Also can be written as
                    //    or Short hand innitilization

// class Student{
//     skills : string[] = [];

//     constructor( public name :string , public rollNo : number ){
//     }

//     addSkills(skills : string){
//         this.skills.push(skills);
//     }

//     getSkills() : string[]{
//         return this.skills;
//     }
// }



// const Std1 = new Student("Rashid" , 1208);
// Std1.addSkills("javaScript");
// console.log(Std1.getSkills());
// console.log(Std1.skills);
// console.log("Std1");

                        //Inheretence
                        // Classes can extend each other through the extends keyword. A class can only extends one other clas

class Student{
    skills : string[] = [];

    constructor( public name :string , public rollNo : number ){
    }

    addSkills(skills : string){
        this.skills.push(skills);
    }

    getSkills() : string[]{
        return this.skills;
    }
}

class vStudents extends Student{
    constructor(name :string ,rollNo : number ){
        super(name , rollNo);   
    }
}



const Std1 = new Student("Rashid" , 1208);
Std1.addSkills("javaScript");
console.log(Std1.getSkills());
console.log(Std1.skills);
console.log("Std1");

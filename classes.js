var Student = /** @class */ (function () {
    function Student(n, r) {
        this.skills = [];
        this.name = n;
        this.rollNo = r;
    }
    Student.prototype.addSkills = function (skills) {
        this.skills.push(skills);
    };
    Student.prototype.getSkills = function () {
        return this.skills;
    };
    return Student;
}());
var Std1 = new Student("Rashid", 1208);
Std1.addSkills("javaScript");
console.log(Std1.getSkills());
console.log(Std1.skills);
console.log("Std1");

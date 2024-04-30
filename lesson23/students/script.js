class Student {

    student;

    getFullName() {
        return `${this.student.firstName} ${this.student.lastName}`;
    }

    // גיל של הסטודנט (לא  מדויק)
    getAge() {
        //השנה הנוכחית
        const currentYear = new Date().getFullYear();
        // שנת הלידה של הסטודנט
        const studentYear = new Date(this.student.birthday).getFullYear();

        // גיל הסטודנט
        return currentYear - studentYear;
    }

    getAverageTest() {
        const sum = this.student.grade.reduce((res, num) => res += num, 0);

        return sum / this.student.grade.length;
    }

    getTestAmount() {
        return this.student.grade.length;
    }

    constructor(student) {

        this.student = student;

    }
}

(async function () {
    const res = await fetch("../students.json");
    const data = await res.json();

    console.log(data.map(s => new Student(s)))
})()

const student1 = new Student(
    {
        id: 9202,
        firstName: "יפה",
        lastName: "בהרב",
        phone: "051-5892982",
        email: "abc362@gmail.com",
        birthday: "2003-06-08",
        city: "ירוחם",
        grades: [85, 93, 41, 74, 86, 61, 85]
    }
)


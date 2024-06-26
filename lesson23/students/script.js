class Student {

    student={
        id: 0,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        birthday: "",
        city: "",
        grades: []
    };

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

        if (!student) {
            throw new Error("Student not found")
        }

        for (const key in student) {
            this.student[key] = student[key];
        }

    }
}

async function getStudent(){

    const res=await fetch("../students.json");
    const data=await res.json();

    const ul =document.createElement("ul");
   

    data.forEach(s => {
        const student = new Student(s);
        const li = document.createElement("li");
        li.innerText=student.getFullName();
        ul.appendChild(li);
    });

    document.querySelector(".frame").appendChild(ul);

}

getStudent();



// לדוגמא
// const student1 = new Student({
//     id: 9128,
//     firstName: "טליה",
//     lastName: "אנקרי",
//     phone: "059-7101369",
//     // email: "abc487@gmail.com",
//     birthday: "2005-11-19",
//     city: "חיפה",
//     grades: [81, 87, 60]
// });

// // יצירת ציונים פיקטיביים לכל סטודנט
// students.forEach(s => {
//     s.grades = [];

//     // טווח של 3 עד 8
//     const max = Math.floor(Math.random() * 6) + 3;
    
//     for (let i = 0; i < max; i++) {
//         // טווח של 40 עד 100
//         const g = Math.floor(Math.random() * 61) + 40;
//         s.grades.push(g);
//     }
// });

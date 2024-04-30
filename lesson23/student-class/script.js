class Student {

    firstName = '';
    lastName = '';
    phone = '';
    birthday = '';
    city = '';
    grade = [];

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // גיל של הסטודנט (לא  מדויק)
    getAge() {
        //השנה הנוכחית
        const currentYear = new Date().getFullYear();
        // שנת הלידה של הסטודנט
        const studentYear = new Date(this.birthday).getFullYear();

        // גיל הסטודנט
        return currentYear - studentYear;
    }

    getAverageTest() {
        const sum = this.grade.reduce((res, num) => res += num, 0);

        return sum / this.grade.length;
    }

    getTestAmount() {
        return this.grade.length;
    }

    constructor(firstName, lastName, phone, birthday, city, grade) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.birthday = birthday;
        this.city = city;
        this.grade = grade;

    }
}

const student1 = new Student('moriya', 'arami', '055-686-6638', '29-04-2004', 'modiin', [100, 90, 95])


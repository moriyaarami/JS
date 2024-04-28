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
}


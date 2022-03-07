interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Tommy',
    lastName: 'Kim',
    age: 25,
    location: 'Tulsa'
}

const student2: Student = {
    firstName: 'Sehee',
    lastName: 'Kim',
    age: 23,
    location: 'Mississippi'
}

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
studentsList.forEach(function(student) {
  const row = table.insertRow();
  const firstname = row.insertCell();
  const location = row.insertCell();
  firstname.innerHTML = student.firstName;
  location.innerHTML = student.location;
  });
document.body.appendChild(table);

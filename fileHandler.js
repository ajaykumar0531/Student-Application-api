import fs from 'fs';

const filePath = './data/students.json';

// Read students
export const readStudents = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

// Write students              JSON.STRINGFY(VALUE,REPLACER,SPACE)
export const writeStudents = (students) => {
    fs.writeFileSync(filePath, JSON.stringify(students, null, 2));
};

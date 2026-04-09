import { readStudents, writeStudents } from '../utils/fileHandler.js';

// Get all students
export const getStudents = (req, res) => {
    const students = readStudents();
    res.json(students);
};

// Add student
export const addStudent = (req, res) => {
    const { name, age, course } = req.body;

    if (!name || !age || !course) {
        return res.status(400).json({ message: "All fields required" });
    }

    const students = readStudents();

    const newStudent = {
        id: Date.now(),
        name,
        age,
        course
    };

    students.push(newStudent);
    writeStudents(students);

    res.status(201).json(newStudent);
};

// Get student by ID
export const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    const students = readStudents();

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
};

// Update student
export const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age, course } = req.body;

    let students = readStudents();

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students[index] = {
        ...students[index],
        name,
        age,
        course
    };

    writeStudents(students);

    res.json(students[index]);
};

// Delete student
export const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);

    let students = readStudents();

    students = students.filter(s => s.id !== id);

    writeStudents(students);

    res.json({ message: "Student deleted" });
};
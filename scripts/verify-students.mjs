import { students } from '../lib/students.js';

const expectedCount = 6;
const slugSet = new Set(students.map((student) => student.slug));

if (students.length !== expectedCount) {
  throw new Error(`Se esperaban ${expectedCount} alumnos, pero hay ${students.length}.`);
}

if (slugSet.size !== students.length) {
  throw new Error('Existen slugs duplicados en el catálogo de alumnos.');
}

for (const student of students) {
  if (!student.displayName || !student.slug || !student.contentHtml) {
    throw new Error(`Alumno con datos incompletos: ${JSON.stringify(student)}`);
  }
}

console.log('✅ Catálogo de alumnos validado correctamente.');
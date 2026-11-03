export const students = [
  {
    displayName: 'Carlos Hector Leal Delgado',
    slug: 'carlos-hector-leal-delgado',
    sourceFile: 'Holamundo-CarlosLeal.html',
    contentHtml: 'Hola Mundo<br />Carlos Leal'
  },
  {
    displayName: 'Eder Abraham Sampayo Gonzalez',
    slug: 'eder-abraham-sampayo-gonzalez',
    sourceFile: 'EderSampayo.html',
    contentHtml: '<h1>Hola mundo</h1>'
  },
  {
    displayName: 'Emiliano Chacon Alvarez',
    slug: 'emiliano-chacon-alvarez',
    sourceFile: 'holamundo.html',
    contentHtml: '<h1>Holamundo(print);</h1><div><p>Emiliano Chacon Alvarez 2052404</p></div>'
  },
  {
    displayName: 'Luz De Leon',
    slug: 'luz-de-leon',
    sourceFile: 'luz-de-leon.html',
    contentHtml: '<h1>Hola, soy Luz De Leon</h1>'
  },
  {
    displayName: 'Rodrigo Lopez Escobedo',
    slug: 'rodrigo-lopez-escobedo',
    sourceFile: 'rodrigo-lopez-escobedo.html',
    contentHtml: '<h1>Hola, soy Rodrigo Lopez Escobedo</h1>'
  },
  {
    displayName: 'Axel Gabriel Gutierrez Ruano',
    slug: 'axel-gabriel-gutierrez-ruano',
    sourceFile: 'axel.html',
    contentHtml: '<h1>Hola, soy Axel Gutierrez</h1>'
  }
];

export function getStudentBySlug(slug) {
  return students.find((student) => student.slug === slug);
}
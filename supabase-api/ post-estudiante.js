const url =
  "https://TU-PROYECTO.supabase.co/rest/v1/estudiantes";

const headers = {
  apikey: "TU_ANON_KEY",
  Authorization: "Bearer TU_ANON_KEY",
  "Content-Type": "application/json",
};

const estudiantes = [
  {
    nombre: "Daniel",
    edad: 21,
    email: "daniel@email.com",
    curso_id: 1,
  },
  {
    nombre: "Paula",
    edad: 24,
    email: "paula@email.com",
    curso_id: 2,
  },
  {
    nombre: "Mateo",
    edad: 19,
    email: "mateo@email.com",
    curso_id: 3,
  },
];

async function crearEstudiantes() {

  try {

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(estudiantes),
    });

    const data = await response.json();

    console.log("Estudiantes creados:");
    console.table(data);

  } catch (error) {

    console.log(error);

  }
}

crearEstudiantes();
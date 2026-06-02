const url =
  "https://TU-PROYECTO.supabase.co/rest/v1/estudiantes?id=eq.1";

const headers = {
  apikey: "TU_ANON_KEY",
  Authorization: "Bearer TU_ANON_KEY",
  "Content-Type": "application/json",
};

const estudianteActualizado = {
  nombre: "Ana Actualizada",
};

async function actualizarEstudiante() {

  try {

    const response = await fetch(url, {
      method: "PATCH",
      headers,
      body: JSON.stringify(estudianteActualizado),
    });

    const data = await response.json();

    console.log("Estudiante actualizado:");
    console.table(data);

  } catch (error) {

    console.log(error);

  }
}

actualizarEstudiante();
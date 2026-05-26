const url =
  "https://TU-PROYECTO.supabase.co/rest/v1/estudiantes?id=eq.1";

const headers = {
  apikey: "TU_ANON_KEY",
  Authorization: "Bearer TU_ANON_KEY",
  "Content-Type": "application/json",
};

async function eliminarEstudiante() {

  try {

    const response = await fetch(url, {
      method: "DELETE",
      headers,
    });

    console.log("Estudiante eliminado");

  } catch (error) {

    console.log(error);

  }
}

eliminarEstudiante();
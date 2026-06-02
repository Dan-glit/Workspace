const url =
  "https://yvpuwulnhrxcvuxhoyug.supabase.co/rest/v1/estudiantes";

const headers = {
  apikey: process.env.SUPABASE_KEY || "YOUR_SUPABASE_KEY_HERE",
  "Content-Type": "application/json",
};

async function obtenerEstudiantes() {
  try {

    console.log("Consultando API...");

    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    console.log("Respuesta:");
    console.table(data);

  } catch (error) {

    console.log("Error:");
    console.log(error);

  }
}

obtenerEstudiantes();
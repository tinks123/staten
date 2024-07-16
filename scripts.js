// Ejemplo de carga de datos desde un archivo CSV
async function fetchData() {
    const response = await fetch('data.csv');
    const data = await response.text();
    // Procesar datos CSV
    console.log(data);
}

// Llama a la función para cargar datos cuando la página se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    fetchData();
});

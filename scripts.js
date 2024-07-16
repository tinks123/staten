// Función para leer y mostrar contenido de archivos CSV
function mostrarContenidoCSV(archivo, contenedorId) {
    // Ruta del archivo CSV
    const rutaArchivo = `${archivo}.csv`; // Aquí asumimos que el archivo está en el mismo directorio que index.html

    // Fetch para obtener el contenido del archivo CSV
    fetch(rutaArchivo)
        .then(response => response.text())
        .then(data => {
            // Convertir CSV a formato HTML
            const rows = data.split('\n');
            let html = '<table>';

            rows.forEach(row => {
                html += '<tr>';
                const columns = row.split(',');
                columns.forEach(column => {
                    html += `<td>${column}</td>`;
                });
                html += '</tr>';
            });

            html += '</table>';

            // Mostrar contenido en el contenedor especificado
            const contenedor = document.getElementById(contenedorId);
            contenedor.innerHTML = html;
        })
        .catch(error => console.error('Error al cargar el archivo CSV:', error));
}

// Llamar a la función para cada archivo CSV
mostrarContenidoCSV('WTA', 'csv-container-2006');
mostrarContenidoCSV('2007', 'csv-container-2007');
mostrarContenidoCSV('2008', 'csv-container-2008');
mostrarContenidoCSV('2009', 'csv-container-2009');
mostrarContenidoCSV('2010', 'csv-container-2010');

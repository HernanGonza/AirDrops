fetch('https://api.airdropking.io/airdrops/?amount=6&order=best')
  .then(response => response.json())
  .then(data => {
    const div = document.querySelector('div'); // Obtener el div por su selector
    
    // Aquí puedes agregar el contenido de la API al div
    div.textContent = JSON.stringify(data);
  })
  .catch(error => {
    // Manejar el error en caso de que la solicitud falle
    console.error(error);
  });
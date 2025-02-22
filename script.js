function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const boton = document.getElementById('botonDavidS');
  const div = document.getElementById('divDavidS');
  

  boton.addEventListener('click', () => {
    div.style.backgroundColor = getRandomColor();

    div.style.color = getRandomColor();
  });
  
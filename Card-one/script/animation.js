function Cambiar_IMG(src) {
    let img = document.getElementById('img-principal');
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = src;
        img.style.opacity = 1;
    }, 500);
}


document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.custom-input');
    const incrementBtn = document.querySelector('.increment-btn');
    const decrementBtn = document.querySelector('.decrement-btn');
    
    incrementBtn.addEventListener('click', function() {
      let value = parseInt(input.value, 10);
      let max = parseInt(input.max, 10);
      if (value < max) {
        input.value = value + 1;
      }
    });

    decrementBtn.addEventListener('click', function() {
      let value = parseInt(input.value, 10);
      let min = parseInt(input.min, 10);
      if (value > min) {
        input.value = value - 1;
      }
    });
  });

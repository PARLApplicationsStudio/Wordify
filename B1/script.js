function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 100); // You can adjust the increment value for speed
    
    function updateCounter() {
      if (current < target) {
        current += increment;
        element.innerText = current;
        setTimeout(updateCounter, 20); // Adjust timing for smoother animation
      } else {
        element.innerText = target;
      }
    }
  
    updateCounter();
  }
  
  window.onload = function() {
    const counterElement = document.getElementById("liveCounter");
    const targetNumber = 123456;  // Replace this with your desired target number
  
    animateCounter(counterElement, targetNumber);
  };
  
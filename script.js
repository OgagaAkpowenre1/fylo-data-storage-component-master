const rangeInput = document.getElementById('rangeInput');

rangeInput.addEventListener('input', function() {
  const value = (this.value - this.min) / (this.max - this.min) * 100;
  
  // Update background gradient based on thumb's position
  this.style.background = `linear-gradient(to right, #FF5C7C ${value}%, #202A43 ${value}%)`;
  console.log("working?")
});

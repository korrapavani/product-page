// Function to change the T-shirt image based on the selected color
function changeColor(color) {
    const tshirtImg = document.getElementById('tshirt-img');
    
    // Change the image source based on the selected color
    if (color === 'red') {
      tshirtImg.src = 'tshirt-red.jpg';  // Red color image
    } else if (color === 'green') {
      tshirtImg.src = 'tshirt-green.jpg';  // Green color image
    } else if (color === 'blue') {
      tshirtImg.src = 'tshirt-blue.jpg';  // Blue color image
    }
  }
  
  
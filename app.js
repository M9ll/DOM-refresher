// On first click make event listener red
// const myHeading = document.getElementById('myHeading');
//
// myHeading.addEventListener('click', () => {
//   myHeading.style.color = 'red';
// });



// On click alternate between red and black
const myHeading = document.getElementById('myHeading');

myHeading.addEventListener('click', () => {
  if (myHeading.style.color != 'red') {
      myHeading.style.color = 'red';
  }
  else {
      myHeading.style.color = 'black';
  }
});

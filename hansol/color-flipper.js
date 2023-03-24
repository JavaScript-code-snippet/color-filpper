const hexElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function btnClickHandler() {
  let hexcode = '#';
  for(let i = 1; i <= 6; i++) {
    hexcode += hexElements[Math.floor(Math.random() * hexElements.length)];
  }
  document.querySelector('.content h1 span:first-child').innerText = `Background Color : `;
  document.querySelector('.content h1 span:last-child').innerText = `${hexcode}`;
  document.body.style.backgroundColor = hexcode;
  document.querySelector('.content h1 span:last-child').style.color = hexcode;
}

btnClickHandler();
document.querySelector('.content button').addEventListener('click', btnClickHandler);
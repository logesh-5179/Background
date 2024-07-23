document.addEventListener('DOMContentLoaded', () => {
  const color = [{col:'yellow'},{col:'green'},{col:'violet'},{col:'pink'},{col: 'aqua'},{col: 'orange'},{col: 'brown'}];
  let x=0;
const button = document.getElementById('c-btn');
  const name = document.getElementById('name');
button.addEventListener('click', () => {
    const ex = color[x];
    document.body.style.backgroundColor = ex.col;
    name.textContent=`Bg-Color : ${ex.col}`;
x=(x + 1)% color.length;
  });
});
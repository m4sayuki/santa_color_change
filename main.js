let colors = ['red', 'blue', 'green', 'orange', 'tomato', 'purple', 'black', 'white'];

// Hat
function HatBorderColorChange() {
  const hat = document.querySelector('.hat')
  hat.addEventListener('click', function () {
    this.classList.toggle('border');
    ColorChange();
  });
}

HatBorderColorChange();

function ColorChange() {
  const borders = document.querySelectorAll('.border')
  console.log(borders);

  for (let i = 0; i < 8; i++) {
    document.getElementById(colors[i]).addEventListener('click', function () {
      borders.forEach((border) => {
        if (border.classList.contains('border')) {
          border.style.background = colors[i];
      }
    })
    });
  } 
}

// Body
function BodyBorderColorChange() {
  const body = document.querySelector('.body') 
  body.addEventListener('click', function () {
    this.classList.toggle('border');
    ColorChange();
  });
}

BodyBorderColorChange();

// Belt
function BeltBorderColorChange() {
  const belt = document.querySelector('.belt')
  belt.addEventListener('click', function () {
    this.classList.toggle('border');
    ColorChange();
  });
}

BeltBorderColorChange();

// Shoes
function ShoesBorderColorChange() {
  document.querySelector('.shoes').addEventListener('click', function () {
    this.classList.toggle('border');
    ColorChange()
  });
}

ShoesBorderColorChange();

// Reset
function Reset() {
  document.getElementById('reset').addEventListener('click', function () {
    location.reload();
  });
}

Reset();
let Submit = document.querySelector('.submit');


Submit.addEventListener('click', function() {
    const x = document.querySelector('.X').value;
    const y = document.querySelector('.Y').value;
    const z = +y / +x;
    const r = +z * 100; 
    document.querySelector('.result').innerHTML = r;
  });

function toggleLoginForm(event) {
  event.preventDefault();
  const loginForm = document.getElementById('login-form');
  if (loginForm.style.display === 'block') {
      loginForm.style.display = 'none';
  } else {
      loginForm.style.display = 'block';
  }
}

// Fecha o modal quando clicar fora da área do formulário
window.addEventListener('click', function(event) {
  const modal = document.getElementById('login-form');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
  } else {
      navLinks.classList.add('active');
  }
}


var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

function Login() {
    const senha = document.getElementById('senha_input').value;
    const usuario = document.getElementById('usuario_input').value;

    if (senha == "12345") {
        alert('Acesso liberado')
        welcomeMsn(usuario)
        setTimeout(navigate, 2500)
    } else {
        alert('Senha incorreta')
    }
}

function navigate() {
    location.href = "Home.html"
}

function welcomeMsn(usuario) {
    document.querySelector('#welcomeText').textContent = `Bem vindo(a) "${usuario}"`;
    document.querySelector('.container').classList.add('hidden');
}


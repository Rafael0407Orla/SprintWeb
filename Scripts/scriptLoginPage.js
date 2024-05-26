function Login() {
    const senha = document.getElementById('senha_input').value;
    const usuario = document.getElementById('usuario_input').value;

    if (senha == "12345") {
        welcomeMsn(usuario)
        alert('Acesso liberado')
        setTimeout(navigate, 2500)
    } else {
        alert('Senha incorreta')
    }
}

function navigate() {
    location.href = "Home.html"
}

function welcomeMsn(usuario) {
    document.querySelector('#welcomeText').textContent = `Bem vindo "${usuario}"`;
    document.querySelector('.container').classList.add('hidden');
}


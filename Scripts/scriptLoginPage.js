document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    Login();
});

function Login() {
    const usuario = document.getElementById('usuario_input').value;
    const senha = document.getElementById('senha_input').value;
    const usuarioCadastrado = 'mahindra';
    const senhaCadastrada = '12345';

    if (usuario === usuarioCadastrado && senha === senhaCadastrada) {
        alert('Acesso liberado');
        welcomeMsn(usuario);
        setTimeout(navigate, 2500);
    } else {
        alert('Usuário ou senha inválidos');
        document.getElementById('usuario_input').value = '';
        document.getElementById('senha_input').value = '';
        document.getElementById('usuario_input').focus();
    }
}

function navigate() {
    location.href = "Home.html"
}

function welcomeMsn(usuario) {
    document.querySelector('#welcomeText').textContent = `Bem vindo(a) "${usuario}"`;
    document.querySelector('.container').classList.add('hidden');
}


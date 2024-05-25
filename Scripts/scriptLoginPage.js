

function Login() {
    const senha = parseInt(document.getElementById('senha_input').value);
    const usuario = document.getElementById('usuario_input').value;

    if (senha === 12345) {
        alert('Acesso liberado');
        location.href = "Home.html"
    }
    else {
        alert('Senha incorreta');
    }

}
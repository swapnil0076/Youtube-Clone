
document.querySelector("form").addEventListener("submit", login)

async function login() {
    event.preventDefault();

    let login_data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }

    console.log(login_data);

    const login_url = 'https://masai-api-mocker.herokuapp.com/auth/login';

    let res = await fetch(login_url, {
        method: 'POST',
        body: JSON.stringify(login_data),
        headers: {
            'Content-Type': 'application/json'

        }

    });
    let data = await res.json()
    console.log(data)

    window.location.href="../index.html"

}
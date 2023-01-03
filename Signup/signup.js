document.querySelector("form").addEventListener("submit", Register)


class User {
    constructor() {
        // this.name=n
    }

    #checkUsername(username) {


        let value = username.includes('#') ? false : true

        return value

    }

    #checkpassword(password) {
        let value = password.length > 4 ? true : false
        return value;
    }





    //user wants to do login & sign up  
    async Signup(n, e, u, p, m, d) {
        let isvalidated = this.#checkUsername(u) && this.#checkpassword(p);
        
        // this.checkallfileds()    

        if (isvalidated) {
            this.name = n;
            this.email = e;
            this.username = u;
            this.password = p;
            this.mobile = m;
            this.description = d;

            let actula_data = JSON.stringify(this);

            try {
                let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
                   method:'POST',
                   body: actula_data,
                   headers: {
                    'Content-Type' : 'application/json'
                   } 

                   
                

                });
                 
              let data = await res.json();
                
                console.log(data);
                console.log('User Registered Sucessfully')
            } catch (error) {
             console.log(error);
            }

            // let res = fetch('https://masai-api-mocker.herokuapp.com/auth/register')

        }
    }
}

let U1 = new User()



function Register() {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;
    let mobile = document.getElementById('mobile').value;
    let description = document.getElementById('description').value;

    U1.Signup(name, email, username, password, mobile, description)
    // console.log(name, email, password, username, mobile, description)

}
// console.log(u1)


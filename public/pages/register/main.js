import {
  createAccount,
  createUser,
  createProfile,
  emailVerification,
} from './data.js';

export const register = () => {
  const signUp = document.createElement('div');

  signUp.className = ('signup-wrapper');

  signUp.innerHTML = `
    <figure class='logo'> 
      <img src='./images/wecanlogo.png' alt='logo'>
    </figure>
    <form class='sign-box'> 
      <div>
        <input class='sign-login' type= "text" name= "name" id= "first-name" placeholder= "Nome" required></input>
      </div>
      <div>
        <input class='sign-login' type= "text" name= "surname" id= "last-name" placeholder= "Sobrenome" required></input>
      </div>
      <div>  
        <input class='sign-login' type="text" name="role" id="role" placeholder= "Profissão ou área de interesse" required></input>
      </div>
      <div>  
        <input class='sign-login' type= "email" name= "email" id= "email" placeholder= "Email" required></input>
      </div>
      <div>
        <input class='sign-login' type="password" name="password" id="password" placeholder= "Senha (mínimo 6 caracteres)" required></input>
      </div>
      <div class='message-error' id='message-error'></div>
      <div class='message-email' id='message-email'></div>
      <div> 
        <button class='btn-register' type="button" id="btnRegister">Cadastrar</button>
      </div>  
      <div class='return-login'>
        Já tem uma conta? <a href='/#login'>Faça login</a>
      </div>
    </form>
  `;

  const btnRegister = signUp.querySelector('#btnRegister');

  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const email = signUp.querySelector('#email').value;
    const password = signUp.querySelector('#password').value;
    const role = signUp.querySelector('#role').value;
    const firstName = signUp.querySelector('#first-name').value;
    const lastName = signUp.querySelector('#last-name').value;
    const registerAuth = createAccount.signRegister(email, password);
    registerAuth
      .then(() => {
        createUser.newUser(email, firstName, lastName, role).then(() => {
          createProfile.newProfile(firstName, lastName).then(() => {
            emailVerification.sendEmailVerification();
            const sucessRegister = signUp.querySelector('#message-email');
            sucessRegister.innerHTML = 'Cadastro efetuado com sucesso. Verifique seu email antes de fazer login.';
          });
        });
      })
      .catch((error) => {
        let errorMessage = error.message;
        if (error.code === 'auth/weak-password') {
          errorMessage = 'Senha deve ter no mínimo 6 caracteres';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Formato de e-mail inválido';
        }
        const errorEle = signUp.querySelector('#message-error');
        errorEle.innerHTML = errorMessage;
      });
  });

  return signUp;
};

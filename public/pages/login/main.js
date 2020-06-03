import { /*logIn*/ signIn, /*errors*/ } from './data.js';

export const appStart = () => {
  const menuLogin = document.createElement('div');

  menuLogin.className = ('login-wrapper');

  menuLogin.innerHTML = `
    <div class='logo'> 
      <img src='./images/wecanlogo.png' alt='logo'>
    </div>
    <div class='sign-box'> 
    <div class='welcome>Bem vinda Dev!</div>
    <div>
      <input class='sign-login' type= 'email' name= 'email' id= 'email' placeholder= 'Email' required></input>
    </div>
    <div>
      <input class='sign-login' type='password' name='password' id='password' placeholder= 'Senha' required></input>
    </div>
    <div class='message-error' id='message-error'></div>
    <div>
      <button class='btn-login' type='submit' name='btn-login' id='btn-login'>Entrar</button>
    </div>
    <div class='sign-google'>Ou entre com...</div>
    <div class='icon-google'>
      <img src='./images/logo-google.png'>
    </div>
    <div class='create-account'>
      Quer entrar para a rede? <a href='/#register'>Cadastre-se</a>
    </div>
    </div>
    `;

  const btnLogin = menuLogin.querySelector('#btn-login');
  // const messageError = menuLogin.querySelector('#message-error');
  // const errorPassword = menuLogin.querySelector('#message-error-password');

  btnLogin.addEventListener('click', () => {
    const email = menuLogin.querySelector('#email').value;
    const password = menuLogin.querySelector('#password').value;
    // const messageError = (errors(valueInput, error));
    // menuLogin.querySelector('#message-error').innerHTML = `Email ou senha ${messageError} inválidos`;
    const loginAuth = (signIn(email.length, password.length));
    signIn(loginAuth);

  });

  return menuLogin;
};
/* document.getElementById("select-type").onchange = () => {
  const filterType = document.getElementById("select-type").value;
  const listType = (applySearchType(pokemonGo, filterType));
  const filterCalcType = (resultCalcType(pokemonGo.length, filterType.length).toFixed(2));
  document.getElementById("statistics").innerHTML = `<p>Os Pokémons do tipo ${filterType} representam ${filterCalcType} % dos Pokémons da primeira geração.</p>`;
  allList(listType);
}
export const applySearchType = (pokemonGo, filterType) => pokemonGo.filter((search) =>
  (search.type.includes(filterType)));

export const resultCalcType = (pokemonGo, filterType) =>
  ((filterType) / (pokemonGo) * 100); */

// const name = container.querySelector('#name');
// const sendBtn = templatePost.querySelector('#sendBtn');
// const greetingMessage = container.querySelector('#greeting-message');

// sendBtn.addEventListener('click', (event) => {
// event.preventDefault();
// greetingMessage.innerHTML = greeting(name.value);
// });

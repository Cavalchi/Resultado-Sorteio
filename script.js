class Validator {
  constructor() {
    this.validations = [
      'data-min-length',
      'data-max-length',
      'data-only-letters',
      'data-email-validate',
      'data-required',
      'data-equal',
      'data-password-validate',
    ];
  }

  validate(form) {
    let currentValidations = form.querySelectorAll('.error-validation');
    if (currentValidations.length) {
      this.cleanValidations(currentValidations);
    }
    let inputs = form.getElementsByTagName('input');
    let inputsArray = [...inputs];
    inputsArray.forEach((input) => {
      for (let i = 0; i < this.validations.length; i++) {
        if (input.getAttribute(this.validations[i]) !== null) {
          let method = this.validations[i].replace('data-', '').replace('-', '');
          let value = input.getAttribute(this.validations[i]);
          this[method](input, value);
        }
      }
    });
  }

  minLength(input, minValue) {
    let inputLength = input.value.length;
    let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
    if (inputLength < minValue) {
      this.printMessage(input, errorMessage);
    }
  }

  maxLength(input, maxValue) {
    let inputLength = input.value.length;
    let errorMessage = `O campo precisa ter no máximo ${maxValue} caracteres`;
    if (inputLength > maxValue) {
      this.printMessage(input, errorMessage);
    }
  }

  onlyLetters(input) {
    let re = /^[A-Za-z]+$/;
    let inputValue = input.value;
    let errorMessage = `Este campo não aceita números nem caracteres especiais`;
    if (!re.test(inputValue)) {
      this.printMessage(input, errorMessage);
    }
  }

  emailValidate(input) {
    let re = /\S+@\S+\.\S+/;
    let email = input.value;
    let errorMessage = `Insira um e-mail no padrão example@outlook.com`;
    if (!re.test(email)) {
      this.printMessage(input, errorMessage);
    }
    import Parse from 'parse/node';
  }

  equal(input, inputName) {
    let inputToCompare = document.getElementsByName(inputName)[0];
    let errorMessage = `Este campo precisa estar igual ao campo ${inputName}`;
    if (input.value !== inputToCompare.value) {
      this.printMessage(input, errorMessage);
    }
  }

  required(input) {
    let inputValue = input.value;
    if (inputValue === '') {
      let errorMessage = `Este campo é obrigatório`;
      this.printMessage(input, errorMessage);
    }
  }

  passwordValidate(input) {
    let charArr = input.value.split('');
    let uppercases = 0;
    let numbers = 0;
    for (let i = 0; i < charArr.length; i++) {
      if (charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
        uppercases++;
      } else if (!isNaN(parseInt(charArr[i]))) {
        numbers++;
      }
    }
    if (uppercases === 0 || numbers === 0) {
      let errorMessage = `A senha precisa ter pelo menos um caractere maiúsculo e um número`;
      this.printMessage(input, errorMessage);
    }
  }

  printMessage(input, msg) {
    let errorsQty = input.parentNode.querySelector('.error-validation');
    if (errorsQty === null) {
      let template
 = document.querySelector('.error-validation').cloneNode(true);
        template.textContent = msg;
        let inputParent = input.parentNode;
        template.classList.remove('template');
        inputParent.appendChild(template);
      }
    }
      cleanValidations(validations) {
        validations.forEach(el => el.remove());
      }
    }
    let form = document.getElementById('register-form');    
form.addEventListener('submit', function(event) {
  event.preventDefault();
  setTimeout(()=> {
    document.getElementById('btn-submit').setAttribute('disabled', true)
  }, 0001)
      const Parse = require('parse/node');

  // Coletar os dados do formulário
let formData = new FormData(form);
let formDetail = Object.fromEntries(formData);
let email = formDetail.email;

const Parse = require('parse/node');

// Inicialize o Parse
Parse.initialize('YX1d8JAZy0FLhG22LfaS7gpibFwDOxTgAlpZcM2J', 'au7MMDVyPkYupjM9FuYI8niBmZlyggsJzq1mPEUE');
Parse.serverURL = 'https://parseapi.back4app.com/classes/Person';

// Crie uma consulta para obter todos os objetos da classe
const query = new Parse.Query('Person');

// Conte quantos objetos existem na classe
query.count().then(count => {
  // Gere um número aleatório dentro do intervalo de objetos existentes
  const randomIndex = Math.floor(Math.random() * count);
  
  // Defina o limite da consulta para 1 objeto, pule a quantidade de objetos aleatórios gerados
  query.limit(1);
  query.skip(randomIndex);
  
  // Execute a consulta e obtenha o objeto aleatório
  return query.first();
}).then(object => {
  console.log(object.toJSON());
}).catch(error => {
  console.error(error);
});


      }
    })
.then(resposta => resposta.text())
.then(result => {
  setTimeout(() => {
    var number;
    var resultado = JSON.parse(result);
    var resultadoArr = resultado.results;
    resultadoArr.forEach((res) => {
      if (res.email == email) {
        number = res.number;
      } else {
        existe = false;
        const Query = Parse.Object.extend('Person');
const query = new Parse.Query(Query);
query.limit(1);
query.skip(Math.floor(Math.random() * count));
query.first().then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});
      }
    });
    var texto = document.createTextNode(JSON.stringify(number));
    document.getElementById('numero-sorteado').classList.remove('sorteado');
    document.getElementById('numero-sorteado').appendChild(texto);
  }, 1000);
  setTimeout(function() {
  // código a ser executado após o tempo limite de 5 segundos
}, 5000);
})
.catch(error => console.error(error))
    .catch(error => console.error(error))
    })
    ,0200
  let btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', function() {
  btnSubmit.classList.add('scale');
  setTimeout(function() {
    btnSubmit.classList.remove('scale');
  }, 500);
  document.getElementById("btn-submit").addEventListener("click", function(event){
  event.target.disabled = true;
  const Person = Parse.Object.extend("Person");
const query = new Parse.Query(Person);
query.count().then(count => {
  var name = ['Nome1', 'Nome2', 'Nome3', 'Nome4'];
var email = ['email1@example.com', 'email2@example.com', 'email3@example.com', 'email4@example.com'];
var phone = ['1111111111', '2222222222', '33333', '4444444444'];
var number = ['1', '2', '3', '4'];
  const randomIndex = Math.floor(Math.random() * count);
  query.skip(randomIndex);
  query.limit(1);
  return query.find();
}).then(results => {
  if (results.length > 0) {
    const person = results[0];
    const name = person.get("name");
    const phone = person.get("phone");
    const email = person.get("email");
    console.log('Nome:', name);
    console.log('Telefone:', phone);
    console.log('Email:', email);
  } else {
    console.log('Nenhum resultado encontrado');
  }
}).catch(error => {
  console.error('Erro ao buscar dados:', error);
});
// Crie um array com os dados a serem sorteados


// Função para sortear um elemento de um array
function sortearElemento(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Função para exibir os dados sorteados na interface do usuário
function exibirDadosSorteados() {
  var nomeSorteado = sortearElemento(nomes);
  var emailSorteado = sortearElemento(emails);
  var telefoneSorteado = sortearElemento(telefones);
  var numeroSorteado = sortearElemento(numeros);

  document.getElementById('nome').innerText = 'Nome: ' + nomeSorteado;
  document.getElementById('email').innerText = 'Email: ' + emailSorteado;
  document.getElementById('telefone').innerText = 'Telefone: ' + telefoneSorteado;
  document.getElementById('numero').innerText = 'Número: ' + numeroSorteado;
}

// Adicione um evento de clique ao botão "Sortear"
document.getElementById('btn-submit').addEventListener('click', function() {
  exibirDadosSorteados();
});
script

      
});
});

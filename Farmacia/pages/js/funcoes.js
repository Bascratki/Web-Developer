document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário
  if (checkForm()) {
    sendData();
  }
});

function sendData() {
  const form = document.getElementById("form");
  const formData = new FormData(form);

  fetch("inserir_usuario.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Cadastro realizado com sucesso!");
        form.reset(); // Limpa o formulário após sucesso
      } else {
        alert("Erro ao cadastrar usuário: " + data.message);
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Erro ao processar o cadastro.");
    });
}

function checkForm() {
  checkInputUsername();
  checkInputEmail();
  checkInputEndereco();
  checkInputCelular();
  checkInputSenha();
  checkInputSenhaConfirmacao();

  const formItems = form.querySelectorAll(".form-content");
  return [...formItems].every((item) => !item.classList.contains("error")); // Verifica se não há erros
}

function checkInputUsername() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Campo obrigatório.");
  } else {
    resetErrorInput(username);
  }
}

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "Campo obrigatório.");
  } else {
    resetErrorInput(email);
  }
}

function checkInputEndereco() {
  const enderecoValue = endereco.value;

  if (enderecoValue === "") {
    errorInput(endereco, "Campo obrigatório.");
  } else {
    resetErrorInput(endereco);
  }
}

function checkInputCelular() {
  const celularValue = celular.value;

  if (celularValue === "") {
    errorInput(celular, "Campo obrigatório.");
  } else {
    resetErrorInput(celular);
  }
}

function checkInputSenha() {
  const senhaValue = senha.value;

  if (senhaValue === "") {
    errorInput(senha, "A senha é obrigatória.");
  } else if (senhaValue.length < 8) {
    errorInput(senha, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    resetErrorInput(senha);
  }
}

function checkInputSenhaConfirmacao() {
  const senhaValue = senha.value;
  const senhaConfirmacaoValue = senhaConfirmacao.value;

  if (senhaConfirmacaoValue === "") {
    errorInput(senhaConfirmacao, "A confirmação de senha é obrigatória.");
  } else if (senhaConfirmacaoValue !== senhaValue) {
    errorInput(senhaConfirmacao, "As senhas não são iguais.");
  } else {
    resetErrorInput(senhaConfirmacao);
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;
  formItem.classList.add("error");
}

function resetErrorInput(input) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = ""; // Limpa a mensagem de erro
  formItem.classList.remove("error");
}

// Elementos do formulário
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const endereco = document.getElementById("endereco");
const celular = document.getElementById("celular");
const senha = document.getElementById("senha");
const senhaConfirmacao = document.getElementById("senhaConfirmacao");

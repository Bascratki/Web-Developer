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

// Funções de validação devem ser ajustadas para retornar `true` se tudo estiver correto
function checkForm() {
  checkInputUsername();
  checkInputEmail();
  checkInputEndereco();
  checkInputCelular();
  checkInputSenha();
  checkInputSenhaConfirmacao();

  const formItems = form.querySelectorAll(".form-content");
  return [...formItems].every((item) => item.className === "form-content"); // Verifica se não há erros
}

function checkInputUsername() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Campo obrigatório.");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "Campo obrigatório.");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEndereco() {
  const enderecoValue = endereco.value;

  if (enderecoValue === "") {
    errorInput(endereco, "Campo obrigatório.");
  } else {
    const formItem = endereco.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputCelular() {
  const celularValue = celular.value;

  if (celularValue === "") {
    errorInput(celular, "Campo obrigatório.");
  } else {
    const formItem = celular.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputSenha() {
  const senhaValue = senha.value;

  if (senhaValue === "") {
    errorInput(senha, "A senha é obrigatória.");
  } else if (senhaValue.length < 8) {
    errorInput(senha, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    const formItem = senha.parentElement;
    formItem.className = "form-content";
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
    const formItem = senhaConfirmacao.parentElement;
    formItem.className = "form-content";
  }
}
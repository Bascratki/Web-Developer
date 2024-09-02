const form = document.getElementById("form");

const username = document.getElementById("username")

const email = document.getElementById("email")

const senha = document.getElementById("senha")

const senhaConfirmacao = document.getElementById("senhaConfirmacao");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Campo obrigatório.")
    }
    else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Campo obrigatório.")
    }
    else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputSenha(){
    const senhaValue = senha.value;

    if(senhaValue === ""){
        errorInput(senha, "A senha é obrigatória.")
    }
    else if(senhaValue.length < 8){
        errorInput(senha, "A senha precisa ter no mínimo 8 caracteres.")   
    }
    else{
        const formItem = senha.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputSenhaConfirmacao(){
    const senhaValue = senha.value;
    const confirmaçãoSenhaValue = senhaConfirmacao.value;

    if(senhaConfirmacaoValue === ""){
        errorInput(senhaConfirmacaoValue, "A confirmação de senha é obrigatória.")
    }
    else if(senhaConfirmacaoValue.length !== senhaValue){
        errorInput(senhaConfirmacao, "As senhas não são iguais.")   
    }
    else{
        const formItem = senhaConfirmacao.parentElement;
        formItem.className = "form-content"
    }

}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputSenha();
    checkInputSenhaConfirmacao();

    const formItem = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    });

    if(isValid){
        alert("Cadastro realizado com sucesso")
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}
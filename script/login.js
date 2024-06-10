const btnLogin = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
let usuarioLogado = null;

(()=>{
    usuarioLogado = localStorage.getItem("usuario");
    if(usuarioLogado){
        window.location.href = "file:///tmp/guest-0dqmnt/Downloads/g243I2t-main/logado.html";
    }
})();

btnLogin.onclick = () =>{

    e.preventDefault();
    
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if(usuario){
        if(usuario === "japonegro"){
            if(senha === "1234"){
                localStorage.setItem("usuario",usuario);
                window.location.href = "file:///tmp/guest-0dqmnt/Downloads/g243I2t-main/logado.html"
            }
        }else{
            inputUsuario.focus();
        }
    }
}
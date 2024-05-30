// Interatividade na barra de navegação //
// Este trecho de código é executado quando o DOM é totalmente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o elemento com a classe 'hamburger', que geralmente é o ícone do menu de hambúrguer
    const hamburger = document.querySelector('.hamburger');
    // Seleciona o elemento com a classe 'nav-menu', que é o menu de navegação
    const navMenu = document.querySelector('.nav-menu');
  
    // Adiciona um ouvinte de evento de clique ao ícone do menu de hambúrguer
    hamburger.addEventListener('click', function () {
        // Quando o ícone do menu de hambúrguer é clicado, a classe 'show' é alternada no menu de navegação,
        // tornando-o visível ou oculto, dependendo do seu estado atual
        navMenu.classList.toggle('show');
    });
  });

// capturando elementos no DOM
// usuario
let usuarioInput = document.getElementById("usuario");
let usuarioLabel = document.querySelector('label[for="usuario"]');
let usuarioHelper = document.getElementById("usuario-helper");

// funções gerais
function togglePopup(input, label) {
    // mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("required-popup")
    })

    // ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup")
    });
};

togglePopup(usuarioInput, usuarioLabel);

function estilizarInputCorreto(input, helper) {
    // função que insere a cor verde caso o input esteja correto
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
};

function estilizarInputIncorreto(input, helper) {
    // função que insere a cor vermelha caso o input esteja incorreto
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
};

// validar valor do input usuário
usuarioInput.addEventListener("blur", (e) => {
    let valorUsuario = e.target.value;

    if (valorUsuario.length < 6 || valorUsuario == "") {
        // adicionar estilos dinâmicos se o valor tiver menos de 6 caracteres
        usuarioHelper.innerText = "Digite um nome de usuário válido, ele deve conter no mínimo 6 caracteres"
        estilizarInputIncorreto(usuarioInput, usuarioHelper);
        inputsCorretos.usuario = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(usuarioInput, usuarioHelper);
        inputsCorretos.usuario = true;
    }
});

// capturando elementos no DOM
// senha
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel);

// validar valor do input senha
senhaInput.addEventListener("blur", (e) => {
    let valorSenha = e.target.value;

    if (valorSenha.length < 6 || valorSenha == "") {
        senhaHelper.innerText = "Digite uma senha válida, ela deve conter no mínimo 6 caracteres"
        estilizarInputIncorreto(senhaInput, senhaHelper);
        inputsCorretos.senha = false;
    } else {
        estilizarInputCorreto(senhaInput, senhaHelper);
        inputsCorretos.senha = true;
    };
});

// evitar envio do formulário
let btnLogin = document.getElementById("botao_login");
let inputsCorretos = {
    usuario: false,
    senha: false
};

// botão login
btnLogin.addEventListener("click", (e) => {
    if (inputsCorretos.usuario == false ||
        inputsCorretos.senha == false) {
        e.preventDefault();
        alert("Favor preencher todos os campos!");
    } else {
        alert("Login realizado com sucesso!");
    }
})

// Botão voltar ao topo //
  
  // Define uma função chamada scrollFunction que é chamada sempre que ocorre um evento de rolagem
  window.onscroll = function() {
    scrollFunction();
  };
  
  // Função para mostrar ou ocultar o botão de voltar ao topo, dependendo da posição de rolagem
  function scrollFunction() {
    // Verifica se a posição de rolagem vertical do corpo do documento é maior que 20 pixels
    // ou se a posição de rolagem vertical do elemento raiz (html) é maior que 20 pixels
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // Se a posição de rolagem for maior que 20 pixels, o botão de voltar ao topo é exibido
      document.getElementById("btnTopo").style.display = "block";
    } else {
      // Caso contrário, o botão de voltar ao topo é ocultado
      document.getElementById("btnTopo").style.display = "none";
    }
  }
  
  // Função para rolar a página de volta ao topo quando o botão de voltar ao topo é clicado
  function scrollToTop() {
    // Define a posição de rolagem vertical do corpo do documento como 0, levando a página de volta ao topo
    document.body.scrollTop = 0;
    // Define a posição de rolagem vertical do elemento raiz (html) como 0, levando a página de volta ao topo
    document.documentElement.scrollTop = 0;
  }
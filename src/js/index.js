/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verificar e remover a classe do modo-escuro do body
        - passo 7 - trocar a imagem do botão de alterar tema pra sol
*/
const botaoAlterarTema = document.getElementById("botao_alterar_tema");

const body = document.querySelector("body")
console.log(body);

const imagemBotaoTrocaTema = document.querySelector(".imagem_botao_mudar_tema")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo_escuro")

    body.classList.toggle("modo_escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png")

    } else {
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png")

    }
});

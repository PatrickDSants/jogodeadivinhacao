let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let maxTentativas = 10;
let chuteInput = document.getElementById("input-numero");
let botao = document.getElementById("botao-enviar");
let resultado = document.getElementById("resultado");
let bichinho = document.getElementById("bichinho");
let contadorTentativas = document.getElementById("contador");

console.log("Número secreto: " + numeroSecreto);

botao.addEventListener("click", function () {
    let chute = parseInt(chuteInput.value);

    // Se o número for inválido, exibe a mensagem e sai da função sem contar a tentativa
    if (isNaN(chute) || chute < 1 || chute > 100) {
        resultado.innerHTML = "⚠️ Digite um número válido entre 1 e 100.";
        return;
    }

    tentativas++; // Só incrementa agora, depois da validação
    contadorTentativas.textContent = maxTentativas - tentativas; // Atualiza tentativas restantes
    let diferenca = Math.abs(chute - numeroSecreto);

    if (chute === numeroSecreto) {
        resultado.innerHTML = `🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`;
        bichinho.src = "./img/dinousauroganhou-Photoroom.png";
        botao.disabled = true;
    } else if (tentativas >= maxTentativas) {
        resultado.innerHTML = `😞 Você perdeu! O número secreto era ${numeroSecreto}.`;
        bichinho.src = "./img/dinousauroperdeu-Photoroom.png";
        botao.disabled = true;
    } else {
        let dica = chute < numeroSecreto ? "Maior" : "Menor";
        resultado.innerHTML = `O número secreto é ${dica}. Você ainda tem ${maxTentativas - tentativas} tentativas.`;

        // Muda a imagem de acordo com a distância
        bichinho.src = diferenca > 30 ? "./img/dinousaurotriste-Photoroom.png" : "./img/dinousaurofeliz-Photoroom.png";
    }

    // Limpa o campo de entrada após cada tentativa
    chuteInput.value = "";
    chuteInput.focus();
});


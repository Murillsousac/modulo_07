class Parquimetro {
    constructor() {
        this.tarifa = 1;
        this.tempoMaximo = 120
    }

    calcularEstacionamento() {
        const valor = parseFloat(document.getElementById("valor").value);
        
        if (valor < 1) {
            document.getElementById("tempo").textContent = `Valor insuficiente, apenas valor acima de R$ 1,00`;
            document.getElementById("troco").textContent = ``; // Limpa o troco caso o valor seja inválido
        } else {
            let tempo = (valor / this.tarifa) * 30;
            if (tempo > this.tempoMaximo){
                tempo = this.tempoMaximo
            }
            let troco = valor - Math.floor(valor / this.tarifa) * this.tarifa
            document.getElementById("tempo").textContent = `${tempo} minutos`;
            document.getElementById("troco").textContent = `Troco: R$ ${troco.toFixed(2)}`;
        }
    }
}

// Criando a instância e associando ao botão
let parq = new Parquimetro();
parq.calcularEstacionamento()

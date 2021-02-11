class Calcular {

    constructor() {
        this.numeros = document.querySelectorAll(".number");
        this.result = document.querySelector("#result");
        this.btnReset = document.querySelector("#reset");
        this.btnResolve = document.querySelector("#resolve");

        this.btnReset.onclick = () => this.reset();
        this.btnResolve.onclick = () => this.resolve();
        this.inserirNumeros();
    };

    inserirNumeros() {
        for (let i of this.numeros) {
            i.onclick = () => {
                this.result.value += i.value;
            }
        }
    };

    reset() {
        this.result.value = "";
    };

    resolve() {
        this.result.value != "" ? 
        this.result.value = eval(this.result.value) : null;
    };
}

const calculadora = new Calcular;
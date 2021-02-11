class Calcular {

    constructor() {
        this.numbers = document.querySelectorAll(".number");
        this.result = document.querySelector("#result");
        this.btnReset = document.querySelector("#reset");
        this.btnResolve = document.querySelector("#resolve");

        this.btnReset.onclick = () => this.reset();
        this.btnResolve.onclick = () => this.resolve();
        this.insertNumber();
    };

    insertNumber() {
        for (let n of this.numbers) {
            n.onclick = () => {
                // console.log(n);
                console.log(n.value);
                // this.result.value += n.value;
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

const calculator = new Calcular;
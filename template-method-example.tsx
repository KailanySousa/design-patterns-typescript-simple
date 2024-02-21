// Template Method: padrão de projeto do tipo comportamentl que define um esqueleto de algoritmo numa classe pai
// mas que permite que algumas partes desse algoritmo sejam sobrescritas pelas classes filhas
// ou seja, as filha podem substituir etapas, mas também são obrigadas a implementar etapas definidas na classe pai

abstract class Personagem {

    templateMethod(){
        this.anda();
        this.respira();
        this.luta();
        this.magia();
    };

    // esqueleto dos algoritmos

    // comportamento que podem ser ou não sobrescritos
    protected anda() {
        console.log("anda normalmente");
    };
    protected respira() {
        console.log("respira normalmente");
    };

    // comportamentos que vão ser definidos nas classes que extendem a abstração
    protected abstract magia(): void;
    protected abstract luta(): void;

}

class Guerreiro extends Personagem {
    protected luta() {
        console.log("luta extremamente bem");
    }

    protected magia() {
        console.log("não consegue usar magia")
    }
}

class Elfo extends Personagem {
    protected anda() {
        console.log("corre muito");
    };

    protected luta() {
        console.log("luta extremamente bem");
    }

    protected magia() {
        console.log("consegue usar magia")
    }
}

function jogo(personagem: Personagem) {
    personagem.templateMethod();
}

jogo(new Elfo());
jogo(new Guerreiro());

// Singleton: padrão que permite que uma classe tenha apenas uma instancia na aplicação
// tem que ter um ponto de acesso global, geralmente propriedade estatica dentro da classe
// Exemplo: Redux, biblioteca de gerenciamento de estado que prove instancia unica no seu objeto store, onde vai guardar o estado global da aplicação

class Store {
    // ponto de acesso da instancia;
    private static instance: Store;

    private data: any[] = [];

    // construtor padrão
    public static getInstance(): Store {
        if (!Store.instance) {
            Store.instance = new Store();
        }

        return Store.instance;
    }

    public pushData(newData: any) {
        this.data.push(newData);
    }

    public getData() {
        return this.data;
    }
}

function myReactApp() {
    const instancia1 = Store.getInstance();
    instancia1.pushData(1);
    console.log(instancia1.getData());

    // apesar de armazenada em uma nova variavel, a instancia ainda é a mesma
    const instancia2 = Store.getInstance();
    console.log(instancia2.getData());
}

myReactApp();

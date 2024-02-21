// Strategy: utilizado para quebrar em diversos pedaços (estratégias = algoritmo grande com varios detalhes de implementação numa mesma classe)
// dessa forma, nesse padrão é criada uma familia de algoritos, cada membro da familia é uma classe separada
// Exemplo: biblioteca passport.js, que possui uma familia de estrategias, que na verdade são formas diferentes de realizar autenticação

// indica comportamentos que a familia de estrategia siga
interface Strategy {
    login(credentials: any): boolean;
}

// classe chamada de contexto
class Passport {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    // comportamento de login vai ser feito de acordo com a estrategia passada na instancia da classe Passport
    public login(credentials: any) {
        this.strategy.login(credentials);
    }
}

class JwtStrategy implements Strategy {
    login(credentials: any): boolean {
        console.log("realizando login com JWT");
        return true;
    }
}

class FacebookStrategy implements Strategy {
     login(credentials: any): boolean {
        console.log("realizando login com facebook OAuth2");
        return true;
    }
}

// reaproveitamento da classe Passport
// quebrando código em diferentes classes, separando responsabilidades
// facilitando manutenções

const estrategia1 = new Passport(new JwtStrategy());
estrategia1.login({});

const estrategia2 = new Passport(new FacebookStrategy());
estrategia2.login({})

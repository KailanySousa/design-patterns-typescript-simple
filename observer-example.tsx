// Observer: padrão de projeto do tipo comportamental, que permite definir um mecanismo de assinatura, chamados de eventos

interface Observer {
    update(): void;
}

interface Store {
    addCustomerToNotificationPool(observer: Observer): void;
    removeCustomerToNotificationPool(observer: Observer): void;
    notifyCustomers(): void;
}

class AppleStore implements Store {
    private observers: Observer[] = [];

    public addCustomerToNotificationPool(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeCustomerToNotificationPool(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);

        if(observerIndex < 0) {
            throw new Error("Observer não encontrado");
        }

        this.observers.splice(observerIndex, 1);
    }

    public notifyCustomers(): void {
        for(const obs of this.observers) {
            obs.update();
        }
    }
}

class Customer1 implements Observer {
    update(): void {
        console.log("Cliente 1 recebeu a notificação de lançamento");
    }
}

class Customer2 implements Observer {
    update(): void {
        console.log("Cliente 2 recebeu a notificação de lançamento");
    }
}

const appleStore = new AppleStore();

const cliente1 = new Customer1();
appleStore.addCustomerToNotificationPool(cliente1);

appleStore.notifyCustomers();

const cliente2 = new Customer2();
appleStore.addCustomerToNotificationPool(cliente2);

appleStore.notifyCustomers();

appleStore.removeCustomerToNotificationPool(cliente1);
appleStore.notifyCustomers();

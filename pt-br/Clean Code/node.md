# Node

### SOLID

Criando classes já visando o Single Responsability:

```ts
class CalculateOrderDiscount {
  public execute(amount: number, paymentMethod: string): number {

    if (paymentMethod == "billet") {
      return amount * 0.05;
    }

    if (paymentMethod == "credit") {
      return amount * 0;
    }

    if (paymentMethod == "debit") {
      return amount * 0.05;
    }

    return 0;

  }
}

class SubmitOrderInvoice {
  public execute(): void {

  }
}

class CreateOrder {
  public execute(): void { 
    // SubmitOrderInvoice
    // CalculateOrderDiscount
  }
}
```

Depois de utilizar Open/Closed ou Liskov Substitution (classe CalculateOrderDiscount está aberta para extensão, e qualquer implementação pode ser utilizada nela):

```ts
class Debit implements PaymentMethod {
  getDiscountAmount(amount: number) {
    return amount * 0.05;
  };
}

class Billet implements PaymentMethod {
  getDiscountAmount(amount: number) {
    return amount * 0.05;
  };
}

class Credit implements PaymentMethod {
  private installElements: number;
  
  constructor(installElements: number) {
    this.installElements = installElements;
  }

  getDiscountAmount(amount: number) {
    return amount * 0.05;
  };
}

interface PaymentMethod {
  getDiscountAmount(amount: number): number;
}

class CalculateOrderDiscount {
  public execute(amount: number, paymentMethod: PaymentMethod): number {
    return paymentMethod.getDiscountAmount(amount);
  }
}
```

### DDD Domain Driven Design

Domínio é o problema a ser resolvido, e seu contexto. Separados em subdomínios.
Entender as entidades e os casos de uso. Em diferentes subdomínios as mesmas entidades podem ter nomes diferentes ex: usuário, comprador, destinatário.
Primeiro pensar na aplicação desconectada do banco de dados, garantir por testes que as regras de negócio funcionam sem banco de dados. 
A maneira como os dados são persistidos não deve influenciar na forma como o código é organizado.

# Design Patterns

## Creational Patterns

### Factory Method
> O Factory Method é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

* O cliente pode ter que criar um CriadorConcreto para cada ProdutoConcreto.

### Abstract Factory
> O Abstract Factory é um padrão de projeto criacional que permite que você produza famílias de objetos relacionados sem ter que especificar suas classes concretas.

* Permite manter a consistência entre diversos produtos relacionados.

### Builder
> O Builder é um padrão de projeto criacional que permite a você construir objetos complexos passo a passo. O padrão permite que você produza diferentes tipos e representações de um objeto usando o mesmo código de construção.

* Propõe uma solução para a construção de objetos complexos sem que o cliente conheça sua estrutura interna.

### Prototype
> O Prototype é um padrão de projeto criacional que permite copiar objetos existentes sem fazer seu código ficar dependente de suas classes.

* É necessário que cada classe ConcretePrototype implemente a operação clone.

### Singleton
> O Singleton é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.

* Pode utilizar o lazy initialization para adiar a criação do objeto Singleton apenas quando ele for refenciado a primeira vez.

## Structural Patterns

### Adapter
> O Adapter é um padrão de projeto estrutural que permite objetos com interfaces incompatíveis colaborarem entre si.

* Tradução entre interface de cliente e interface da classe que oferece o serviço. 

### Composite
> O Composite é um padrão de projeto estrutural que permite que você componha objetos em estruturas de árvores e então trabalhe com essas estruturas como se elas fossem objetos individuais.

* Define recursivamente uma hierarquia de classes.

### Decorator 
> O Decorator é um padrão de projeto estrutural que permite que você acople novos comportamentos para objetos ao colocá-los dentro de invólucros de objetos que contém os comportamentos.

* Permite adicionar dinâmicamente operações a um objeto.

### Bridge
> O Bridge é um padrão de projeto estrutural que permite que você divida uma classe grande ou um conjunto de classes intimamente ligadas em duas hierarquias separadas—abstração e implementação—que podem ser desenvolvidas independentemente umas das outras.

* Permite que uma implementação seja substituída dinamicamente, sem alterar sua abstração.

### Flyweght
> O Flyweight é um padrão de projeto estrutural que permite a você colocar mais objetos na quantidade de RAM disponível ao compartilhar partes comuns de estado entre os múltiplos objetos ao invés de manter todos os dados em cada objeto.

* Estado extrínseco é parte do estado que não pode ser compartilhado entre várias instâncias.

### Facade
> O Facade é um padrão de projeto estrutural que fornece uma interface simplificada para uma biblioteca, um framework, ou qualquer conjunto complexo de classes.

### Proxy
> O Proxy é um padrão de projeto estrutural que permite que você forneça um substituto ou um espaço reservado para outro objeto. Um proxy controla o acesso ao objeto original, permitindo que você faça algo ou antes ou depois do pedido chegar ao objeto original.

## Behavioral Patterns

### Chain of Resposability
> O Chain of Responsibility é um padrão de projeto comportamental que permite que você passe pedidos por uma corrente de handlers. Ao receber um pedido, cada handler decide se processa o pedido ou o passa adiante para o próximo handler na corrente.

* Há várias opções de objetos que podem responder a uma solicitação sem saber qual será responsável.

### Iterator
> O Iterator é um padrão de projeto comportamental que permite a você percorrer elementos de uma coleção sem expor as representações dele (lista, pilha, árvore, etc.)

* Estratégia para varrer elementos de uma coleção independente da estrutura interna.

### Template Method
> O Template Method é um padrão de projeto comportamental que define o esqueleto de um algoritmo na superclasse mas deixa as subclasses sobrescreverem etapas específicas do algoritmo sem modificar sua estrutura.

* Fatorar para superclasse.
* Define o esqueleto de um algoritmo, deixando passos para classes abstratas

### Memento
> O Memento é um padrão de projeto comportamental que permite que você salve e restaure o estado anterior de um objeto sem revelar os detalhes de sua implementação.

* Capturar e restaurar o estado interno de um objeto sem expor sua estrutura.

### Mediator
> O Mediator é um padrão de projeto comportamental que permite que você reduza as dependências caóticas entre objetos. O padrão restringe comunicações diretas entre objetos e os força a colaborar apenas através do objeto mediador

* Cria um objeto para definir como outros objetos interagem.

### State
> O State é um padrão de projeto comportamental que permite que um objeto altere seu comportamento quando seu estado interno muda. Parece como se o objeto mudasse de classe.

* Se aproxima do Flyweight quando objetos de estado não tem atributos de instância.
* Eliminação de condicionais de código.

### Strategy
> O Strategy é um padrão de projeto comportamental que permite que você defina uma família de algoritmos, coloque-os em classes separadas, e faça os objetos deles intercambiáveis.

* Um objeto pode selecionar uma opção dentre uma família de algoritmos para definir seu comportamento.
* Eliminação de condicionais de código.

### Command
> O Command é um padrão de projeto comportamental que transforma um pedido em um objeto independente que contém toda a informação sobre o pedido. Essa transformação permite que você parametrize métodos com diferentes pedidos, atrase ou coloque a execução do pedido em uma fila, e suporte operações que não podem ser feitas.

* Encapsular uma operação, permitindo funcionalidade equivalente a ponteiros.

### Observer
> O Observer é um padrão de projeto comportamental que permite que você defina um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando.

* Permite que alguns objetos possam ser adicionados quando há mudança num objeto de interesse.

### Visitor 
> O Visitor é um padrão de projeto comportamental que permite que você separe algoritmos dos objetos nos quais eles operam.

## Extras

* Padrões de criação: Solução para dependência explícita em relação a uma implementação específica em vez de uma interface.
* Programar para uma interface e não implementação: quem usa um objeto deve conhecer apenas as operações que ele suporta.
* Herança de extensão acresenta novas operações à classe base.
* Herança de especificação sobrescreve as operações abstratas da classe base.
* Um objeto é definido pelas operações que ele oferece (interface).
* Delegação é uma estratégia de reuso de implementação associado a composição.
* Tornar atributos privativos refere-se a ocultação de informação.



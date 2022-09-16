# Revisão P1

# Iconix

### Fase de Análise

#### Diagrama de Casos de Uso
Sintática: relações válidas, nome como verbo.
Semântica: abstrações, dialogo entre atores.

#### Diagrama de Domínio
Sintática: nome como substantivo.
Semântica: abstrações de alto nível, sem operações, atributos opcionais.

### Fase de Projeto

#### Diagrama de Sequência
Sintática: relações válidas, formato da classe como objeto.
Semântica: operações de receptor.

#### Diagrama de Classes
Sintática: relações válidas, nome como substantivo, multiplicidades válidas.
Semântica: abstrações, operações.


# Técnicas, Pecados e Forças

* Mudar referência para valor consiste em substituir uma agregação por uma composição.

### Baixa Coesão

* Ter muitos atributos em uma única classe.

### Pressa

* Aceitar qualquer coisa entregue no prazo.

### Ignorância

* Não buscar compreensão.

### Apatia

* Ignorar problemas conhecidos

### Mente Estreita

* Não adotar melhores soluções

### Preguiça

* Adotar o caminho mais fácil.

### Avareza

* Dedicar atenção demasiada em detalhes desnecessários.

### Orgulho

* Implementar uma estrutura do zero em vez de adaptar soluções existentes.

#### Forças Verticais
Aspectos específicos do domínio da aplicação.

#### Forças Horizontais
Aspectos independentes do domínio da aplicação.

#### Forças Primitivas

| Gestão                      | O que é                           |
| --------------------------- | --------------------------------- |
| Funcionalidades             | Atender Requisitos                |
| Desempenho                  | Operações com velocidade adequada |
| Complexidade                | Boas abstrações                   |
| Mudanças                    | Evolução controlada               |
| Recurso de TI               | Controle de implementação e uso   |
| Transferência de Tecnologia | Controle da evolução tecnológica  | 

# AntiPadrões

## Desenvolvimento

### Spaghetti Code
> A estrutura de software ad hoc dificulta a extensão e a otimização do código. A refatoração frequente de código pode melhorar a estrutura do software, dar suporte à manutenção do software e permitir o desenvolvimento iterativo.

* Aproxima-se do Long Method.

### Lava Flow
> Código morto e informações de projeto esquecidas são congeladas em um projeto em constante mudança. Isso é análogo a um fluxo de lava com glóbulos endurecidos de material rochoso. A solução refatorada inclui um processo de gerenciamento de configuração que elimina código morto e evolui ou refatora o design para aumentar a qualidade.

* Uma das classes não é utilizada no diagrama de sequência.

### Functional Decomposition
> Este AntiPattern é a saída de desenvolvedores experientes não orientados a objetos que projetam e implementam um aplicativo em uma linguagem orientada a objetos. O código resultante se assemelha a uma linguagem estrutural (Pascal, FORTRAN) na estrutura de classes. Pode ser incrivelmente complexo, pois desenvolvedores de procedimentos inteligentes criam maneiras muito “inteligentes” de replicar seus métodos testados pelo tempo em uma arquitetura orientada a objetos.

* Classes associadas a ações (verbos).

### God Class / The Blob
> design de estilo processual leva a um objeto com a maior parte das responsabilidades, enquanto a maioria dos outros objetos apenas armazenam dados ou executam processos simples. A solução inclui refatorar o design para distribuir as responsabilidades de forma mais uniforme e isolar o efeito das mudanças.

### Poltergeist
> Poltergeists são classes com funções muito limitadas e ciclos de vida efetivos. Eles geralmente iniciam processos para outros objetos. A solução refatorada inclui uma realocação de responsabilidades para objetos de vida mais longa que eliminam os Poltergeists.

### Copy&Paste
> O código reutilizado copiando as instruções de origem leva a problemas significativos de manutenção. Formas alternativas de reutilização, incluindo a reutilização de caixa preta, reduzem os problemas de manutenção por terem código-fonte, testes e documentação comuns.

### Golden Hammer
> Um Golden Hammer é uma tecnologia ou conceito familiar aplicado obsessivamente a muitos problemas de software. A solução envolve expandir o conhecimento dos desenvolvedores por meio de grupos de educação, treinamento e estudo de livros para expor os desenvolvedores a tecnologias e abordagens alternativas.

### Dead End
> Um beco sem saída é alcançado modificando um componente reutilizável se o componente modificado não for mais mantido e suportado pelo fornecedor. Quando essas modificações são feitas, a carga de suporte é transferida para os desenvolvedores e mantenedores do sistema de aplicativos. As melhorias no componente reutilizável não são facilmente integradas e os problemas de suporte podem ser atribuídos à modificação.

## Arquitetura 

### Vendor Lock-in
> O Vendor Lock-In ocorre em sistemas que são altamente dependentes de arquiteturas proprietárias. O uso de camadas de isolamento arquitetural pode fornecer independência de soluções específicas do fornecedor.

### Design by Committee
> O clássico AntiPattern dos órgãos de padronização, o Design by Committee cria arquiteturas excessivamente complexas que carecem de coerência. O esclarecimento das funções de arquitetura e a facilitação aprimorada de processos podem refatorar processos de reunião ruins em eventos altamente produtivos.

### Reinvent the Wheel
> A falta generalizada de transferência de tecnologia entre projetos de software leva a uma reinvenção substancial. O conhecimento de design enterrado em ativos legados pode ser aproveitado para reduzir o tempo de colocação no mercado, o custo e o risco.

## Gestão

### Analysis Paralysis
> Esforçar-se pela perfeição e completude na fase de análise muitas vezes leva ao impasse do projeto e à sobrecarga excessiva de requisitos/modelos. A solução refatorada inclui uma descrição de processos de desenvolvimento incremental e iterativo que adiam a análise detalhada até que o conhecimento seja necessário.

### Death by Planning
> O planejamento excessivo de projetos de software leva a cronogramas complexos que causam problemas a jusante. Explicamos como planejar um processo de desenvolvimento de software razoável que inclua a incorporação de fatos conhecidos e replanejamento incremental.

### Cornob
> Pessoas difíceis frequentemente obstruem e desviam o processo de desenvolvimento de software. As espigas de milho podem ser tratadas abordando suas agendas por meio de várias ações organizacionais táticas, operacionais e estratégicas.


# Padrões de Análise

## Responsabilidade

### Party
> Quando diferentes classes possuem funcionalidades em comum, é possível criar uma
generalização artificial da qual essas funcionalidades sejam herdadas (Pessoa e Empresa herdam
de Entidade).

### Hierarquia de Orgs.
> Quando classes estão associadas de forma hierárquica (Empresa → Regional → Divisão),
é possível criar uma classe abstrata (Organiza¸cão) com auto-associa¸câo da qual as classes
herdarão. 

### Accountability
> Quando uma classe se relaciona com outras classes e esses relacionamentos recorrentemente
envolvem uma terceira classe, o tipo de relacionamento e essa terceira classe podem ser
encapsulados.

* Determinar que uma pessoa tenha vínculo a uma empresa por período de tempo determinado.

### Post
> Extensão de Party. Cria-se uma classe para encapsular funcionalidades temporárias.

## Medida e Observação

### Quantity
>  Para representar medidas, é possível criar uma classe com atributos como valor e unidade.

### Conversion Ratio
> E possível criar uma classe que funcione como uma tabela de conversão simples. Para
conversões complexas, pode-se criar méodos na classe Quantity.

### Observation
> Uma generaliza¸cão da qual deriva-se tanto Medida quanto Observações de categoria.

### Time Record
> Modelagem para associar observações a um ou mais pontos no tempo, ou a um período de
tempo.

* Armazenar informações como renda antes da pandemia.

### Meansurement

* Classe Phenomenon type representa uma informação no nível de conhecimento.

## Refêrencia a Objetos

### Name
> Nome é encapsulado em uma classe separada permitindo definir pela multiplicidade da
associa¸cão se Pessoa pode ter um nome repetível, nome único (nesse caso Nome serviria de id),
múltiplos nomes, ou nenhum nome.

### Identification Schema
> Para registrar vários identificadores de diferentes tipos.

## Tipo Associativo

### Historic Mapping
> Uso de uma classe para encapsular um Registro Temporal de uma outra classe.

* Representar uma coleção de valores que variam e variam no tempo.

## Conteúdo da P1

* Papel da OCL é estabelecer restrições ao modelo UML.
* Não devem existir elementos que não representam um elemento de informação.
* Utilização de multi-threads está vinculado a forças primitivas.
* Fatores que influenciam a tomada de decisão ao domínio da aplicação são forças primitivas.
* As forças primitivas que mais afetam o desenvolvedor são gestão de funcionalidades e de desempenho.
* Utilizar soluções com base em padrões de análise é parte da gestão de complexidade.
* Acoplamento de software é uma medida de quão duas ou mais classes estão conectadas.

### Legibilidade

Código de fácil leitura, isso não signfica que ele seja simples.

### Previsibilidade


### Confiabilidade

Necessário uso de testes automatizados, code review, refatoração

### Simplicidade

K.I.S.S. -> Keep It Simple and Stupid
Não pensar em soluções para problemas que não existem.
Iterações curtas (short commits).

### Manutenabilidade



### O que não é Clean Code

- Manual 
- Estrutura de pastas
- Código menor
- Arquitetura/Design de software  
- Velocidade de execução


### Nomenclatura

- Evite diminutivos e nomes que não explicitam o que são:

```js
const filtered = users.filter(u => ...condition);

const usersWithCondition = users.filter(user => ...condition);
```

- Evite nomes genéricos, ex: data, response, args, params...

- Escreva boleanos como perguntas (is, does, has);

```js
const userMajority = true;

const isUserOnMajority = false;
```

- Criar variavéis pela causa, e não efeito;

```js
function Button() {
  isButtonDisabled = true;
  
  <button disabled={isButtonDisabled}>
    <span></span>
    {isButtonDisabled ? 'Carregando': 'Enviar'}
  </button>
}

function Button() {
  isFormSubmitting = true;
  
  <button disabled={isFormSubmitting}>
    <span></span>
    {isFormSubmitting ? 'Carregando': 'Enviar'}
  </button>
}
```

- Escreva o código em inglês;

- Evite negações;

- Early returns x else;

- Evitar condicionais aninhadas;

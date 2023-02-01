# React
### Componentizacao

- Quando há codigo repetitivo;
- Quando é possivel isolar algo do contexto sem afetar o comportamento (funçõess, variáveis que são usadas em apenas uma parte de um componente);
- Estruturas HTML repetitivas não necessariamente precisam ser componentizadas;
- Nem sempre quando é feito o desacomplamento da interface, é interessante mover a lógica também, busque criar componentes puros;
- Em funções que são disparadas pelo evento do usuario use prefixo 'handle';
- Em funções que são passadas como props de componente use o prefixo 'on'; 
- Configurações em componentes (props que alteram o visual, ex: label, icon, mensagem de erro de um input), prefira composição;
- Deixe a camada HTML com o menor número de condicionais possíveis (ex: var.length == 0 &&);

#### Configuração

```tsx
interface InputProps {
  label: string;
  leftIcon?: ReactNode;
  icon?: ReactNode;
  errorMessage?: string;
}

export function Input({ label, errorMessage, icon = null, leftIcon = null }: InputProps) {
  return (
    <div>
      {label && <label>{label}</label>}
      {leftIcon}
      <input type="text" />
      {icon}
      
      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  )
}
```

#### Composição

```tsx
interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <div>
      {children}
    </div>
  )
}

export function FormField() {
  return (
    <input type="text"/>
  )
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
  label: string;
}

export function Label({ label, ...rest }: LabelProps) {
  return (
    <label {...rest}>{label}</label>
  )
}

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <span>{message}</span>
  )
}

interface IconProps {
  children: ReactNode;
}

export function Icon({ children }: ReactNode) {
  return (
    <span>{children}</span>
  )
}
```

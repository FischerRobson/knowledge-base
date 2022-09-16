### Iniciar o cluster k3d

```
k3d cluster create
```

### Nomeando o cluster

```
k3d cluster create [NOME] --no-lb # sem proxy
```

### Listar os clusters

```
k3d cluster list
```

### Excluir os clusters

```
k3d cluster delete [NOME]
```

### Definindo as configurações do cluster

```
k3d cluster create [NOME] --server [N_SERVERS] --agents [N_AGENTS]
```

### Fazendo o PortBind para acessar a aplicação

> 30000 é a porta estabelecida pelo NodePort do manifesto.

```
k3d cluster create --agents [N_AGENTS] --servers [N_SERVERS] -p "8080:30000@loadbalancer"
```

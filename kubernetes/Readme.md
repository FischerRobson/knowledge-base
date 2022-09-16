# Kubernetes

<p align="center">
  <img src=".github/kubernetes.png" />
</p>

## Sobre Kubernetes

O kubernetes, conhecido também como K8s, foi criado pela Google, baseado na experiência deles no gerenciamento de containers em produção, ou seja, além do desenvolvimento de sistemas, quando o sistema está pronto e é publicado. A evolução do kubernetes e ampla adoção se deu após este projeto se tornar open-source, ou seja, de código aberto, na qual qualquer pessoa ou empresa não somente passou a poder utilizá-lo gratuitamente, mas também novas funcionalidades e melhorias foram implementadas de forma mais rápida.

Fazendo uso do Kubernetes, a medida que sua aplicação vai recebendo mais acessos, novos “nodes” são criados, e se a aplicação tiver menos acessos estes “nodes” extras são destruídos, fazendo com que tenhamos mais flexibilidade.

Garantia de:

- Escalabilidade
- Resiliência

## Entendendo Melhor

<p align="center">
  <img src=".github/orchestrator.png" />
</p>

### POD

É a menor unidade do kubernetes, hospeda geralmente 1 container, mas pode conter mais de um (compartilhando o mesmo IP). Os pods são os objetos escalados, e não os containers.

Fazendo uso do Kubernetes, a medida que sua aplicação vai recebendo mais acessos, novos “nodes” são criados, e se a
aplicação tiver menos acessos estes “nodes” extras são destruídos, fazendo com que tenhamos mais flexibilidade.

### Node

Um node é uma máquina, física ou virtual, onde o Kubernetes está instalado.

### Cluster

Um cluster é um conjunto de nodes agrupados.

### Master

A partir do momento que temos um cluster, alguém tem que ser responsável:
Por gerenciá-lo; Para manter informações dos membros do cluster; Para monitorar os nodes; Para fazer algo (ativar um novo node ou não) quando um node falha;

<p align="center">
  <img src=".github/cluster.png" />
</p>

<p align="center">
  <img src=".github/master-node.png" />
</p>

<hr/>

### API Server

A API Server funciona como um frontend para o Kubernetes. Ou seja, é através dele que fazemos uso do gerenciamos usuários, dispositivos, interface de linha de comando.

### etcd

O etcd é usado para armazenar dados, de forma distribuída, no formato chave/valor para configuração e gerenciamento dos clusters. Sim, podemos ter múltiplos
clusters e cada cluster com seu master, e o etcd guardando dados de forma distribuída nos nodes. Além disso os logs dos clusters são gravados aqui.

### Scheduler

O scheduler (agendador) é responsável por distribuir o trabalho para os containers através dos múltiplos nodes. Ele também “busca” por novos
containers criados e anexa eles aos nodes.

### Controller

O controller é o cérebro por traz da orquestração. Ele é responsável por tomar as decisões quando um node falha ou apresenta problemas e pode ativar
novos nodes para substituir os problemáticos.

### Container Runtine

O container runtine faz interface com o software usado para criação dos containers, no nosso caso o docker engine, mas pode
ser utilizado com outros softwares com o mesmo propósito.

### Kubelet

O kubelet é o agente que é executado em cada node em um cluster. O agente é responsável por checar se os containers estão sendo executado no node conforme o
esperado.

## kubectl

Por fim, ao instalar e configurar o Kubernetes, coisa que fazemos na próxima seção, teremos a disposição um programa de linha de comando chamado kubectl (Kube Control Tool) na qual iremos utilizar, em muitos momentos, para executar
comandos do kubernetes. Uma das utilizações desta ferramenta é para realizar deploy (publicação) de aplicações em um cluster do kubernetes.

Alguns comandos, por exemplo:

```
kubectl run nome-da-aplicacao
kubectl cluster-info
kubectl get nodes
```

### Listar Nodes

```
kubectl get nodes
```

### Listar Pods

```
kubectl get pods
kubectl get pods -l [LABEL]=[VALOR]
```

### Detalhar Pods

```
kubectl describe pod/[NOME_POD]
```

### Excluir Pod

```
kubectl delete pod/[NOME_POD]
kubectl delete -f [ARQUIVO] # deleta todos os objetos declarados no manifesto
```

### Mapear porta

```
kubectl port-forward pod/[NOME_POD] [PORTA_LOCAL]/[PORTA_POD]
```

### Listar ReplicaSet

```
kubectl get replicaset
```

## Arquivo de definição do Kubernetes

Esses 4 níveis serão sempre os mais altos, fazendo parte da raiz de definição.

```
apiVersion:
kind:
metadata:

spec:
```

> Para verificar qual o apiVersion execute :

```
kubectl api-resources
```

Para criar o objeto, é necessário executar:

```
kubectl create -f [ARQUIVO]
```

> Uma alternativa é o comando abaixo, capaz de identificar e atualizar o objeto, ao contrário do create

```
kubectl apply -f [ARQUIVO]
```

| CAMPO      |                                            FUNCIONALIDADE                                            |
| ---------- | :--------------------------------------------------------------------------------------------------: |
| apiVersion |                 Define a versão do objeto que está sendo criado na API do Kubernetes                 |
| kind       |                                  Especifica o tipo de objeto criado                                  |
| metadata   | Dados pertencentes ao objeto criado, somente valores conhecidos pelo Kubernetes podem ser utilizados |
| spec       |                       Especificações do objeto criado, de acordo com seu tipo                        |

Exemplo de um arquivo de definicão para nginx:

```
apiVersion: v1
kind: Pod
metadata:
  name: nome-do-pod
  labels:
    app: nome-do-app

spec:
  containers:
    - name: nginx-container
      image: nginx
```

## Replica Set

O Replica Set é responsável pelos Pods, mantendo seus estados e aumentando suas quantidades quando necessário. É o Replica Set que garante a escalabilidade da aplicação.

#### Para criar um ReplicaSet siga o modelo do repliac-set.yml

```
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: my-replica-set
spec:
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: web
          imagem: kubedevio/web-page:blue
          ports:
            - containerPort: 80

```

#### Crie o ReplicaSet:

```
kubectl apply -f [ARQUIVO]
```

#### Escalando o ReplicaSet

> É preferível sempre atualizar no manisfesto.

```
kubectl scale replicaset [NOME_REPLICASET] --replicas [N_REPLICAS]
```

## Deployment

É um dos principais controllers utilizados. O Deployment, em conjunto com o ReplicaSet, garante que determinado número de réplicas de um pod esteja em execução nos nós workers do cluster. Além disso, o Deployment também é responsável por gerenciar o ciclo de vida das aplicações, onde características associadas a aplicação, tais como imagem, porta, volumes e variáveis de ambiente, podem ser especificados em arquivos do tipo yaml ou json para posteriormente serem passados como parâmetro para o kubectl executar o deployment. Esta ação pode ser executada tanto para criação quanto para atualização e remoção do deployment.
O Deployment cria um novo ReplicaSet, que vai deletando os Pods na versão anterior e subindo na nova versão, sem downtime.

#### Realizando Rollback

```
kubectl rollout undo deployment [NOME_DEPLOYMENT]
```

## Service

O service é responsável por expor os Pods.

### ClusterIP

Usado internamente.

### NodePort

Usado externamente, usando em cenários on premisse.

### LoadBalancer

Usado em cenários de nuvem, sempre que é criado é gerado um IP de acesso ao serviço.

Exemplo de service para exposição do Pod:

```
apiVersion: v1
kind: Service
metadata:
  name: service
spec:
  selector:
    app: web
  ports:
    - protocol: TCP
      port: 80
      nodePort: 3000
  type: NodePort

```

#### Listar Serviços

```
kubectl get services
```

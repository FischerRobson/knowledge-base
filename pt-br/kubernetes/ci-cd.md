# Pipeline CI/CD

Para criar a Pipeline CI/CD, crie um cluster kubernetes na digital ocean mantendo as configurações pré-definidas.
Faça o download do Config File e adicione ao Kubectl:

```
cp ~/Downloads/k8s-iniciativa-kubernetes-kubeconfig.yaml ~/.kube/config
```

Após isso, execute o seu deployments, nesse caso do projeto rotten potatoes (add link) :

```
kubectl apply -f kubernetes/deployments.yml
```

Com o comando abaixo, pegue o IP do LoadBalancer:

```
kubectl get all
```

Faça a configuração do GitHub Actions do repositório do projeto.

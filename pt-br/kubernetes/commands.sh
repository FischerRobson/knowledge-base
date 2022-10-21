# INICIAR O MINIKUBE (desenv local)
minukube start

# DEFINIR O DOCKER COMO CONTAINER RUN TIME
minikube config set driver docker

# VERIFICAR OS PODS
kubectl get pods

# DELETAR O CLUSTER
minikube delete

# EXECUTAR UM POD
kubectl run [POD] --image [IMAGEM]

# LISTAR OS PODS 
kubectl get pods 
kubectl get pods -o wide # detalhes de rede e node

# DETALHAR O POD 
kubectl describe pod [POD]

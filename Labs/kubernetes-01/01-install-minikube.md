### Pre-requisite : Docker from previous labs

### Install Minikube
    - change to root : su
    - curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
    - install minikube-linux-amd64 /usr/local/bin/minikube
    - minikube version

### Install kubectl
    - curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
    - chmod +x kubectl
    - mv kubectl /usr/local/bin

### Start minikube
    - change to regular user (shouldn't run minikube with docker driver as root)
    - minikube start --driver=docker
    - kubectl cluster-info
	
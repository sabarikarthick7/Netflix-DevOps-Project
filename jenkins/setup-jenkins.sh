#!/bin/bash
# =====================================================
# Jenkins Setup Script for Netflix Clone DevOps Project
# Run on Ubuntu / VM
# =====================================================

set -e

echo "=================================================="
echo "  Netflix Clone - Jenkins Setup Script"
echo "=================================================="

# ── Install Java ──────────────────────────────────────
echo "[1/6] Installing Java 17..."
sudo apt-get update -y
sudo apt-get install -y openjdk-17-jdk
java -version

# ── Install Jenkins ───────────────────────────────────
echo "[2/6] Installing Jenkins..."
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update -y
sudo apt-get install -y jenkins
sudo systemctl start jenkins
sudo systemctl enable jenkins
echo "✅ Jenkins installed and running on port 8080"
echo "   Initial password: $(sudo cat /var/lib/jenkins/secrets/initialAdminPassword)"

# ── Install Docker ────────────────────────────────────
echo "[3/6] Installing Docker..."
sudo apt-get install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker jenkins
sudo usermod -aG docker $USER
echo "✅ Docker installed"

# ── Install kubectl ───────────────────────────────────
echo "[4/6] Installing kubectl..."
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
kubectl version --client
echo "✅ kubectl installed"

# ── Install Node.js ───────────────────────────────────
echo "[5/6] Installing Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version
npm --version
echo "✅ Node.js installed"

# ── Install Minikube (for local K8s) ──────────────────
echo "[6/6] Installing Minikube..."
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube version
echo "✅ Minikube installed"

echo ""
echo "=================================================="
echo "  ✅ Setup Complete!"
echo "=================================================="
echo ""
echo "NEXT STEPS:"
echo "1. Open Jenkins: http://localhost:8080"
echo "2. Use initial password shown above"
echo "3. Install suggested plugins"
echo "4. Add credentials:"
echo "   - DOCKERHUB_USERNAME (Secret text)"
echo "   - DOCKERHUB_PASSWORD (Secret text)"
echo "   - KUBECONFIG (Secret file)"
echo "5. Start Minikube: minikube start"
echo "6. Create pipeline job pointing to Jenkinsfile"
echo ""
echo "   minikube start --driver=docker"
echo "   kubectl config view --raw > /tmp/kubeconfig"
echo ""

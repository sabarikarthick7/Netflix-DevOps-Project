# 🎬 Netflix Clone — Full DevOps Deployment

> React + Node.js app deployed with Docker, Kubernetes & Jenkins CI/CD

![Netflix Clone Banner](https://img.shields.io/badge/Netflix-Clone-E50914?style=for-the-badge&logo=netflix&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📐 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CI/CD PIPELINE                              │
│                                                                     │
│  GitHub ──► Jenkins Pipeline                                        │
│               │                                                     │
│               ├─ 1. Clone Repo                                      │
│               ├─ 2. Install Dependencies (parallel)                 │
│               ├─ 3. Run Tests (parallel)                            │
│               ├─ 4. Build React Frontend                            │
│               ├─ 5. Build Docker Images (parallel)                  │
│               ├─ 6. Push to DockerHub                               │
│               └─ 7. Deploy to Kubernetes ─────────────────────────┐│
│                                                                    ││
└────────────────────────────────────────────────────────────────────┼┘
                                                                     │
┌────────────────────────────────────────────────────────────────────▼──┐
│                    KUBERNETES CLUSTER                                   │
│                  Namespace: netflix-clone                               │
│                                                                         │
│  ┌──────────────────────────┐    ┌──────────────────────────────────┐  │
│  │   Frontend Deployment    │    │      Backend Deployment          │  │
│  │   (2 replicas)           │    │      (2 replicas)                │  │
│  │                          │    │                                  │  │
│  │  ┌───────────────────┐   │    │  ┌────────────────────────────┐  │  │
│  │  │  nginx + React    │   │    │  │  Node.js + Express API     │  │  │
│  │  │  Port: 80         │   │    │  │  Port: 5000                │  │  │
│  │  └───────────────────┘   │    │  └────────────────────────────┘  │  │
│  │                          │    │                                  │  │
│  └──────────┬───────────────┘    └─────────────────┬────────────────┘  │
│             │                                      │                    │
│  ┌──────────▼───────────────┐    ┌─────────────────▼────────────────┐  │
│  │  Frontend Service        │    │  Backend Service (ClusterIP)     │  │
│  │  NodePort: 30000         │    │  Port: 5000                      │  │
│  └──────────────────────────┘    └──────────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
              │
              ▼
    http://<NODE-IP>:30000
```

---

## 🛠️ Tech Stack

| Layer         | Technology                            |
|---------------|---------------------------------------|
| **Frontend**  | React 18, CSS3, Nginx                 |
| **Backend**   | Node.js 18, Express.js                |
| **Data**      | In-memory JSON (no external API key needed) |
| **Container** | Docker, Docker Compose                |
| **Orchestration** | Kubernetes (Minikube / any cluster) |
| **CI/CD**     | Jenkins Pipeline                      |
| **Registry**  | DockerHub                             |
| **OS**        | Ubuntu 22.04 LTS                      |

---

## 📁 Project Structure

```
Netflix-DevOps-Project/
├── frontend/                       # React.js Application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js / .css    # Netflix-style navbar
│   │   │   ├── Banner.js / .css    # Hero banner section
│   │   │   ├── MovieRow.js / .css  # Horizontal scrollable rows
│   │   │   ├── MovieCard.js / .css # Movie card with hover popup
│   │   │   ├── Footer.js / .css
│   │   │   └── LoadingScreen.js / .css
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── Dockerfile                  # Multi-stage: Node build → Nginx serve
│   ├── nginx.conf                  # Nginx config with SPA routing
│   └── package.json
│
├── backend/                        # Node.js Express API
│   ├── src/
│   │   ├── server.js               # Express server
│   │   └── movies.js               # Static movie data (no API key!)
│   ├── Dockerfile                  # Multi-stage: builder → production
│   └── package.json
│
├── docker/
│   └── docker-compose.yml          # Local dev orchestration
│
├── kubernetes/
│   ├── namespace.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   └── frontend-service.yaml
│
├── jenkins/
│   ├── Jenkinsfile                 # Full CI/CD pipeline (9 stages)
│   └── setup-jenkins.sh           # One-click Jenkins install script
│
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | ≥ 18 | `apt install nodejs` |
| Docker | ≥ 24 | `apt install docker.io` |
| kubectl | latest | see below |
| Minikube | latest | see below |
| Jenkins | LTS | see below |

---

## Option A: Run Locally with Docker Compose

```bash
# 1. Clone the project
git clone https://github.com/YOUR_USERNAME/Netflix-DevOps-Project.git
cd Netflix-DevOps-Project

# 2. Build and start all services
cd docker
docker-compose up --build -d

# 3. Open in browser
#    Frontend: http://localhost:3000
#    Backend API: http://localhost:5000/api/movies
```

### Stop services
```bash
docker-compose down
```

---

## Option B: Run in Kubernetes (Minikube)

### Step 1 — Install Tools
```bash
# Run automated setup script
chmod +x jenkins/setup-jenkins.sh
sudo ./jenkins/setup-jenkins.sh
```

### Step 2 — Start Minikube
```bash
minikube start --driver=docker --memory=4096 --cpus=2
minikube status
```

### Step 3 — Build & Push Docker Images
```bash
# Set your DockerHub username
export DOCKERHUB_USERNAME=your_dockerhub_username

# Login to DockerHub
docker login

# Build backend
cd backend
docker build -t $DOCKERHUB_USERNAME/netflix-backend:latest .
docker push $DOCKERHUB_USERNAME/netflix-backend:latest
cd ..

# Build frontend
cd frontend
docker build \
  --build-arg REACT_APP_API_URL=http://netflix-backend-service:5000 \
  -t $DOCKERHUB_USERNAME/netflix-frontend:latest .
docker push $DOCKERHUB_USERNAME/netflix-frontend:latest
cd ..
```

### Step 4 — Update Image Names in K8s YAMLs
```bash
# Replace YOUR_DOCKERHUB_USERNAME in YAML files
sed -i "s/YOUR_DOCKERHUB_USERNAME/$DOCKERHUB_USERNAME/g" kubernetes/backend-deployment.yaml
sed -i "s/YOUR_DOCKERHUB_USERNAME/$DOCKERHUB_USERNAME/g" kubernetes/frontend-deployment.yaml
```

### Step 5 — Deploy to Kubernetes
```bash
# Create namespace
kubectl apply -f kubernetes/namespace.yaml

# Deploy backend
kubectl apply -f kubernetes/backend-deployment.yaml
kubectl apply -f kubernetes/backend-service.yaml

# Deploy frontend
kubectl apply -f kubernetes/frontend-deployment.yaml
kubectl apply -f kubernetes/frontend-service.yaml
```

### Step 6 — Verify Deployment
```bash
# Check all pods are Running
kubectl get pods -n netflix-clone

# Check services
kubectl get services -n netflix-clone

# Watch rollout
kubectl rollout status deployment/netflix-frontend -n netflix-clone
kubectl rollout status deployment/netflix-backend  -n netflix-clone
```

### Step 7 — Access the Application
```bash
# Get Minikube IP
minikube ip
# Example output: 192.168.49.2

# Open in browser:
# http://192.168.49.2:30000

# OR use Minikube service tunnel:
minikube service netflix-frontend-service -n netflix-clone --url
```

---

## Option C: Jenkins CI/CD Pipeline

### Step 1 — Configure Jenkins
1. Open Jenkins: `http://localhost:8080`
2. Go to **Manage Jenkins → Credentials → System → Global**
3. Add these credentials:

| Kind | ID | Value |
|------|----|-------|
| Secret text | `DOCKERHUB_USERNAME` | your DockerHub username |
| Secret text | `DOCKERHUB_PASSWORD` | your DockerHub password |
| Secret file | `KUBECONFIG` | upload `~/.kube/config` |

### Step 2 — Install Jenkins Plugins
In **Manage Jenkins → Plugins**, install:
- Pipeline
- Git
- Docker Pipeline
- AnsiColor
- Credentials Binding

### Step 3 — Create Pipeline Job
1. **New Item → Pipeline**
2. Name: `Netflix-Clone-Pipeline`
3. In Pipeline section:
   - Definition: **Pipeline script from SCM**
   - SCM: **Git**
   - Repository URL: `https://github.com/YOUR_USERNAME/Netflix-DevOps-Project.git`
   - Script Path: `jenkins/Jenkinsfile`
4. Save and click **Build Now**

### Pipeline Stages
```
📥 Clone Repository        → checkout code from GitHub
📦 Install Dependencies    → npm ci (parallel: frontend + backend)
🧪 Run Tests               → npm test (parallel)
🔨 Build Frontend          → npm run build (React production build)
🔑 Docker Login            → authenticate to DockerHub
🐳 Build Docker Images     → docker build (parallel)
📤 Push to DockerHub       → docker push both images
☸️  Deploy to Kubernetes    → kubectl apply all manifests
✅ Verify Deployment       → kubectl get pods/services
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/api/movies` | All movies data |
| GET | `/api/movies/featured` | Banner/featured movie |
| GET | `/api/movies/trending` | Trending movies |
| GET | `/api/movies/netflixOriginals` | Netflix originals |
| GET | `/api/movies/actionAdventure` | Action movies |
| GET | `/api/movies/comedies` | Comedies |
| GET | `/api/movies/documentaries` | Documentaries |
| GET | `/api/movie/:id` | Single movie by ID |

---

## 🎨 UI Features

- **Netflix-style Navbar** — scrolling state, profile dropdown, search bar
- **Hero Banner** — full-viewport background, animated, play/info buttons, mute toggle
- **Movie Rows** — horizontal scroll with arrow buttons, 5 themed rows
- **Movie Card Hover** — scale popup with match %, play, like, add-to-list buttons
- **Loading Screen** — Netflix-style red progress bar animation
- **Footer** — links grid, language selector
- **Responsive** — works on mobile, tablet, desktop

---

## 🔧 Useful Commands

```bash
# Docker
docker-compose -f docker/docker-compose.yml logs -f
docker ps
docker exec -it netflix-backend sh

# Kubernetes
kubectl get all -n netflix-clone
kubectl describe pod <pod-name> -n netflix-clone
kubectl logs <pod-name> -n netflix-clone
kubectl delete namespace netflix-clone    # teardown

# Minikube
minikube dashboard
minikube tunnel    # for LoadBalancer services
```

---

## 📸 Expected Output

```
$ kubectl get pods -n netflix-clone
NAME                                READY   STATUS    RESTARTS   AGE
netflix-backend-7d8f9c-xk2p9       1/1     Running   0          2m
netflix-backend-7d8f9c-mb4n7       1/1     Running   0          2m
netflix-frontend-5b6c8d-lp3q1      1/1     Running   0          90s
netflix-frontend-5b6c8d-wr9k2      1/1     Running   0          90s

$ kubectl get services -n netflix-clone
NAME                       TYPE        CLUSTER-IP      PORT(S)        AGE
netflix-backend-service    ClusterIP   10.96.45.12     5000/TCP       2m
netflix-frontend-service   NodePort    10.96.123.45    80:30000/TCP   90s
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

MIT License — Built as a DevOps learning project.

---

**Built with ❤️ using React · Node.js · Docker · Kubernetes · Jenkins**

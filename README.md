# 📍 Live Location App

A real-time live location tracking application built with **Node.js**, **TypeScript**, **Socket.IO**, **Apache Kafka**, and **Express**. It streams location data from clients through Kafka and pushes updates to connected users in real time via WebSockets.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Language | TypeScript |
| Web Framework | Express v5 |
| Real-time | Socket.IO |
| Message Broker | Apache Kafka (KafkaJS) |
| Containerization | Docker / Docker Compose |
| Package Manager | pnpm |

---

## 📁 Project Structure

```
Live-Location-App/
├── public/               # Static frontend files (HTML/CSS/JS)
├── src/                  # TypeScript source code
├── docker-compose.yml    # Kafka broker setup
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)
- [Docker](https://www.docker.com/) & Docker Compose

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shriyansh10/Live-Location-App.git
cd Live-Location-App
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the Kafka broker

```bash
docker compose up -d
```

This spins up a single-node Apache Kafka broker (KRaft mode, no Zookeeper) on port `9092` with 3 partitions.

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
KAFKA_BROKER=localhost:9092
```

Adjust values as needed.

### 5. Build and run

**Development (with auto-rebuild):**
```bash
pnpm dev
```

**Production:**
```bash
pnpm build
pnpm start
```

### 6. Open the app

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ How It Works

1. A **client** (browser) shares its geolocation and emits it via **Socket.IO**.
2. The **Express server** receives the location event and publishes it to a **Kafka topic**.
3. A **Kafka consumer** reads from the topic and broadcasts the location update to all connected clients via Socket.IO.
4. The **frontend** renders the updated location in real time (e.g., on a map).

```
Browser → Socket.IO → Express → Kafka Producer → Kafka Topic
                                                        ↓
                                              Kafka Consumer → Socket.IO → All Browsers
```

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Compile TypeScript and watch for changes |
| `pnpm build` | Compile TypeScript to `dist/` |
| `pnpm start` | Run the compiled app from `dist/` |

---

## 🐳 Docker Details

The `docker-compose.yml` sets up a **KRaft-mode Kafka broker** (no Zookeeper required):

- **Image:** `apache/kafka:latest`
- **Port:** `9092`
- **Partitions:** 3
- **Replication factor:** 1 (single-node)

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

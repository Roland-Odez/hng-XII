# Public API for HNG12 Task 0

## 📌 Project Description
This project provides a public API that returns the following information in **JSON format**:
- 📧 **Registered Email:** Used to register on the **HNG12 Slack workspace**.
- 🕒 **Current DateTime:** An **ISO 8601** formatted timestamp.
- 🔗 **GitHub URL:** The repository for this project.

## 🚀 Live API Endpoint
```plaintext
GET <your-deployment-url>
```

## 📡 JSON Response Format
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## 🛠 Technology Stack
- **Programming Language:** Node.js (TypeScript)
- **Framework:** Express.js
- **Deployment:** Hosted on a netlify
- **CORS Handling:** Configured to allow all origins

## 🏗️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run Locally
```sh
npm run dev
```

### 4️⃣ Build & Start (Production)
```sh
npm run build
npm start
```

## 🌍 API Documentation
### 📌 GET / (Root Endpoint)
#### 🔹 Request
- Method: **GET**
- URL: **`/`**

#### 🔹 Response (200 OK)
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## 🔗 Relevant Links
For more developers, check out **[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)**.

---
💡 **This project meets all the acceptance criteria:**
✅ Accepts GET requests ✅ Returns JSON ✅ Uses ISO 8601 format ✅ Provides clear documentation ✅ Public repository

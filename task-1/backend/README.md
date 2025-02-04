# 🧮 Number Classification API  

## 📌 Project Description  
The **Number Classification API** is a RESTful service that analyzes a given number and returns its mathematical properties, such as:  
- 🔢 **Prime Status** – Determines if the number is prime.  
- 🎯 **Perfect Number Check** – Checks if the number is a perfect number.  
- 🏆 **Armstrong Number Verification** – Identifies Armstrong numbers.  
- 🔄 **Parity (Odd/Even)** – Determines if the number is odd or even.  
- ➕ **Digit Sum Calculation** – Computes the sum of the number’s digits.  
- 🎲 **Fun Fact** – Fetches an interesting fact about the number from the [Numbers API](http://numbersapi.com/#42).  

## 🚀 Live API Endpoint  
```plaintext
GET https://backend-task-1-sepia.vercel.app/api/classify-number?number=<your_number>
```  

## 📡 JSON Response Format  
### ✅ Success (200 OK)  
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```  

### ❌ Error (400 Bad Request)  
```json
{
  "number": "invalid",
  "error": true
}
```  

## 🛠 Technology Stack  
- **Programming Languages**: Node.js (TypeScript)
- **Deployment Platforms**: Vercel  
- **CORS Handling**: Configured to allow cross-origin requests  

## 🏗️ Installation & Setup  
### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/Roland-Odez/hng-XII.git
cd task-1/backend
```  

### 2️⃣ Install Dependencies  
```sh
npm install  # for Node.js
```  

### 3️⃣ Run Locally  
```sh
npm run dev  # for Node.js  
```  

## 🌍 API Documentation  
### 📌 GET /api/classify-number?number=10
#### 🔹 Request  
- Method: **GET**  
- Query Parameter: **`number`** (integer)  

#### 🔹 Response (200 OK)  
```json
{
  "number": 10,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["even"],
  "digit_sum": 1,
  "fun_fact": "10 is the base of our decimal system."
}
```  

## 🚀 Deployment Guide  
### Deploy on Vercel (for Node.js)  
```sh
npm install -g vercel  
vercel --prod  
```  
## 📌 Additional Notes  
- Uses the **Numbers API** for fun facts.  
- The **`properties`** field may contain:  
  - `['armstrong', 'odd']` → Armstrong & odd  
  - `['armstrong', 'even']` → Armstrong & even  
  - `['odd']` → Odd but not Armstrong  
  - `['even']` → Even but not Armstrong  

### 🎯 Good luck! 🚀  
✅ Accepts GET requests ✅ Returns JSON ✅ Provides clear documentation ✅ Public repository
# Job Task SvelteKit - Person Manager (Backend)

This is the **backend API** for the Person Manager project, built with **Node.js**, **Express**, and **MongoDB**. It provides a RESTful API to perform full CRUD operations on person records.

---

## Features

- **RESTful API** with endpoints for Create, Read, Update, Delete (CRUD) operations.
- **MongoDB** for persistent storage.
- **CORS enabled** for trusted origins.
- **Centralized Error Handling**.
- **Request Logging** (optional using `morgan` if added).
- **Configurable via `.env` file**.

---

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [CORS](https://www.npmjs.com/package/cors)
- [MongoDB Node Driver](https://www.npmjs.com/package/mongodb)

---

## Project Structure

src/
├─ index.js # Main server file
├─ routes/ # Optional: separate route files
├─ controllers/ # Optional: logic for CRUD
.env # Environment variables

yaml
Copy code

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Maksudur7/SvelteKit-backend.git
cd sveltekit-backend
Install dependencies

bash
Copy code
npm install
Create a .env file

env
Copy code
DB_NAME = maksudurrahamanmishu7_db_user
DB_PASSWORD = WsjWoiktLwTSXjE6
PORT=5000
Make sure to replace <your_mongodb_username> and <your_mongodb_password> with your MongoDB Atlas credentials or local MongoDB credentials.

Running the Server
bash
Copy code
npm start
The backend will run on http://localhost:5000


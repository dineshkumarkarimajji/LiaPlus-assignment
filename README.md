# User Feedback System

This is a Full Stack User Feedback System built using React.js for the frontend, Node.js + Express.js for the backend, and MongoDB as the database.

It allows users to submit feedback through a form, stores the feedback securely, and displays it on a dashboard with filtering and sorting options.

---

## 🛠 Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB (using Mongoose)
- Additional Packages: Axios, CORS, Body-Parser

---

## ✨ Features

- Submit user feedback through a form.
- Feedback includes: username, email, feedback text, category, timestamp.
- View all feedback on a dashboard.
- Filter and sort feedback by username or submission date.
- Responsive and clean UI.
- Extensible for future improvements like analytics or feedback categorization.

---

## 🚀 How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

Setup Backend

```
cd backend
npm install
```
Start Backend Server
```
npm start
```

Setup Frontend

```
cd frontend
npm install
npm start
```
✅ React app will run at http://localhost:3000.


🌎 API Endpoints
Method | Endpoint | Description
POST | /feedback | Submit new user feedback
GET | /feedback | Retrieve all user feedback

📚 Project Structure
Liaplus/
     Frontend/
        frontend/           // React frontend app
          src/
            FeedbackForm.js
            FeedbackDashboard.js
            App.js
     backend/            // Node.js backend server
        server.js
        models/Feedback.js (optional)

📈 Architecture Overview
User fills and submits feedback via the React form.

Frontend sends a POST request to the backend server.

Backend server saves feedback into MongoDB.

Dashboard fetches all feedback using GET API and displays it.





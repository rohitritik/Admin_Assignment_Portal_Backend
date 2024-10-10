# Admin Assignment Portal

A platform that allows users to submit assignments and admins to review, accept, or reject them.

## Table of Contents
- [Project Setup](#project-setup)
- [User API Endpoints](#user-api-endpoints)
- [Admin API Endpoints](#admin-api-endpoints)
- [Deployment on Render](#deployment-on-render)
- [About the Project](#about-the-project)

---

## Project Setup

Follow these steps to set up the project:

1. **Download and Open the Code**: Download this repository and open it in VS Code.
2. **Install Node Modules**: Run the command below to install dependencies.
    ```bash
    npm install
    ```
3. **Create Configuration File**:
    - Create a folder named `config`, and inside it, create a file called `config.env`.
    - Add the following content to `config.env`:
    ```bash
    PORT=4000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.jt9vn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    FRONTEND_URL=http://localhost:3000
    JWT_SECRET_KEY=dxcfgvjskdcdsvvdxds
    JWT_EXPIRE=7d
    COOKIE_EXPIRE=5
    ```

4. **Run the Project**:
    ```bash
    npm start
    ```

5. **Test API Endpoints**:
   - Use Postman to test all the APIs listed below.
   - **Note**: You can install the Postman extension in VS Code, create a collection, and add requests.

---

## User API Endpoints

### User Registration
- **Endpoint**: `/api/v1/user/register`
- **Method**: `POST`
- **Payload**:
    ```json
    {
      "name": "Your Name",
      "email": "your-email@example.com",
      "phone": "1234567890",
      "password": "yourpassword",
      "role": "User" // or "Admin"
    }
    ```
    
### User Login
- **Endpoint**: `/api/v1/user/login`
- **Method**: `POST`
- **Payload**:
    ```json
    {
      "email": "your-email@example.com",
      "password": "yourpassword",
      "role": "User" // or "Admin"
    }
    ```

### Upload Assignment
- **Endpoint**: `/api/v1/user/upload`
- **Method**: `POST`
- **Payload**:
    ```json
    {
      "userId": "YourUserId",
      "task": "Your Task Description",
      "admin": "Admin Name" // Name of the admin to whom the assignment is submitted
    }
    ```

### Fetch All Admins
- **Endpoint**: `/api/v1/user/admin`
- **Method**: `GET`

---

## Admin API Endpoints

### Fetch Assignments by Admin
- **Endpoint**: `/api/v1/assignment/assignments?admin=Alok`
- **Method**: `GET`
- **Description**: Fetches assignments submitted by users to the specified admin.

### Accept Assignment
- **Endpoint**: `/api/v1/assignment/assignments/:id/accept`
- **Method**: `POST`
- **Example URL**: `/api/v1/assignment/assignments/6707b09a7676eb4bb1f963dd/accept`
- **Description**: Changes the status of the assignment from pending to accepted.

### Reject Assignment
- **Endpoint**: `/api/v1/assignment/assignments/:id/reject`
- **Method**: `POST`
- **Example URL**: `/api/v1/assignment/assignments/67078455b052782b86005a07/reject`
- **Description**: Changes the status of the assignment from pending to rejected.

---

## Deployment on Render

Your backend server is deployed on Render at the URL:
- **[https://admin-assignment-portal-backend.onrender.com](https://admin-assignment-portal-backend.onrender.com)**

### Steps for Production
1. Replace all instances of `http://localhost:4000` with the deployed URL:
    ```
    https://admin-assignment-portal-backend.onrender.com
    ```
2. Make sure your front end is set to communicate with the live server URL.

---

## About the Project

### Admin Assignment Portal

The **Admin Assignment Portal** allows:

- **Users** to submit assignments.
- **Admins** to review, accept, or reject assignments.

### Key Concepts

- **Admin**: Refers to administrators who manage and review assignments.
- **Assignment**: Tasks or submissions made by users.
- **Portal**: The web interface where all interactions happen.

In simple terms, it's a platform where admins can log in, view assignments, and either accept or reject them. It highlights the role of admins in managing the assignment process.

---

### For More Information
Feel free to open an issue or contribute to this project on [GitHub](https://github.com/rohitritik/Admin_Assignment_Portal_Backend).


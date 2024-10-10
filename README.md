
(mandatory)Run Server Command - npm start


User API Endpoints:---------

User Registration
1.Endpoint: http://localhost:4000/api/v1/user/register    ||  https://admin-assignment-portal-backend.onrender.com/api/v1/user/register
2.Method: POST
3.Payload:{
  "name": "Your Name",
  "email": "your-email@example.com",
  "phone": "1234567890",
  "password": "yourpassword",
  "role": "User"  // or "Admin" for admin registration
}


User Login
1.Endpoint: http://localhost:4000/api/v1/user/login     ||  https://admin-assignment-portal-backend.onrender.com/api/v1/user/login
2.Method: POST
3.Payload:{
  "email": "your-email@example.com",
  "password": "yourpassword",
  "role": "User" // or "Admin"
}


Upload Assignment
1.Endpoint: http://localhost:4000/api/v1/user/upload     ||  https://admin-assignment-portal-backend.onrender.com/api/v1/user/upload   
2.Method: POST
3.Payload:{
  "userId": "YourUserId",
  "task": "Your Task Description",
  "admin": "Admin Name" // Name of the admin to whom the assignment is submitted
}


Fetch All Admins
1.Endpoint: http://localhost:4000/api/v1/user/admin     ||  https://admin-assignment-portal-backend.onrender.com/api/v1/user/admin
2.Method: GET

----------------------------------------------------------------

Admin API Endpoints :---------------------------------------


Fetch Assignments by Admin
1.Endpoint: http://localhost:4000/api/v1/assignment/assignments?admin=Alok   ||   https://admin-assignment-portal-backend.onrender.com/api/v1/assignment/assignments?admin=Alok
2.Method: GET
3.Description: Fetches assignments submitted by users to the specified admin.


Accept Assignment
1.Endpoint: http://localhost:4000/api/v1/assignment/assignments/:id/accept    ||   https://admin-assignment-portal-backend.onrender.com/api/v1/assignment/assignments/:id/accept
2.Method: POST
3.URL Example: http://localhost:4000/api/v1/assignment/assignments/6707b09a7676eb4bb1f963dd/accept
4.Description: Changes the status of the assignment from pending to accepted.


Reject Assignment
1.Endpoint: http://localhost:4000/api/v1/assignment/assignments/:id/reject    ||   https://admin-assignment-portal-backend.onrender.com/api/v1/assignment/assignments/:id/reject
2.Method: POST
3.URL Example: http://localhost:4000/api/v1/assignment/assignments/67078455b052782b86005a07/reject
4.Description: Changes the status of the assignment from pending to rejected.

------------------------------------------------------------------------------------------------------------------------



Deployment on Render
1.Your backend server is deployed on Render at the URL https://admin-assignment-portal-backend.onrender.com.
2.Ensure that your front end is set to communicate with this live server URL for production.
3.http://localhost:4000 replace url(after deploy backend) --> https://admin-assignment-portal-backend.onrender.com  (use like- https://admin-assignment-portal-backend.onrender.com/api/v1/user/admin)


-----------------------------------------------------------------------------------------------------------------


About - Admin Assignment Portal

In Short - users to submit assignments and admins to review, accept, or reject them.

In this context:

Admin: Refers to the administrators who have access to manage and review assignments.
Assignment: Refers to the tasks or submissions made by users.
Portal: Refers to the web interface where all this interaction happens.

In simple terms, it's a platform where admins can log in, view assignments, and either accept or reject them. It highlights the role of admins in managing the assignment process.

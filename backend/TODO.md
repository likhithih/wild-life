# TODO: Create Backend for User Signup and Login

- [x] Install bcryptjs dependency
- [x] Create backend/models/User.js with User schema (name, email, password)
- [x] Create backend/controller/authController.js with signup function (hash password, save user)
- [x] Create backend/routes/auth.js with POST /signup route
- [x] Update backend/index.js to use auth routes and add express.json() middleware
- [ ] Test the signup endpoint
- [x] Add login function to backend/controller/authController.js (check email, compare password)
- [x] Add POST /login route to backend/routes/auth.js
- [ ] Test the login endpoint
- [x] Implement login form in frontend/src/pages/Login.jsx (add state, handleSubmit, connect inputs, error display)

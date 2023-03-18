# 1st sprint
# API Requirements
To create a login-system for the 1st version of the project, A client can sign up in the frontend and have his info stored in the backend . the client will sign in afterwards and we can send  the client a verification email using nodemailer . the client will be able to sign in afterwards.

## API Endpoints

#### Users
#### CRUD routes
- [x] get_user_data  [token required]: 'users/' [GET]
<!-- - Show [token required] : 'Users/:id' [GET] -->
- [x] Create [token created] : 'users/' [POST] 
- [x] delete [user deleted] : 'users/' [DELETE] 
- [x] edit [user deleted] : 'users/edit' [PATCH] 
#### Login & Logout routes
- [x] login  [return a token] : 'users/login'  [GET]
- [x] logout [removes a token] : 'Users/logout'[POST] 
- [x] logoutFromAllDevices[removes all tokens] : 'Users/logoutFromAllDevices'[POST]
#### Email routes
- [x] verifyEmail [uses a token] : 'confirmation/:token'  [GET]

- - - -
### Doctors
- [x] Index : 'Doctors/' [GET]
- [x] Show [token required] : 'doctor/:speciality/:area ?title' [GET]
- [x] 
## Data Shapes
### users
- id :  SERIAL PRIMARY KEY 
- firstName : VARCHAR
- lastName : VARCHAR
- password : VARCHAR encrypted using bcrypt
- dob : DATE
- gender : VARCHAR 
- email : VARCHAR 
- mobile number : VARCHAR
- confirmed : Boolean

### Doctors
- id :  SERIAL PRIMARY KEY
- Dname : VARCHAR
- password : VARCHAR encrypted using bcrypt
- dob : DATE
- gender : VARCHAR 
- email : VARCHAR 
- mobile number : VARCHAR
- confirmed : Boolean
- Rating : INTGER
- speciality : VARCHAR
- sub-specialties : VARCHAR
- title :VARCHAR
- area : VARCHAR
- location : VARCHAR
- Fees : INTEGER


       
 
## parts to study
- JWT 
- sequlize
- nodemailer
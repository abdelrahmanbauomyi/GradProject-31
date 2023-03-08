# 1st sprint
# API Requirements
To create a login-system for the 1st version of the project, A client can sign up in the frontend and have his info stored in the backend . the client will sign in afterwards and we can send  the client a verification email using nodemailer . the client will be able to sign in afterwards.

## API Endpoints

#### Users
-                  Index [token required]: 'Users/' [GET]
- Show [token required] : 'Users/:id' [GET]
- Create N[token created] : 'Users/' [POST]


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
- VerfiedEmail : Boolean
- Rating : VARCHAR
- Review : VARCHAR             
 
## parts to study
- JWT 
- sequlize
- nodemailer
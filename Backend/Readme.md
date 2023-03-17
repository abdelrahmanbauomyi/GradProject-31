# 1st sprint
# API Requirements
To create a login-system for the 1st version of the project, A client can sign up in the frontend and have his info stored in the backend . the client will sign in afterwards and we can send  the client a verification email using nodemailer . the client will be able to sign in afterwards.

## API Endpoints

#### Users
- Index [token required]: 'Users/' [GET]
<!-- - Show [token required] : 'Users/:id' [GET] -->
- Create N[token created] : 'Users/' [POST]
- login [return a token] : 'Users/:email && password' 

### Doctors
- Index : 'Doctors/' [GET]
- Show [token required] : 'doctor/:speciality/:area ?title' [GET]
- 
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
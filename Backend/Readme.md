# 1st sprint
# API Requirements
To create a login-system for the 1st version of the project, A client can sign up in the frontend and have his info stored in the backend . the client will sign in afterwards and we can send  the client a verification email using nodemailer . the client will be able to sign in afterwards.

## API Endpoints

### Users
#### CRUD routes
- [x] get_user_data  [token required]: 'users/' [GET]
- [x] Create [token created] : 'users/' [POST] 
- [x] delete [user deleted] : 'users/' [DELETE] 
- [x] edit [user edited] : 'users/edit' [PATCH] 
#### Login & Logout routes
- [x] login  [return a token] : 'users/login'  [GET]
- [x] logout [removes a token] : 'Users/logout'[POST] 
- [x] logoutFromAllDevices[removes all tokens] : 'Users/logoutFromAllDevices'[POST]
#### Email routes
- [x] verifyEmail [uses a token] : 'confirmation/:token'  [GET]

- - - -
### Doctors
#### CRUD routes
- [x] Index : 'doctors/' [GET]
- [x] Search  : 'doctor/searchDoctors' [GET]
- [x] delete [doctor deleted] : 'doctor/' [DELETE] 
- [x] edit [doctor edited] : 'users/edit' [PATCH] 
#### Login & Logout routes
- [x] login  [return a token] : 'doctors/login'  [GET]
- [x] logout [removes a token] : 'doctors/logout'[POST] 
- [x] logoutFromAllDevices[removes all tokens] : 'doctors/logoutFromAllDevices'[POST]
#### Email routes
- [x] verifyEmail [uses a token] : 'confirmation/:token'  [GET]

- - - -
### Booking

- addAppoitments [doctor's token required ] : 'Booking/addAppoitments' [POST] 
- reserveAppoitments [user's token required] : 'Booking/reserveAppoitments' [POST]
- deleteAppoitments [doctor's token required] : 'Booking/delete' [DELETE]
- Show Available :'/booking/available' [GET]
- user history [user's token required] :'/booking/userhistory' [GET]
- doctor history [doctor's token required] : '/booking/doctorhistory' [GET]

- - - -
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

### Booking
- AppoitmentId : SERIAL PRIMARY KEY
- userId : SERIAL PRIMARY KEY REFERENCES User "id" ON DELETE CASCADE ON UPDATE CASCADE
- doctorId : SERIAL PRIMARY KEY REFERENCES Docotr "id" ON DELETE CASCADE ON UPDATE CASCADE
- startTime : DATE
- endTime : DATE
- status : VARCHAR       

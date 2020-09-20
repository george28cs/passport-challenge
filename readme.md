# Passport Authentication

## Use  

### Create User:  

Route: **server/api/auth/sign-up/**  
Method: POST

body:
{  
      email: "user@domain.com",  
      name: "User",  
      password: "password",  
 }


### Create Admin:  

Route: **server/api/auth/sign-up/**  
Method: POST

body:
{  
      email: "admin@domain.com",  
      name: "User",  
      password: "password",  
      isAdmin: true,  
 }

### Sign-In  
Route: **server/api/auth/sign-in/**  
Method: GET  

Postman Options  
*Body:*  
{  
"apiKeyToken": "apiKeyToken_2340u3riwejfdosfjsdjkfbsdjkThisIsaExampleTokenblablabala"  
}

Authorization:
*Type*: Basic Auth  
Username: "username"  
> user@domain.com

Password: "password"
>  password  

Output:  
>{  
  "token": "SessionTokenExample_naodfnosdnfio30iewjwiejwi0rjdfsdnf",  
  "user": {  
  "id": "MongoIDExample_9ueindjdnf",  
  "name": "User",  
  "email": "user@domain.com",  
  }  

## Get User Route
Route: **server/api/user/**  
Method: GET  
Postman Options  
*Authorization*: Token  SessionTokenExample_naodfnosdnfio30iewjwiejwi0rjdfsdnf  

Output: 
> Hello User  

## Get User Route
Route: **server/api/admin/**  
Method: GET
Postman Options  
*Authorization*: Token  SessionTokenExample_naodfnosdnfio30iewjwiejwi0rjdfsdnf  

Output:
> Unauthorized

Only admin route


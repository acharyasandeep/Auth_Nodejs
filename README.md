# Nodejs Authentication

### Express template for authentication using jwt

\
When logging in, jwt token is created using userId and jwt_secret. The token in sent to frontend and it is stored in local storage.

When accessing the protected routes, pass token as Bearer token in the header.

```
headers: {
        Authorization `Bearer ${token}`
    }

```

After validating the token using jwt.verify in the middlware req.userId set by decoding token and control is passed to the desired route.

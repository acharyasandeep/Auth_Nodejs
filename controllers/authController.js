import express from "express";
import jwt from "jsonwebtoken";

//you may want to make login a async function for waiting response from database using await
//but no such thing is done here and a mock user is created so async, await not needed

//create a jwtsecret and expiresIn as environment variables

const login = (req, res, next) => {
  try {
    const user = {
      name: "Sandeep Acharya",
      password: "sandeep",
    };

    const token = jwt.sign(user, "jwtsecretkey", { expiresIn: "2m" });

    //set token in localstorage
    if (token) {
      res.status(200).json({
        token: token,
      });
    } else {
      res.status(500).json({
        message: "Cannot create jwt token",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
      message: "Login Failed!",
    });
  }
};

const getDashboard = (req, res) => {
  res.json({ user: req.user });
};

export { login, getDashboard };

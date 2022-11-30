import express from "express";

import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  let token;

  //send Authorization in header
  /*{
        headers: { 
            Authorization `Bearer ${token}`
        }
    } */
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, "jwtsecretkey", (err, userInfo) => {
        if (err)
          return res
            .status(403)
            .json({ message: "Token is not valid or maybe expired!" });

        req.user = userInfo;
        next();
      });
    } catch (err) {
      res.status(500).json({ message: "Error on authentication", error: err });
    }
  } else {
    return res.status(401).json({ message: "Not authenticated!" });
  }
};

export default authMiddleware;

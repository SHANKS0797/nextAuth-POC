"use server";
import axios from "axios";

export type NewUserCredentials = {
  fname: string;
  lname: string;
  email: string;
  mobNo: string;
  password: string;
  confPassword: string;
};
export type UserCredentials = {
  emailId: string;
  mobNo: "";
  password: string;
  screenSize: "";
  token: "";
  sessionID: "";
};
export const signUp = async (
  credentials: NewUserCredentials,
  screenSize: string
) => {
  const { fname, lname, email, mobNo, password } = credentials;
  const payload = {
    firstName: fname,
    lastName: lname,
    emailId: email,
    mobNo: mobNo,
    password: password,
    screenSize: screenSize,
    sessionId: "",
  };
  const result = await axios.post(
    `${process.env.BASE_URL}/api/Customer/register`,
    payload
  );
  return result;
};

export const userLogin = async (credentials: UserCredentials) => {
  const result = await axios.post(
    `${process.env.BASE_URL}/api/Authentication/authenticate`,
    credentials
  );
  return result.data;
};

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
export type userDetails = {
  addressId: number;
  streetAddress1: string;
  streetAddress2: string;
  addressType: any;
  country: number;
  countryCode: string;
  countryName: any;
  zip: string;
  state: number;
  statecode: string;
  city: string;
  boldUserName: any;
  tagline: any;
  customerType: any;
  metalPreference: string;
  metalBarsInterest: any;
  favCoinRoundSeries: any;
  lastName: string;
  firstName: string;
  mobNo: string;
  emailId: string;
  profilePhoto: string;
  stateName: string;
  isWholeSaler: boolean;
  isSubscribed: boolean;
  isActive: boolean;
  isDefaultAddress: boolean;
  isCustomerSupport: boolean;
  shippingName: any;
  echeckCreditLimit: number;
  allowSplitOrders: boolean;
  allowCombineOrder: boolean;
  accountNumber: any;
  depositoryName: any;
  shippingProfile: any;
  stateType: any;
  isVerified: boolean;
};
export type cartInterface = {
  productId: number;
  productName: string;
  stockSource: string;
  price: number;
  quantity: number;
  image: string;
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

export const getCustomerDetails = async (
  token: string
): Promise<userDetails> => {
  console.log("Token recieved", token);
  const res = await axios.get(
    `${process.env.BASE_URL}/api/Account/GetCustomerDetails`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data.data as userDetails;
};

export const getCustomerCart = async (
  token: string
): Promise<cartInterface[]> => {
  const response = await axios
    .get(
      `${process.env.BASE_URL}/api/ShoppingCart/GetProductFromShoppingCart`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res) => {
      return res.data.data;
    });
  const cartProducts: cartInterface[] = response.map((c: any) => {
    return {
      productId: c.productId,
      productName: c.productName,
      stockSource: c.productInventorySource,
      price: c.price,
      quantity: c.quantity,
      image: c.imagePath,
    };
  });
  return cartProducts;
};

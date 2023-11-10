import Cookies from "js-cookie";
import { getUserData } from "./api";

export default async function getDataUser() {
  try {
    const response = await getUserData();
    const user = await response
    return user;
  } catch (error) {
    console.error("Error trying to load user info", error);
  }
}
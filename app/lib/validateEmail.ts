export const validateEmail = (email: String) => {
  const MAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email.match(MAIL_FORMAT)) {
    return false;
  }

  return true;
}
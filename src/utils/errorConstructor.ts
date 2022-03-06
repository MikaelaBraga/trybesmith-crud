export default (code: string, message: string) => {
  const error = new Error();
  error.name = code;
  error.message = message;
  return error;
};
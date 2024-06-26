// Define the default export of this module
export default function getResponseFromAPI() {
  // Returns a new Promise object
  return new Promise((resolve, reject) => {
    // The executor function of the Promise, which has access to
    // the `resolve` and `reject` functions. This setup is a bit unusual
    // because it simply returns an array containing `resolve` and `reject`
    // functions instead of invoking them based on some condition.
    [resolve, reject];
  });
}

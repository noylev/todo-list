let createHash = require("hash-generator");

// This is a mock request, therefore there is no use of the userDetails
export function getAuthToken(userDetails: {
  userName: string;
  password: string;
}): Promise<string> {
  return Promise.resolve(createHash(16));
}

// This is a mock request to BE that returns true everytime
export function checkIsValidToken(authToken: string): Promise<boolean> {
  return Promise.resolve(true);
}

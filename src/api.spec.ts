import { getAuthToken } from "./api";

describe("getAuthToken function tests", () => {
  const userDetails = {
    userName: "noylevi",
    password: "kyonYb8^ghj!",
  };
  test("should return authToken with length 16", () => {
    const result = getAuthToken(userDetails);
    return result.then((authToken) => expect(authToken).toHaveLength(16));
  });

  test("should generate different authToken each time", () => {
    const result1 = getAuthToken(userDetails);
    const result2 = getAuthToken(userDetails);

    return Promise.all([result1, result2]).then(([authToken1, authToken2]) =>
      expect(authToken1).not.toEqual(authToken2),
    );
  });
});

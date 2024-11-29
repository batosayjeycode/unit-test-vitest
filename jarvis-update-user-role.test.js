import { expect, describe, it } from "vitest";
const Helpers = require("./helpers");

const urlRoleUserUpdate = "https://jarvis-api.sociolla.info/users/";
// const urlRoleUserUpdate = "https://uat-jarvis-api.sociolabs.io/users/";

const arrIds = [
  "66f6917dfcb3170007e544bc",
  "66f9402043614f0008f37f07",
  "67035e7e2752f40008777728",
  "67187b445621ad7d06cdc4d6",
  "67187ba2596d1bf9539f5fba",
  "67187bca7eb5fb3853faf8a5",
  "67187bfa57e83461c0d9aa82",
];

describe(`[${process.env.JARVIS_ENV}] Update role user IDS`, () => {
  const arrUrl = arrIds.map((el) => {
    const newObj = {};
    newObj.url = `${urlRoleUserUpdate}/${el}`;
    newObj.expected = { success: true };
    newObj.user_id = el;
    return newObj;
  });

  it.each(arrUrl)(
    "Update role user _id: $user_id -> $expected",
    async ({ url, expected, user_id }) => {
      try {
        const result = await Helpers.updateDataFromAxios(url, "", {
          role_name: "User Resigned",
          role_id: "674827725265d6e05bb4f2df",
          role_desc: "User Resigned",
        });
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(`Unable to update user _id: ${user_id}`);
      }
    }
  );
});

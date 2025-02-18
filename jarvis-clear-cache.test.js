import { expect, describe, it } from "vitest";
const Helpers = require("./helpers");

const urlClearRedisCache =
  "https://jarvis-api.sociolla.info/user-roles/clear-cache-redis";
// const urlClearRedisCache = "https://uat-jarvis-api.sociolabs.io/user-roles/clear-cache-redis";
// const urlClearRedisCache = "http://localhost:8989/user-roles/clear-cache-redis";

// const roles = [
//   {
//     _id: {
//       $oid: "67b2e0f199e1a725bbf452f9",
//     },
//     user_applied: 1,
//     role_name: "Store Manager SBP & PE3 (Offline Store - ID)",
//     role_desc: "Store Manager SBP (Offline Store - ID)",
//   },
// ]; //coming form database
// const arrParamNew = roles.map((el) => {
//   const param = {
//     country: "id", //id or vn
//     originalUrl: "/v2/order/additional-fields",
//     role: el.role_name,
//   };
//   const paramUrl = new URLSearchParams(param);
//   return paramUrl.toString();
// });

const arrParam = [
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Brand+Innovation+Assistant+04+%28Brand+Innovation+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Brand+Innovation+Assistant+05+%28Brand+Innovation+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Account+Receivable+%28Finance+-+VN%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Store+Manager+SEP+%28Offline+Store+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Store+Manager+SMS+%28Offline+Store+-+ID%29%09",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Store+Manager+XPA+%28Offline+Store+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Store+Manager+SMU+%28Offline+Store+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Senior+Store+Manager+03+%28Offline+Retail+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Senior+Store+Manager+04+%28Offline+Retail+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Senior+Store+Manager+05+%28Offline+Retail+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Senior+Store+Manager+06+%28Offline+Retail+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Senior+Store+Manager+07+%28Offline+Retail+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Store+Manager+XSS+%28Offline+Store+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Training+Manager+%28Service+Excellence+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Tax+Manager+%28Tax+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Product+Manager+%28Finance+System+-+All%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Store+Manager+XPN+%28Offline+Store+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Brand+Innovation+Assistant+06+%28Brand+Innovation+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Retail+Expansion+Team+%28Offline+Retail+-+All%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Store+Manager+XPB+%28Offline+Store+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Store+Manager+SMM+%28Offline+Store+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Store+Manager+SGC+%26+PE2+%28Offline+Store+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Brand+Assistant+15+%28Commerce+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Store+Manager+SBE+%26+PE3+%28Offline+Store+-+ID%29",
  "country=vn&originalUrl=%2Fv2%2Forder%2Fadditional-fields&role=Store+Manager+SBP+%26+PE3+%28Offline+Store+-+ID%29",
];

describe(`[${process.env.JARVIS_ENV}] Clear cache`, () => {
  const arrUrl = arrParam.map((el) => {
    const newObj = {};
    newObj.url = `${urlClearRedisCache}?${el}`;
    newObj.expected = { success: true };
    return newObj;
  });

  it.each(arrUrl)(
    "Clear cache URL: $url -> $expected",
    async ({ url, expected }) => {
      try {
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(`Unable clear cache URL: ${url}`);
      }
    }
  );
});

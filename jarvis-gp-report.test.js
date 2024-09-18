import { expect, describe, it } from "vitest";
const getData = require("./helpers");

describe(`[${process.env.JARVIS_ENV}] Test Concurrent Jarvis GP Report`, () => {
  it.concurrent(
    "Fetch Data GP Report Summary, Filter: default",
    async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await getData(
          "https://jarvis-api.sociolla.info/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-09&t=1725875854913&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand"
        );
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data gp report summary");
      }
    }
  );

  it.concurrent(
    "Fetch Data GP Report Summary, Filter: some filter",
    async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await getData(
          "https://jarvis-api.sociolla.info/v2/gross-profit/summaries?brands[]=alchemist+fragrance&brands[]=saff+%26+co&brands[]=glad2glow&start_date=2024-09-01&end_date=2024-09-04&t=1726124938357&skip=0&limit=10&page=1&length=10&groups[]=brand_type&groups[]=product_purchase_type&groups[]=brand_name&export_label_group_by_option=Brand+Type+%3E%3E+Product+Purchase+Type+%3E%3E+Brand&export_label_filter_option=Brand:+alchemist+fragrance+or+saff+%26+co+or+glad2glow"
        );
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data gp report summary");
      }
    }
  );
});

describe(`[${process.env.JARVIS_ENV}] Test Jarvis GP Report Sort By Column Feature, Filter: default`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-09&t=1725875854913&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand";
  it.each([
    {
      sortByColumn: "NMV BEFORE DISCOUNT AMOUNT",
      url: `${url}&order_by=nmv&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "DISC. BY SOCIOLLA AMOUNT",
      url: `${url}&order_by=total_discount_sociolla&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "DISC. BY SOCIOLLA BRAND",
      url: `${url}&order_by=total_discount_brand&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "VOUCHER AMOUNT",
      url: `${url}&order_by=total_voucher&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE AMOUNT",
      url: `${url}&order_by=net_revenue&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE CONT.",
      url: `${url}&order_by=net_revenue_cont&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "COGS AMOUNT",
      url: `${url}&order_by=cogs&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "SUPPORT PROMO AMOUNT",
      url: `${url}&order_by=total_support_promo&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET COGS AMOUNT",
      url: `${url}&order_by=net_cogs&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "GROSS PROFIT AMOUNT",
      url: `${url}&order_by=gross_margin&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "GROSS PROFIT CONT.",
      url: `${url}&order_by=gross_margin_cont&order_by_type=DESC`,
      expected: { success: true },
    },
  ])(
    "GP Report Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch gp report sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

describe.only(`[${process.env.JARVIS_ENV}] Test Jarvis GP Report Sort By Column Feature, Filter: some filter`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/gross-profit/summaries?brands[]=alchemist+fragrance&brands[]=saff+%26+co&brands[]=glad2glow&start_date=2024-09-01&end_date=2024-09-04&t=1726124938357&skip=0&limit=10&page=1&length=10&groups[]=brand_type&groups[]=product_purchase_type&groups[]=brand_name&export_label_group_by_option=Brand+Type+%3E%3E+Product+Purchase+Type+%3E%3E+Brand&export_label_filter_option=Brand:+alchemist+fragrance+or+saff+%26+co+or+glad2glow";
  it.each([
    {
      sortByColumn: "NMV BEFORE DISCOUNT AMOUNT",
      url: `${url}&order_by=nmv&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "DISC. BY SOCIOLLA AMOUNT",
      url: `${url}&order_by=total_discount_sociolla&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "DISC. BY SOCIOLLA BRAND",
      url: `${url}&order_by=total_discount_brand&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "VOUCHER AMOUNT",
      url: `${url}&order_by=total_voucher&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE AMOUNT",
      url: `${url}&order_by=net_revenue&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE CONT.",
      url: `${url}&order_by=net_revenue_cont&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "COGS AMOUNT",
      url: `${url}&order_by=cogs&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "SUPPORT PROMO AMOUNT",
      url: `${url}&order_by=total_support_promo&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET COGS AMOUNT",
      url: `${url}&order_by=net_cogs&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "GROSS PROFIT AMOUNT",
      url: `${url}&order_by=gross_margin&order_by_type=DESC`,
      expected: { success: true },
    },
    {
      sortByColumn: "GROSS PROFIT CONT.",
      url: `${url}&order_by=gross_margin_cont&order_by_type=DESC`,
      expected: { success: true },
    },
  ])(
    "GP Report Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch gp report sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

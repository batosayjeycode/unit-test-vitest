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

describe.only(`[${process.env.JARVIS_ENV}] Test Jarvis GP Report Sort By Column Feature`, () => {
  it.each([
    {
      sortByColumn: "NMV BEFORE DISCOUNT AMOUNT",
      url: "http://localhost:8989/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-17&t=1726570636333&sort=-nmv&order_by=nmv&order_by_type=DESC&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand",
      expected: { success: true },
    },
    {
      sortByColumn: "DISC. BY SOCIOLLA AMOUNT",
      url: "http://localhost:8989/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-17&t=1726570636333&sort=-total_discount_sociolla&order_by=total_discount_sociolla&order_by_type=DESC&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand",
      expected: { success: true },
    },
    {
      sortByColumn: "DISC. BY SOCIOLLA BRAND",
      url: "http://localhost:8989/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-17&t=1726570636333&sort=-total_discount_brand&order_by=total_discount_brand&order_by_type=DESC&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand",
      expected: { success: true },
    },
    {
      sortByColumn: "VOUCHER AMOUNT",
      url: "http://localhost:8989/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-17&t=1726570636333&sort=-total_voucher&order_by=total_voucher&order_by_type=DESC&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand",
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE AMOUNT",
      url: "http://localhost:8989/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-17&t=1726570636333&sort=-net_revenue&order_by=net_revenue&order_by_type=DESC&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand",
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE CONT.",
      url: "http://localhost:8989/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-17&t=1726570636333&sort=-net_revenue_cont&order_by=net_revenue_cont&order_by_type=DESC&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand",
      expected: { success: true },
    },
    {
      sortByColumn: "COGS AMOUNT",
      url: "http://localhost:8989/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-17&t=1726570636333&sort=-cogs&order_by=cogs&order_by_type=DESC&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand",
      expected: { success: true },
    },
    {
      sortByColumn: "SUPPORT PROMO AMOUNT",
      url: "http://localhost:8989/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-17&t=1726570636333&sort=-total_support_promo&order_by=total_support_promo&order_by_type=DESC&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand",
      expected: { success: true },
    },
    {
      sortByColumn: "NET COGS AMOUNT",
      url: "http://localhost:8989/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-17&t=1726570636333&sort=-net_cogs&order_by=net_cogs&order_by_type=DESC&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand",
      expected: { success: true },
    },
    {
      sortByColumn: "GROSS PROFIT AMOUNT",
      url: "http://localhost:8989/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-17&t=1726570636333&sort=-gross_margin&order_by=gross_margin&order_by_type=DESC&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand",
      expected: { success: true },
    },
    {
      sortByColumn: "GROSS PROFIT CONT.",
      url: "http://localhost:8989/v2/gross-profit/summaries?start_date=2024-09-01&end_date=2024-09-17&t=1726570636333&sort=-gross_margin_cont&order_by=gross_margin_cont&order_by_type=DESC&skip=0&limit=10&page=1&length=10&groups[]=brand_name&export_label_group_by_option=Brand",
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

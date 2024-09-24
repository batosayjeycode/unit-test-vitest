import { expect, describe, it } from "vitest";
const Helpers = require("./helpers");

const arrColumn = [
  {
    sortByColumn: "NMV BEFORE DISCOUNT AMOUNT",
    field: "nmv",
    expected: { success: true },
  },
  {
    sortByColumn: "DISC. BY SOCIOLLA AMOUNT",
    field: "total_discount_sociolla",
    expected: { success: true },
  },
  {
    sortByColumn: "DISC. BY SOCIOLLA BRAND",
    field: "total_discount_brand",
    expected: { success: true },
  },
  {
    sortByColumn: "VOUCHER AMOUNT",
    field: "total_voucher",
    expected: { success: true },
  },
  {
    sortByColumn: "NET REVENUE AMOUNT",
    field: "net_revenue",
    expected: { success: true },
  },
  {
    sortByColumn: "NET REVENUE CONT.",
    field: "net_revenue_cont",
    expected: { success: true },
  },
  {
    sortByColumn: "COGS AMOUNT",
    field: "cogs",
    expected: { success: true },
  },
  {
    sortByColumn: "SUPPORT PROMO AMOUNT",
    field: "total_support_promo",
    expected: { success: true },
  },
  {
    sortByColumn: "NET COGS AMOUNT",
    field: "net_cogs",
    expected: { success: true },
  },
  {
    sortByColumn: "GROSS PROFIT AMOUNT",
    field: "gross_margin",
    expected: { success: true },
  },
  {
    sortByColumn: "GROSS PROFIT CONT.",
    field: "gross_margin_cont",
    expected: { success: true },
  },
];

describe.only(`[${process.env.JARVIS_ENV}] Test Concurrent Jarvis GP Report`, () => {
  it.concurrent(
    "Fetch Data GP Report Summary, Filter: default",
    async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(
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
        const result = await Helpers.getDataFromAxios(
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

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumn.map((el) => {
      const newObj = { ...el };
      newObj.url = `${url}&order_by=${newObj.field}&order_by_type=DESC`;
      newObj.expected = true;
      return newObj;
    });

    it.each(arrSortByColumnDesc)(
      "Sort By Column: $sortByColumn -> $expected",
      async ({ sortByColumn, field, url, expected }) => {
        try {
          const result = await Helpers.getDataFromAxios(url);
          const data = (result?.data?.data || []).map((el) => {
            return parseFloat(parseFloat(el[field] || 0).toFixed(2));
          });
          const isDesc = Helpers.isDescending(data);
          expect(isDesc).toBe(expected);
        } catch (e) {
          expect(e.message).toBe(
            `Unable to fetch gp report sort by column: ${sortByColumn}`
          );
        }
      }
    );
  });

  describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
    const arrSortByColumnAsc = arrColumn.map((el) => {
      const newObj = { ...el };
      newObj.url = `${url}&order_by=${newObj.field}&order_by_type=ASC`;
      newObj.expected = true;
      return newObj;
    });

    it.each(arrSortByColumnAsc)(
      "Sort By Column: $sortByColumn -> $expected",
      async ({ sortByColumn, field, url, expected }) => {
        try {
          const result = await Helpers.getDataFromAxios(url);
          const data = (result?.data?.data || []).map((el) => {
            return parseFloat(parseFloat(el[field] || 0).toFixed(2));
          });
          const isAsc = Helpers.isAscending(data);
          expect(isAsc).toBe(expected);
        } catch (e) {
          expect(e.message).toBe(
            `Unable to fetch gp report sort by column: ${sortByColumn}`
          );
        }
      }
    );
  });
});

describe(`[${process.env.JARVIS_ENV}] Test Jarvis GP Report Sort By Column Feature, Filter: some filter`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/gross-profit/summaries?brands[]=alchemist+fragrance&brands[]=saff+%26+co&brands[]=glad2glow&start_date=2024-09-01&end_date=2024-09-04&t=1726124938357&skip=0&limit=10&page=1&length=10&groups[]=brand_type&groups[]=product_purchase_type&groups[]=brand_name&export_label_group_by_option=Brand+Type+%3E%3E+Product+Purchase+Type+%3E%3E+Brand&export_label_filter_option=Brand:+alchemist+fragrance+or+saff+%26+co+or+glad2glow";

  describe.skip(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumn.map((el) => {
      const newObj = { ...el };
      newObj.url = `${url}&order_by=${newObj.field}&order_by_type=DESC`;
      newObj.expected = true;
      return newObj;
    });

    it.each(arrSortByColumnDesc)(
      "Sort By Column: $sortByColumn -> $expected",
      async ({ sortByColumn, field, url, expected }) => {
        try {
          const result = await Helpers.getDataFromAxios(url);
          const data = (result?.data?.data || []).map((el) => {
            return parseFloat(parseFloat(el[field] || 0).toFixed(2));
          });
          const isDesc = Helpers.isDescending(data);
          expect(isDesc).toBe(expected);
        } catch (e) {
          expect(e.message).toBe(
            `Unable to fetch gp report sort by column: ${sortByColumn}`
          );
        }
      }
    );
  });

  describe(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
    const arrSortByColumnAsc = arrColumn.map((el) => {
      const newObj = { ...el };
      newObj.url = `${url}&order_by=${newObj.field}&order_by_type=ASC`;
      newObj.expected = true;
      return newObj;
    });

    it.each(arrSortByColumnAsc)(
      "Sort By Column: $sortByColumn -> $expected",
      async ({ sortByColumn, field, url, expected }) => {
        try {
          const result = await Helpers.getDataFromAxios(url);
          const data = (result?.data?.data || []).map((el) => {
            return parseFloat(parseFloat(el[field] || 0).toFixed(2));
          });
          const isAsc = Helpers.isAscending(data);
          expect(isAsc).toBe(expected);
        } catch (e) {
          expect(e.message).toBe(
            `Unable to fetch gp report sort by column: ${sortByColumn}`
          );
        }
      }
    );
  });
});

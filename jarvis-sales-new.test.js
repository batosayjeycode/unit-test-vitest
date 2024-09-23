import { expect, describe, it } from "vitest";
const getData = require("./helpers");

describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales New All Order`, () => {
  describe(`[${process.env.JARVIS_ENV}] Filter Default`, () => {
    const url =
      "http://localhost:8989/v2/orders?value_mode=before_discount&value_type=gross&tax_mode=before-tax&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-23&skip=0&limit=10&tab=all-orders";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await getData(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrSortByColumn = [
      {
        sortByColumn: "ORDER DATE",
        url: `${url}&order_by=order_date&order_by_type=DESC`,
        expected: { success: true },
      },
      {
        sortByColumn: "ORDER ID",
        url: `${url}&order_by=id_order&order_by_type=DESC`,
        expected: { success: true },
      },
    ];

    it.skip.each(arrSortByColumn)(
      "With Sort By Column: $sortByColumn -> $expected",
      async ({ sortByColumn, url, expected }) => {
        try {
          const result = await getData(url);
          expect(result).toMatchObject(expected);
        } catch (e) {
          expect(e.message).toBe(
            `Unable to fetch all order sort by column: ${sortByColumn}`
          );
        }
      }
    );
  });

  describe.skip(`[${process.env.JARVIS_ENV}] All Filter Without Group Platform`, () => {
    const url =
      "http://localhost:8989/v2/orders?business_unit=SBI&single_item_only=1&value_mode=before_discount&manual_order_only=1&find_item=1&is_offlinestore_guest=-1&value_type=gross&tax_mode=before-tax&platform[]=android&store[]=6&order_state[]=Delivered&keywords[]=HWEWZVXVN&month=9&year=2024&brand_type=exclusive&order_type[]=Edit+by+Sociolla&fullfilment_by[]=offline_store-6&cities[]=Jakarta+Selatan&provinces[]=DKI+Jakarta&order_payments[]=BCA+Virtual+Account&start_date=2024-09-01&end_date=2024-09-23&skip=0&limit=10&tab=all-orders&store_mongoid[]=5dde3513fdef3a0ce69f9600&platform_ids[]=1";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await getData(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrSortByColumn = [
      {
        sortByColumn: "ORDER DATE",
        url: `${url}&order_by=order_date&order_by_type=DESC`,
        expected: { success: true },
      },
      {
        sortByColumn: "ORDER ID",
        url: `${url}&order_by=id_order&order_by_type=DESC`,
        expected: { success: true },
      },
    ];

    it.skip.each(arrSortByColumn)(
      "With Sort By Column: $sortByColumn -> $expected",
      async ({ sortByColumn, url, expected }) => {
        try {
          const result = await getData(url);
          expect(result).toMatchObject(expected);
        } catch (e) {
          expect(e.message).toBe(
            `Unable to fetch all order sort by column: ${sortByColumn}`
          );
        }
      }
    );
  });

  describe.skip(`[${process.env.JARVIS_ENV}] All Filter With Group Platform`, () => {
    const url =
      "http://localhost:8989/v2/orders?business_unit=SBI&single_item_only=1&value_mode=before_discount&manual_order_only=1&find_item=1&is_offlinestore_guest=-1&value_type=gross&tax_mode=before-tax&store[]=6&order_state[]=Delivered&keywords[]=HWEWZVXVN&month=9&year=2024&brand_type=exclusive&order_type[]=Edit+by+Sociolla&fullfilment_by[]=offline_store-6&cities[]=Jakarta+Selatan&provinces[]=DKI+Jakarta&group_platform=Marketplace&order_payments[]=BCA+Virtual+Account&start_date=2024-09-01&end_date=2024-09-23&skip=0&limit=10&tab=all-orders&store_mongoid[]=5dde3513fdef3a0ce69f9600";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await getData(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrSortByColumn = [
      {
        sortByColumn: "ORDER DATE",
        url: `${url}&order_by=order_date&order_by_type=DESC`,
        expected: { success: true },
      },
      {
        sortByColumn: "ORDER ID",
        url: `${url}&order_by=id_order&order_by_type=DESC`,
        expected: { success: true },
      },
    ];

    it.skip.each(arrSortByColumn)(
      "With Sort By Column: $sortByColumn -> $expected",
      async ({ sortByColumn, url, expected }) => {
        try {
          const result = await getData(url);
          expect(result).toMatchObject(expected);
        } catch (e) {
          expect(e.message).toBe(
            `Unable to fetch all order sort by column: ${sortByColumn}`
          );
        }
      }
    );
  });
});

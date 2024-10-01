import { expect, describe, it } from "vitest";
const Helpers = require("./helpers");

const arrColumn = [
  {
    sortByColumn: "DATE",
    field: "date",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "ORDER IN SOCIOLLA",
    field: "order_in_sociolla",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "ORDER IN LILLA",
    field: "order_in_lilla",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "ORDER IN EDIT BY SOCIOLLA",
    field: "order_in_edit_by_sociolla",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "ORDER IN FREEBIES",
    field: "order_in_freebies",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "TOTAL IN",
    field: "total_in",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "ORDER OUT SOCIOLLA",
    field: "order_out_sociolla",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "ORDER OUT LILLA",
    field: "order_out_lilla",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "ORDER OUT EDIT BY SOCIOLLA",
    field: "order_out_edit_by_sociolla",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "ORDER OUT FREEBIES",
    field: "order_out_freebies",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "TOTAL OUT",
    field: "total_out",
    dataType: "number",
    expected: { success: true },
  },
];

describe(`[${process.env.JARVIS_ENV}] Test Jarvis B2C Operation Order Tracker`, () => {
  describe(`[${process.env.JARVIS_ENV}] Filter Default`, () => {
    const url =
      "http://localhost:8989/b2c/order-tracker?period_type=daily&section=order-tracker&start_date=2024-10-01&end_date=2024-10-01&skip=0&limit=10";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
      const arrSortByColumnDesc = arrColumn.map((el) => {
        const newObj = { ...el };
        newObj.url = `${url}&order_by=${newObj.field}&order_by_type=DESC`;
        newObj.expected = true;
        return newObj;
      });

      it.each(arrSortByColumnDesc)(
        "Sort By Column: $sortByColumn -> $expected",
        async ({ sortByColumn, field, url, expected, dataType }) => {
          try {
            const result = await Helpers.getDataFromAxios(url);
            const data = (result?.data?.data || []).map((el) => {
              return dataType === "number"
                ? parseFloat(parseFloat(el[field] || 0).toFixed(2))
                : (el[field] || "").toLowerCase();
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
        async ({ sortByColumn, field, url, expected, dataType }) => {
          try {
            const result = await Helpers.getDataFromAxios(url);
            const data = (result?.data?.data || []).map((el) => {
              return dataType === "number"
                ? parseFloat(parseFloat(el[field] || 0).toFixed(2))
                : (el[field] || "").toLowerCase();
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
});

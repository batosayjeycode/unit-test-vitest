import { expect, describe, it } from "vitest";
const Helpers = require("./helpers");

const arrColumn = [
  {
    sortByColumn: "TOTAL QTY (GROSS)",
    field: "total_qty_gross",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "TOTAL QTY (VALID)",
    field: "total_qty_valid",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "TOTAL QTY (NET)",
    field: "total_qty_net",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "TOTAL VALUE GROSS",
    field: "total_value_gross",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "TOTAL VALUE VALID",
    field: "total_value_valid",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "TOTAL VALUE NET",
    field: "total_value_net",
    dataType: "number",
    expected: { success: true },
  },
];

describe(`[${process.env.JARVIS_ENV}] Test Jarvis All Sociolla Sales Summary`, () => {
  describe.only(`[${process.env.JARVIS_ENV}] Filter Default`, () => {
    const url =
      "http://localhost:8989/all-sociolla/sales?value_mode=before-discount&only_has_sales=1&start_date=2024-09-01&end_date=2024-09-26&page=1&length=10&tab=sales-summary";

    const newArrColumn = [
      {
        sortByColumn: "ID PRODUCT",
        field: "id",
        dataType: "number",
        expected: { success: true },
      },
      {
        sortByColumn: "REFERENCE",
        field: "reference",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "PRODUCT NAME",
        field: "product_name",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "BRAND",
        field: "brand",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "CATEGORY",
        field: "category_default",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "CLASSIFICATION",
        field: "product_classification",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumn,
    ];

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
      const arrSortByColumnDesc = newArrColumn.map((el) => {
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
      const arrSortByColumnAsc = newArrColumn.map((el) => {
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

  describe(`[${process.env.JARVIS_ENV}] Some Filter, Group By: Brand`, () => {
    const url =
      "http://localhost:8989/all-sociolla/sales?value_mode=before-discount&view_point=by_brand&only_has_sales=1&start_date=2024-09-01&end_date=2024-09-26&page=1&length=10&tab=sales-summary";

    const newArrColumn = [
      {
        sortByColumn: "BRAND",
        field: "brand",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumn,
    ];

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
      const arrSortByColumnDesc = newArrColumn.map((el) => {
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
      const arrSortByColumnAsc = newArrColumn.map((el) => {
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

  describe(`[${process.env.JARVIS_ENV}] Some Filter, Group By: Default Category`, () => {
    const url =
      "http://localhost:8989/all-sociolla/sales?value_mode=before-discount&view_point=by_default_category&only_has_sales=1&start_date=2024-09-01&end_date=2024-09-26&page=1&length=10&tab=sales-summary";

    const newArrColumn = [
      {
        sortByColumn: "CATEGORY",
        field: "category_default",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumn,
    ];

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
      const arrSortByColumnDesc = newArrColumn.map((el) => {
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
      const arrSortByColumnAsc = newArrColumn.map((el) => {
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

  describe(`[${process.env.JARVIS_ENV}] Some Filter, Group By: Deepest Category`, () => {
    const url =
      "http://localhost:8989/all-sociolla/sales?value_mode=before-discount&view_point=by_deepest_category&only_has_sales=1&start_date=2024-09-01&end_date=2024-09-26&page=1&length=10&tab=sales-summary";

    const newArrColumn = [
      {
        sortByColumn: "PARENT",
        field: "parent",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "CHILD",
        field: "child",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "CATEGORY",
        field: "category",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumn,
    ];

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
      const arrSortByColumnDesc = newArrColumn.map((el) => {
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
      const arrSortByColumnAsc = newArrColumn.map((el) => {
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

  describe(`[${process.env.JARVIS_ENV}] Some Filter, Group By: Order Platform`, () => {
    const url =
      "http://localhost:8989/all-sociolla/sales?value_mode=before-discount&view_point=by_order_platform&only_has_sales=1&start_date=2024-09-01&end_date=2024-09-26&page=1&length=10&tab=sales-summary";

    const newArrColumn = [
      {
        sortByColumn: "ORDER PLATFORM",
        field: "order_platform",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumn,
    ];

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
      const arrSortByColumnDesc = newArrColumn.map((el) => {
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
      const arrSortByColumnAsc = newArrColumn.map((el) => {
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

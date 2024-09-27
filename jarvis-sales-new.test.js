import { expect, describe, it } from "vitest";
const Helpers = require("./helpers");

const arrColumnAllOrder = [
  {
    sortByColumn: "ORDER DATE",
    field: "order_date",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "ORDER ID",
    field: "id_order",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "REFERENCE",
    field: "reference",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "VOUCHER CODE",
    field: "voucher_name_applied",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "PAYMENT",
    field: "order_payment",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "EMAIL",
    field: "email",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "PROVINCE",
    field: "delivery_province",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "CITY",
    field: "delivery_city",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "TOTAL PAID",
    field: "total_order_paid",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "TOTAL VOUCHER AMOUNT",
    field: "total_order_voucher",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "TOTAL SHIPPING",
    field: "total_order_shipping",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "STATUS",
    field: "order_state",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "IS MANUAL ORDER",
    field: "is_manual_order",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "CASHIER",
    field: "offlinestore_cashier",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "BA CODE",
    field: "offlinestore_ba_code",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "EDC TYPE",
    field: "edc_type",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "PLATFORM",
    field: "order_platform",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "SHIPPED DATE",
    field: "shipped_date",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "DELIVERED DATE",
    field: "delivered_date",
    dataType: "string",
    expected: { success: true },
  },
  {
    sortByColumn: "IS RESELLER",
    field: "is_reseller",
    dataType: "string",
    expected: { success: true },
  },
];

const arrColumnTargetSales = [
  {
    sortByColumn: "TARGET SALES",
    field: "target_sales",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "ACTUAL SALES",
    field: "actual_sales",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "DIFF STOCK",
    field: "diff_stock",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "DFF SALES",
    field: "diff_sales",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "ACHIEVEMENT (%)",
    field: "achiev_percentage",
    dataType: "number",
    expected: { success: true },
  },
];

const arrColumnPerPeriod = [];

const arrColumnGiftCardDetail = [
  {
    sortByColumn: "ORDER DATE",
    field: "order_date",
    dataType: "string",
    expected: { success: true },
  },
];

const arrColumnGiftCardDetailHyperlink = [
  {
    sortByColumn: "ORDER DATE",
    field: "order_date",
    dataType: "string",
    expected: { success: true },
  },
];

const arrColumnSummary = [
  {
    sortByColumn: "Qty (Gross)",
    field: "qty_gross",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "Qty (Valid)",
    field: "qty_valid",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "Qty (Net)",
    field: "qty_net",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "Number of Unique Order (Gross)",
    field: "number_of_unique_order_gross",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "Number of Unique Order (Valid)",
    field: "number_of_unique_order_valid",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "Number of Unique Order (Net)",
    field: "number_of_unique_order_net",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "Value Gross",
    field: "value_gross",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "Value Valid",
    field: "value_valid",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "Value Net",
    field: "value_net",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "Voucher (Gross)",
    field: "voucher_prorate_gross",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "Voucher (Valid)",
    field: "voucher_prorate_valid",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "Voucher (Net)",
    field: "voucher_prorate_net",
    dataType: "number",
    expected: { success: true },
  },
];

describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales New Summary`, () => {
  describe(`[${process.env.JARVIS_ENV}] Filter Default With Group By: Product`, () => {
    const url =
      "http://localhost:8989/v2/sales-summaries?view_point=product&value_mode=before_discount&only_has_sales=1&tax_mode=before-tax&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=sales-summary";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrNewColumn = [
      {
        sortByColumn: "ID PRODUCT",
        field: "id_product",
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
        sortByColumn: "BRAND NAME",
        field: "brand_name",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "CATEGORY",
        field: "default_category",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "PRODUCT CLASSIFICATION",
        field: "product_classification",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumnSummary,
      {
        sortByColumn: "TREE CATEGORIES",
        field: "tree_categories",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "PRODUCT PURCHASE TYPE",
        field: "product_purchase_type",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "CONSIGNMENT",
        field: "consignment",
        dataType: "string",
        expected: { success: true },
      },
    ];

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
      const arrSortByColumnDesc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });

  describe(`[${process.env.JARVIS_ENV}] Filter Default With Group By: Brand`, () => {
    const url =
      "http://localhost:8989/v2/sales-summaries?view_point=brand&value_mode=before_discount&only_has_sales=1&tax_mode=before-tax&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=sales-summary";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrNewColumn = [
      {
        sortByColumn: "BRAND NAME",
        field: "brand_name",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumnSummary,
    ];

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
      const arrSortByColumnDesc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });

  describe(`[${process.env.JARVIS_ENV}] Filter Default With Group By: Default Category`, () => {
    const url =
      "http://localhost:8989/v2/sales-summaries?view_point=default_category&value_mode=before_discount&only_has_sales=1&tax_mode=before-tax&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=sales-summary";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrNewColumn = [
      {
        sortByColumn: "CATEGORY",
        field: "default_category",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumnSummary,
    ];

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
      const arrSortByColumnDesc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });
});

describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales New Per Period`, () => {
  describe(`[${process.env.JARVIS_ENV}] Filter Default With Group By: Product`, () => {
    const url =
      "http://localhost:8989/v2/sales-periods?view_point=product&value_mode=before_discount&only_has_sales=1&value_type=gross&tax_mode=before-tax&period_type=yearly&data_display=qty&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=sales-period";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrNewColumn = [
      {
        sortByColumn: "ID PRODUCT",
        field: "id_product",
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
        sortByColumn: "BRAND NAME",
        field: "brand_name",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "CATEGORY",
        field: "default_category",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "TREE CATEGORIES",
        field: "tree_categories",
        dataType: "string",
        expected: { success: true },
      },
      {
        sortByColumn: "PRODUCT CLASSIFICATION",
        field: "product_classification",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumnPerPeriod,
    ];

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
      const arrSortByColumnDesc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });

  describe(`[${process.env.JARVIS_ENV}] Filter Default With Group By: Brand`, () => {
    const url =
      "http://localhost:8989/v2/sales-periods?view_point=brand&value_mode=before_discount&only_has_sales=1&value_type=gross&tax_mode=before-tax&period_type=yearly&data_display=qty&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=sales-period";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrNewColumn = [
      {
        sortByColumn: "BRAND",
        field: "brand",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumnPerPeriod,
    ];

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
      const arrSortByColumnDesc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });

  describe(`[${process.env.JARVIS_ENV}] Filter Default With Group By: Default Category`, () => {
    const url =
      "http://localhost:8989/v2/sales-periods?view_point=default_category&value_mode=before_discount&only_has_sales=1&value_type=gross&tax_mode=before-tax&period_type=yearly&data_display=qty&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=sales-period";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrNewColumn = [
      {
        sortByColumn: "CATEGORY",
        field: "default_category",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumnPerPeriod,
    ];

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
      const arrSortByColumnDesc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });

  describe(`[${process.env.JARVIS_ENV}] Filter Default With Group By: Order Platform`, () => {
    const url =
      "http://localhost:8989/v2/sales-periods?view_point=order_platform&value_mode=before_discount&only_has_sales=1&value_type=gross&tax_mode=before-tax&period_type=yearly&data_display=qty&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=sales-period";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrNewColumn = [
      {
        sortByColumn: "ORDER PLATFORM",
        field: "order_source",
        dataType: "number",
        expected: { success: true },
      },
      ...arrColumnPerPeriod,
    ];

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
      const arrSortByColumnDesc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });
});

describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales New All Order`, () => {
  describe(`[${process.env.JARVIS_ENV}] Filter Default`, () => {
    const url =
      "http://localhost:8989/v2/orders?value_mode=before_discount&value_type=gross&tax_mode=before-tax&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-24&skip=0&limit=10&tab=all-orders";

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
      const arrSortByColumnDesc = arrColumnAllOrder.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrColumnAllOrder.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });

  describe.skip(`[${process.env.JARVIS_ENV}] Some Filter Without Group Platform`, () => {
    const url =
      "http://localhost:8989/v2/orders?business_unit=SBI&single_item_only=1&value_mode=before_discount&manual_order_only=1&find_item=1&is_offlinestore_guest=-1&value_type=gross&tax_mode=before-tax&platform[]=android&store[]=6&order_state[]=Delivered&keywords[]=HWEWZVXVN&month=9&year=2024&brand_type=exclusive&order_type[]=Edit+by+Sociolla&fullfilment_by[]=offline_store-6&cities[]=Jakarta+Selatan&provinces[]=DKI+Jakarta&order_payments[]=BCA+Virtual+Account&start_date=2024-09-01&end_date=2024-09-24&skip=0&limit=10&tab=all-orders&store_mongoid[]=5dde3513fdef3a0ce69f9600&platform_ids[]=1";

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
      const arrSortByColumnDesc = arrColumnAllOrder.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrColumnAllOrder.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });

  describe.skip(`[${process.env.JARVIS_ENV}] Some Filter With Group Platform`, () => {
    const url =
      "http://localhost:8989/v2/orders?business_unit=SBI&single_item_only=1&value_mode=before_discount&manual_order_only=1&find_item=1&is_offlinestore_guest=-1&value_type=gross&tax_mode=before-tax&store[]=6&order_state[]=Delivered&keywords[]=HWEWZVXVN&month=9&year=2024&brand_type=exclusive&order_type[]=Edit+by+Sociolla&fullfilment_by[]=offline_store-6&cities[]=Jakarta+Selatan&provinces[]=DKI+Jakarta&group_platform=Marketplace&order_payments[]=BCA+Virtual+Account&start_date=2024-09-01&end_date=2024-09-24&skip=0&limit=10&tab=all-orders&store_mongoid[]=5dde3513fdef3a0ce69f9600";

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
      const arrSortByColumnDesc = arrColumnAllOrder.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrColumnAllOrder.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });

  describe.skip(`[${process.env.JARVIS_ENV}] Filter Default With Business Unit Offline`, () => {
    const url =
      "http://localhost:8989/v2/orders?business_unit=SRI&value_mode=before_discount&value_type=gross&tax_mode=before-tax&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-24&skip=0&limit=10&tab=all-orders";

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
      const arrSortByColumnDesc = arrColumnAllOrder.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrColumnAllOrder.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });

  describe.skip(`[${process.env.JARVIS_ENV}] Some Filter With Business Unit Offline`, () => {
    const url =
      "http://localhost:8989/v2/orders?business_unit=SRI&single_item_only=1&value_mode=before_discount&manual_order_only=1&find_item=1&is_offlinestore_guest=-1&value_type=gross&tax_mode=before-tax&platform[]=offline_store&store[]=6&order_state[]=Delivered&keywords[]=UJCFEGMNZ&month=9&year=2024&brand_type=exclusive&order_type[]=On+Sale&fullfilment_by[]=offline_store-6&cities[]=Jakarta+Selatan&provinces[]=DKI+Jakarta&order_payments[]=BCA+Virtual+Account&start_date=2024-09-01&end_date=2024-09-24&skip=0&limit=10&tab=all-orders&store_mongoid[]=5dde3513fdef3a0ce69f9600&platform_ids[]=4";

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
      const arrSortByColumnDesc = arrColumnAllOrder.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrColumnAllOrder.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });
});

describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales New Gift Card`, () => {
  describe(`[${process.env.JARVIS_ENV}] Gift Card Detail`, () => {
    describe(`[${process.env.JARVIS_ENV}] Filter Default`, () => {
      const url =
        "http://localhost:8989/v2/gift-cards?view_point=product&value_mode=before_discount&value_type=gross&tax_mode=before-tax&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=gift-card";

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
        const arrSortByColumnDesc = arrColumnGiftCardDetail.map((el) => {
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
                `Unable to fetch sort by column: ${sortByColumn}`
              );
            }
          }
        );
      });

      describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
        const arrSortByColumnAsc = arrColumnGiftCardDetail.map((el) => {
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
                `Unable to fetch sort by column: ${sortByColumn}`
              );
            }
          }
        );
      });
    });
  });
  describe.skip(`[${process.env.JARVIS_ENV}] Gift Card Summary Remaining`, () => {
    describe(`[${process.env.JARVIS_ENV}] Filter Default`, () => {
      const url =
        "http://localhost:8989/v2/gift-cards-summary?view_point=product&value_mode=before_discount&value_type=gross&tax_mode=before-tax&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=gift-card";

      it("Without Sort By Column", async ({ expect }) => {
        try {
          const data = { success: true };
          const result = await Helpers.getDataFromAxios(url);
          expect(result).toMatchObject(data);
        } catch (e) {
          expect(e.message).toBe("Unable to fetch data all order");
        }
      });
    });
  });
  describe.skip(`[${process.env.JARVIS_ENV}] Gift Card Detail Hyperlink`, () => {
    describe(`[${process.env.JARVIS_ENV}] Filter Default`, () => {
      const url =
        "http://localhost:8989/v2/gift-cards/details?view_point=product&value_mode=before_discount&value_type=gross&tax_mode=before-tax&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=gift-card&start=0&length=10&reference=IUUIMRCXH";

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
        const arrSortByColumnDesc = arrColumnGiftCardDetailHyperlink.map(
          (el) => {
            const newObj = { ...el };
            newObj.url = `${url}&order_by=${newObj.field}&order_by_type=DESC`;
            newObj.expected = true;
            return newObj;
          }
        );

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
                `Unable to fetch sort by column: ${sortByColumn}`
              );
            }
          }
        );
      });

      describe.skip(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
        const arrSortByColumnAsc = arrColumnGiftCardDetailHyperlink.map(
          (el) => {
            const newObj = { ...el };
            newObj.url = `${url}&order_by=${newObj.field}&order_by_type=ASC`;
            newObj.expected = true;
            return newObj;
          }
        );

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
                `Unable to fetch sort by column: ${sortByColumn}`
              );
            }
          }
        );
      });
    });
  });
});

describe.only(`[${process.env.JARVIS_ENV}] Test Jarvis Sales New Target Sales`, () => {
  describe(`[${process.env.JARVIS_ENV}] Filter Default With Group By: Brand`, () => {
    const url =
      "http://localhost:8989/v2/target-sales/brands?view_point=brand&value_mode=before_discount&value_type=gross&tax_mode=before-tax&period_type=yearly&data_display=qty&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=target-sales";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrNewColumn = [
      {
        sortByColumn: "BRAND NAME",
        field: "brand_name",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumnTargetSales,
    ];

    describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
      const arrSortByColumnDesc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });

  describe(`[${process.env.JARVIS_ENV}] Filter Default With Group By: Platform`, () => {
    const url =
      "http://localhost:8989/v2/target-sales/platforms?view_point=order_platform&value_mode=before_discount&value_type=gross&tax_mode=before-tax&period_type=yearly&data_display=qty&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=target-sales";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrNewColumn = [
      {
        sortByColumn: "ORDER PLATFORM",
        field: "order_source",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumnTargetSales,
    ];

    describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
      const arrSortByColumnDesc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });

  describe(`[${process.env.JARVIS_ENV}] Filter Default With Group By: Store`, () => {
    const url =
      "http://localhost:8989/v2/target-sales/stores?view_point=store&value_mode=before_discount&value_type=gross&tax_mode=before-tax&period_type=yearly&data_display=qty&month=9&year=2024&start_date=2024-09-01&end_date=2024-09-27&skip=0&limit=10&tab=target-sales";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });

    const arrNewColumn = [
      {
        sortByColumn: "STORE",
        field: "store",
        dataType: "string",
        expected: { success: true },
      },
      ...arrColumnTargetSales,
    ];

    describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
      const arrSortByColumnDesc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });

    describe(`[${process.env.JARVIS_ENV}] Sort Type ASC`, () => {
      const arrSortByColumnAsc = arrNewColumn.map((el) => {
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
              `Unable to fetch sort by column: ${sortByColumn}`
            );
          }
        }
      );
    });
  });
});

describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales New Monthly Sales Review`, () => {
  describe(`[${process.env.JARVIS_ENV}] Filter Default`, () => {
    const url =
      "http://localhost:8989/v2/monthly-sales-reviews?value_mode=before_discount&only_has_sales=1&value_type=gross&month=09&year=2024&brand_type=exclusive&skip=0&limit=10&tab=monthly-sales-review";

    it("Without Sort By Column", async ({ expect }) => {
      try {
        const data = { success: true };
        const result = await Helpers.getDataFromAxios(url);
        expect(result).toMatchObject(data);
      } catch (e) {
        expect(e.message).toBe("Unable to fetch data all order");
      }
    });
  });
});

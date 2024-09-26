import { expect, describe, it } from "vitest";
const Helpers = require("./helpers");

const arrColumn = [
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

describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales New All Order`, () => {
  describe.only(`[${process.env.JARVIS_ENV}] Filter Default`, () => {
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

  describe(`[${process.env.JARVIS_ENV}] Some Filter Without Group Platform`, () => {
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

  describe(`[${process.env.JARVIS_ENV}] Some Filter With Group Platform`, () => {
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

  describe(`[${process.env.JARVIS_ENV}] Filter Default With Business Unit Offline`, () => {
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

  describe(`[${process.env.JARVIS_ENV}] Some Filter With Business Unit Offline`, () => {
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

import { expect, describe, it } from "vitest";
const Helpers = require("./helpers");

const urlPlatform =
  "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/platform";
const urlPeriod =
  "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/period";
const urlSalesContribution =
  "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/sales-contributions";
const urlAovDistribution =
  "https://jarvis-api.sociolla.info/v2/aov-distributions";
const urlTopSales = "https://jarvis-api.sociolla.info/v2/sales/top";
const urlFootfall = "https://jarvis-api.sociolla.info/v2/footfalls";
const urlNps = "https://jarvis-api.sociolla.info/v2/net-promotor-scores";

const arrColumnSalesSummary = [
  {
    sortByColumn: "ORDER",
    field: "order",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "QTY",
    field: "qty",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NMV",
    field: "sales",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "TOTAL PAID",
    field: "total_paid",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NET REVENUE (MP)",
    field: "net_revenue_mp",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NET REVENUE (CP)",
    field: "net_revenue_cp",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NET REVENUE GROWTH (%)",
    field: "net_revenue_growth",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NET REVENUE TARGET (%)",
    field: "net_revenue_target",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NET REVENUE ACH. (%)",
    field: "net_revenue_ach",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "AUT",
    field: "aut",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "ASP",
    field: "asp",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "AOV",
    field: "aov",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "AUR",
    field: "aur",
    dataType: "number",
    expected: { success: true },
  },
];

const arrColumnTopSales = [
  {
    sortByColumn: "QTY [AMOUNT (MP)]",
    field: "qty",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "QTY [CONT. % (MP)]",
    field: "qty_percent",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "QTY [AMOUNT (CP)]",
    field: "qty_cp",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "QTY [CONT. % (CP)]",
    field: "qty_percent_cp",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "QTY [GROWTH (%)]",
    field: "qty_growth",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NMV [AMOUNT (MP)]",
    field: "nmv",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NMV [CONT. % (MP)]",
    field: "nmv_percent",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NMV [AMOUNT (CP)]",
    field: "nmv_cp",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NMV [CONT. % (CP)]",
    field: "nmv_percent_cp",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NMV [GROWTH (%)]",
    field: "nmv_growth",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NET REVENUE [AMOUNT (MP)]",
    field: "net_revenue",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NET REVENUE [CONT. % (MP)]",
    field: "net_revenue_percent",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NET REVENUE [AMOUNT (CP)]",
    field: "net_revenue_cp",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NET REVENUE [CONT. % (CP)]",
    field: "net_revenue_percent_cp",
    dataType: "number",
    expected: { success: true },
  },
  {
    sortByColumn: "NET REVENUE [GROWTH (%)]",
    field: "net_revenue_growth",
    dataType: "number",
    expected: { success: true },
  },
];

// With filter default
describe.only(`[${process.env.JARVIS_ENV}] Test Concurrent Jarvis Sales Operation Dashboard, Filter: default`, () => {
  it.concurrent("Fetch Data Platform", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlPlatform +
          "?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1725866750404&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data platform");
    }
  });
  it.concurrent("Fetch Data Period", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlPeriod +
          "?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1725866750404&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&report_types[]=order&report_types[]=aut&report_types[]=nmv&report_types[]=aov&report_types[]=aur"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data period");
    }
  });
  it.concurrent("Fetch Data Sales Contribution", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlSalesContribution +
          "?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1725866750404&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data sales contribution");
    }
  });
  it.concurrent("Fetch Data AOV Distribution", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlAovDistribution +
          "?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726554101568&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data aov distribution");
    }
  });
  it.concurrent("Fetch Data Top Sales", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlTopSales +
          "?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726554101568&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&group_by=brand"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data top sales");
    }
  });
});

// With all filter
describe(`[${process.env.JARVIS_ENV}] Test Concurrent Jarvis Sales Operation Dashboard, Filter: all`, () => {
  it.concurrent("Fetch Data Platform", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlPlatform +
          "?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-20&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data platform");
    }
  });
  it.concurrent("Fetch Data Period", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlPeriod +
          "?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-20&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600&report_types[]=order&report_types[]=aut&report_types[]=nmv&report_types[]=aov&report_types[]=aur"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data period");
    }
  });
  it.concurrent("Fetch Data Sales Contribution", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlSalesContribution +
          "??order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-20&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data sales contribution");
    }
  });
  it.concurrent("Fetch Data AOV Distribution", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlAovDistribution +
          "?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-20&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data aov distribution");
    }
  });
  it.concurrent("Fetch Data Top Sales", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlTopSales +
          "?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-20&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600&group_by=brand"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data top sales");
    }
  });
});

// business_unit: offline
describe(`[${process.env.JARVIS_ENV}] Test Concurrent Jarvis Sales Operation Dashboard, Filter: business_unit offline`, () => {
  it.concurrent("Fetch Data Platform", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlPlatform +
          "?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1725873906342&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data platform");
    }
  });
  it.concurrent("Fetch Data Period", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlPeriod +
          "?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1725873906342&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&report_types[]=order&report_types[]=aut&report_types[]=nmv&report_types[]=aov&report_types[]=aur"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data period");
    }
  });
  it.concurrent("Fetch Data Sales Contribution", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlSalesContribution +
          "??period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1725873906342&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data sales contribution");
    }
  });
  it.concurrent("Fetch Data AOV Distribution", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlAovDistribution +
          "?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726554418498&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data aov distribution");
    }
  });
  it.concurrent("Fetch Data Top Sales", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlTopSales +
          "?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726554418498&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&group_by=brand"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data top sales");
    }
  });
  it.concurrent("Fetch Data Footfalls", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlFootfall +
          "?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726554418498&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data footfalls");
    }
  });
  it.concurrent("Fetch Data Net Promotor Score (NPS)", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        urlNps +
          "?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726554418498&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data net promotor score (nps)");
    }
  });
});

// Sales summary Sort By Column Feature With Filter Default
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Sales Summary Sort By Column Feature, Filter: default`, () => {
  const url =
    urlPlatform +
    "?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10";

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumnSalesSummary.map((el) => {
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
              : el[field];
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
    const arrSortByColumnAsc = arrColumnSalesSummary.map((el) => {
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
              : el[field];
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

// Sales summary Sort By Column Feature With All Filter
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Sales Summary Sort By Column Feature, Filter: all`, () => {
  const url =
    urlPlatform +
    "?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-20&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600";

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumnSalesSummary.map((el) => {
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
              : el[field];
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
    const arrSortByColumnAsc = arrColumnSalesSummary.map((el) => {
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
              : el[field];
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

// Sales summary Sort By Column Feature With Filter Business Unit Offline
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Sales Summary Sort By Column Feature, Filter: business_unit offline`, () => {
  const url =
    urlPlatform +
    "?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1725873906342&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10";

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumnSalesSummary.map((el) => {
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
              : el[field];
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
    const arrSortByColumnAsc = arrColumnSalesSummary.map((el) => {
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
              : el[field];
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

// Top Sales Sort By Column Feature With Filter Default Group By Brand
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: default, Group By Brand`, () => {
  const url =
    urlTopSales +
    "?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&group_by=brand";

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumnTopSales.map((el) => {
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
              : el[field];
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
    const arrSortByColumnAsc = arrColumnTopSales.map((el) => {
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
              : el[field];
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

// Top Sales Sort By Column Feature With All Filter Group By Brand
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: all, Group By Brand`, () => {
  const url =
    urlTopSales +
    "?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-20&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600&group_by=brand";

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumnTopSales.map((el) => {
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
              : el[field];
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
    const arrSortByColumnAsc = arrColumnTopSales.map((el) => {
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
              : el[field];
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

// Top Sales Sort By Column Feature With Filter Business Unit Offline Group By Brand
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: business_unit offline, Group By Brand`, () => {
  const url =
    urlTopSales +
    "?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726630158011&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&group_by=brand";

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumnTopSales.map((el) => {
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
              : el[field];
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
    const arrSortByColumnAsc = arrColumnTopSales.map((el) => {
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
              : el[field];
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

// Top Sales Sort By Column Feature With Filter Default Group By Category
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: default, Group By Category`, () => {
  const url =
    urlTopSales +
    "?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&group_by=category";

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumnTopSales.map((el) => {
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
              : el[field];
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
    const arrSortByColumnAsc = arrColumnTopSales.map((el) => {
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
              : el[field];
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

// Top Sales Sort By Column Feature With All Filter Group By Category
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: all, Group By Category`, () => {
  const url =
    urlTopSales +
    "?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-20&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600&group_by=category";

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumnTopSales.map((el) => {
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
              : el[field];
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
    const arrSortByColumnAsc = arrColumnTopSales.map((el) => {
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
              : el[field];
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

// Top Sales Sort By Column Feature With Filter Business Unit Offline Group By Category
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: business_unit offline, Group By Category`, () => {
  const url =
    urlTopSales +
    "?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726630158011&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&group_by=category";

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumnTopSales.map((el) => {
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
              : el[field];
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
    const arrSortByColumnAsc = arrColumnTopSales.map((el) => {
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
              : el[field];
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

// Top Sales Sort By Column Feature With Filter Default Group By Product
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: default, Group By Product`, () => {
  const url =
    urlTopSales +
    "?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&group_by=product";

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumnTopSales.map((el) => {
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
              : el[field];
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
    const arrSortByColumnAsc = arrColumnTopSales.map((el) => {
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
              : el[field];
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

// Top Sales Sort By Column Feature With All Filter Group By Product
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: all, Group By Product`, () => {
  const url =
    urlTopSales +
    "?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-20&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600&group_by=product";

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumnTopSales.map((el) => {
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
              : el[field];
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
    const arrSortByColumnAsc = arrColumnTopSales.map((el) => {
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
              : el[field];
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

// Top Sales Sort By Column Feature With Filter Business Unit Offline Group By Product
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: business_unit offline, Group By Product`, () => {
  const url =
    urlTopSales +
    "?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-20&t=1726630158011&start_date_compare=2024-08-01&end_date_compare=2024-08-20&skip=0&limit=10&group_by=product";

  describe(`[${process.env.JARVIS_ENV}] Sort Type DESC`, () => {
    const arrSortByColumnDesc = arrColumnTopSales.map((el) => {
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
              : el[field];
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
    const arrSortByColumnAsc = arrColumnTopSales.map((el) => {
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
              : el[field];
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

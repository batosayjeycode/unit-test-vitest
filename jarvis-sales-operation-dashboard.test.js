import { expect, describe, it } from "vitest";
const getData = require("./helpers");

// With filter default
describe(`[${process.env.JARVIS_ENV}] Test Concurrent Jarvis Sales Operation Dashboard, Filter: default`, () => {
  it.concurrent("Fetch Data Platform", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725866750404&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data platform");
    }
  });
  it.concurrent("Fetch Data Period", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/period?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725866750404&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10&report_types[]=order&report_types[]=aut&report_types[]=nmv&report_types[]=aov&report_types[]=aur"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data period");
    }
  });
  it.concurrent("Fetch Data Sales Contribution", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/sales-contributions?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725866750404&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data sales contribution");
    }
  });
  it.concurrent("Fetch Data AOV Distribution", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/aov-distributions?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726554101568&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data aov distribution");
    }
  });
  it.concurrent("Fetch Data Top Sales", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726554101568&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand"
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
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/platform?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-10&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-10&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data platform");
    }
  });
  it.concurrent("Fetch Data Period", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/period?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-10&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-10&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600&report_types[]=order&report_types[]=aut&report_types[]=nmv&report_types[]=aov&report_types[]=aur"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data period");
    }
  });
  it.concurrent("Fetch Data Sales Contribution", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/sales-contributions?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-10&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-10&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data sales contribution");
    }
  });
  it.concurrent("Fetch Data AOV Distribution", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/aov-distributions?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-10&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-10&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data aov distribution");
    }
  });
  it.concurrent("Fetch Data Top Sales", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales/top?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-10&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-10&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600&group_by=brand"
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
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725873906342&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data platform");
    }
  });
  it.concurrent("Fetch Data Period", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/period?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725873906342&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10&report_types[]=order&report_types[]=aut&report_types[]=nmv&report_types[]=aov&report_types[]=aur"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data period");
    }
  });
  it.concurrent("Fetch Data Sales Contribution", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/sales-contributions?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725873906342&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data sales contribution");
    }
  });
  it.concurrent("Fetch Data AOV Distribution", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/aov-distributions?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726554418498&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data aov distribution");
    }
  });
  it.concurrent("Fetch Data Top Sales", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726554418498&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data top sales");
    }
  });
  it.concurrent("Fetch Data Footfalls", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/footfalls?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726554418498&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data footfalls");
    }
  });
  it.concurrent("Fetch Data Net Promotor Score (NPS)", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/net-promotor-scores?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726554418498&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10"
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
    "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10";
  it.each([
    {
      sortByColumn: "ORDER",
      url: `${url}&order_by=order&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY",
      url: `${url}&order_by=qty&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV",
      url: `${url}&order_by=sales&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "TOTAL PAID",
      url: `${url}&order_by=total_paid&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE (MP)",
      url: `${url}&order_by=net_revenue_mp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE (CP)",
      url: `${url}&order_by=net_revenue_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE GROWTH (%)",
      url: `${url}&order_by=net_revenue_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE TARGET (%)",
      url: `${url}&order_by=net_revenue_target&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE ACH. (%)",
      url: `${url}&order_by=net_revenue_ach&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "AUT",
      url: `${url}&order_by=aut&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "ASP",
      url: `${url}&order_by=asp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "AOV",
      url: `${url}&order_by=aov&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "AUR",
      url: `${url}&order_by=aur&order_by_type=desc`,
      expected: { success: true },
    },
  ])(
    "Sales Summary Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch sales summary sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

// Sales summary Sort By Column Feature With All Filter
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Sales Summary Sort By Column Feature, Filter: all`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/platform?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-10&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-10&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600";
  it.each([
    {
      sortByColumn: "ORDER",
      url: `${url}&order_by=order&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY",
      url: `${url}&order_by=qty&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV",
      url: `${url}&order_by=sales&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "TOTAL PAID",
      url: `${url}&order_by=total_paid&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE (MP)",
      url: `${url}&order_by=net_revenue_mp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE (CP)",
      url: `${url}&order_by=net_revenue_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE GROWTH (%)",
      url: `${url}&order_by=net_revenue_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE TARGET (%)",
      url: `${url}&order_by=net_revenue_target&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE ACH. (%)",
      url: `${url}&order_by=net_revenue_ach&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "AUT",
      url: `${url}&order_by=aut&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "ASP",
      url: `${url}&order_by=asp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "AOV",
      url: `${url}&order_by=aov&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "AUR",
      url: `${url}&order_by=aur&order_by_type=desc`,
      expected: { success: true },
    },
  ])(
    "Sales Summary Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch sales summary sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

// Sales summary Sort By Column Feature With Filter Business Unit Offline
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Sales Summary Sort By Column Feature, Filter: business_unit offline`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725873906342&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10";
  it.each([
    {
      sortByColumn: "ORDER",
      url: `${url}&order_by=order&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY",
      url: `${url}&order_by=qty&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV",
      url: `${url}&order_by=sales&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "TOTAL PAID",
      url: `${url}&order_by=total_paid&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE (MP)",
      url: `${url}&order_by=net_revenue_mp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE (CP)",
      url: `${url}&order_by=net_revenue_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE GROWTH (%)",
      url: `${url}&order_by=net_revenue_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE TARGET (%)",
      url: `${url}&order_by=net_revenue_target&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE ACH. (%)",
      url: `${url}&order_by=net_revenue_ach&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "AUT",
      url: `${url}&order_by=aut&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "ASP",
      url: `${url}&order_by=asp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "AOV",
      url: `${url}&order_by=aov&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "AUR",
      url: `${url}&order_by=aur&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "OPENING DATE",
      url: `${url}&order_by=opening_date&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "CITY",
      url: `${url}&order_by=city&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "PROVINCE",
      url: `${url}&order_by=province&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "SIZE (SQM)",
      url: `${url}&order_by=size_sqm&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV PER SQM",
      url: `${url}&order_by=nmv_sqm&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REV. PER STAFF",
      url: `${url}&order_by=net_rev_staff&order_by_type=desc`,
      expected: { success: true },
    },
  ])(
    "Sales Summary Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch sales summary sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

// Top Sales Sort By Column Feature With Filter Default Group By Brand
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: default, Group By Brand`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand";
  it.each([
    {
      sortByColumn: "QTY [AMOUNT (MP)]",
      url: `${url}&order_by=qty&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (MP)]",
      url: `${url}&order_by=qty_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [AMOUNT (CP)]",
      url: `${url}&order_by=qty_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (CP)]",
      url: `${url}&order_by=qty_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [GROWTH (%)]",
      url: `${url}&order_by=qty_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (MP)]",
      url: `${url}&order_by=nmv&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (MP)]",
      url: `${url}&order_by=nmv_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (CP)]",
      url: `${url}&order_by=nmv_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (CP)]",
      url: `${url}&order_by=nmv_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [GROWTH (%)]",
      url: `${url}&order_by=nmv_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (MP)]",
      url: `${url}&order_by=net_revenue&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (MP)]",
      url: `${url}&order_by=net_revenue_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (CP)]",
      url: `${url}&order_by=net_revenue_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (CP)]",
      url: `${url}&order_by=net_revenue_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [GROWTH (%)]",
      url: `${url}&order_by=net_revenue_growth&order_by_type=desc`,
      expected: { success: true },
    },
  ])(
    "Top Sales Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch top sales sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

// Top Sales Sort By Column Feature With All Filter Group By Brand
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: all, Group By Brand`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/sales/top?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-10&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-10&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600&group_by=brand";
  it.each([
    {
      sortByColumn: "QTY [AMOUNT (MP)]",
      url: `${url}&order_by=qty&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (MP)]",
      url: `${url}&order_by=qty_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [AMOUNT (CP)]",
      url: `${url}&order_by=qty_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (CP)]",
      url: `${url}&order_by=qty_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [GROWTH (%)]",
      url: `${url}&order_by=qty_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (MP)]",
      url: `${url}&order_by=nmv&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (MP)]",
      url: `${url}&order_by=nmv_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (CP)]",
      url: `${url}&order_by=nmv_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (CP)]",
      url: `${url}&order_by=nmv_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [GROWTH (%)]",
      url: `${url}&order_by=nmv_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (MP)]",
      url: `${url}&order_by=net_revenue&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (MP)]",
      url: `${url}&order_by=net_revenue_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (CP)]",
      url: `${url}&order_by=net_revenue_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (CP)]",
      url: `${url}&order_by=net_revenue_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [GROWTH (%)]",
      url: `${url}&order_by=net_revenue_growth&order_by_type=desc`,
      expected: { success: true },
    },
  ])(
    "Top Sales Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch top sales sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

// Top Sales Sort By Column Feature With Filter Business Unit Offline Group By Brand
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: business_unit offline, Group By Brand`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-18&t=1726630158011&start_date_compare=2024-08-01&end_date_compare=2024-08-18&skip=0&limit=10&group_by=brand";
  it.each([
    {
      sortByColumn: "QTY [AMOUNT (MP)]",
      url: `${url}&order_by=qty&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (MP)]",
      url: `${url}&order_by=qty_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [AMOUNT (CP)]",
      url: `${url}&order_by=qty_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (CP)]",
      url: `${url}&order_by=qty_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [GROWTH (%)]",
      url: `${url}&order_by=qty_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (MP)]",
      url: `${url}&order_by=nmv&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (MP)]",
      url: `${url}&order_by=nmv_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (CP)]",
      url: `${url}&order_by=nmv_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (CP)]",
      url: `${url}&order_by=nmv_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [GROWTH (%)]",
      url: `${url}&order_by=nmv_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (MP)]",
      url: `${url}&order_by=net_revenue&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (MP)]",
      url: `${url}&order_by=net_revenue_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (CP)]",
      url: `${url}&order_by=net_revenue_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (CP)]",
      url: `${url}&order_by=net_revenue_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [GROWTH (%)]",
      url: `${url}&order_by=net_revenue_growth&order_by_type=desc`,
      expected: { success: true },
    },
  ])(
    "Top Sales Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch top sales sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

// Top Sales Sort By Column Feature With Filter Default Group By Category
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: default, Group By Category`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=category";
  it.each([
    {
      sortByColumn: "QTY [AMOUNT (MP)]",
      url: `${url}&order_by=qty&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (MP)]",
      url: `${url}&order_by=qty_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [AMOUNT (CP)]",
      url: `${url}&order_by=qty_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (CP)]",
      url: `${url}&order_by=qty_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [GROWTH (%)]",
      url: `${url}&order_by=qty_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (MP)]",
      url: `${url}&order_by=nmv&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (MP)]",
      url: `${url}&order_by=nmv_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (CP)]",
      url: `${url}&order_by=nmv_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (CP)]",
      url: `${url}&order_by=nmv_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [GROWTH (%)]",
      url: `${url}&order_by=nmv_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (MP)]",
      url: `${url}&order_by=net_revenue&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (MP)]",
      url: `${url}&order_by=net_revenue_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (CP)]",
      url: `${url}&order_by=net_revenue_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (CP)]",
      url: `${url}&order_by=net_revenue_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [GROWTH (%)]",
      url: `${url}&order_by=net_revenue_growth&order_by_type=desc`,
      expected: { success: true },
    },
  ])(
    "Top Sales Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch top sales sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

// Top Sales Sort By Column Feature With All Filter Group By Category
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: all, Group By Category`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/sales/top?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-10&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-10&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600&group_by=category";
  it.each([
    {
      sortByColumn: "QTY [AMOUNT (MP)]",
      url: `${url}&order_by=qty&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (MP)]",
      url: `${url}&order_by=qty_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [AMOUNT (CP)]",
      url: `${url}&order_by=qty_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (CP)]",
      url: `${url}&order_by=qty_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [GROWTH (%)]",
      url: `${url}&order_by=qty_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (MP)]",
      url: `${url}&order_by=nmv&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (MP)]",
      url: `${url}&order_by=nmv_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (CP)]",
      url: `${url}&order_by=nmv_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (CP)]",
      url: `${url}&order_by=nmv_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [GROWTH (%)]",
      url: `${url}&order_by=nmv_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (MP)]",
      url: `${url}&order_by=net_revenue&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (MP)]",
      url: `${url}&order_by=net_revenue_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (CP)]",
      url: `${url}&order_by=net_revenue_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (CP)]",
      url: `${url}&order_by=net_revenue_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [GROWTH (%)]",
      url: `${url}&order_by=net_revenue_growth&order_by_type=desc`,
      expected: { success: true },
    },
  ])(
    "Top Sales Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch top sales sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

// Top Sales Sort By Column Feature With Filter Business Unit Offline Group By Category
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: business_unit offline, Group By Category`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-18&t=1726630158011&start_date_compare=2024-08-01&end_date_compare=2024-08-18&skip=0&limit=10&group_by=category";
  it.each([
    {
      sortByColumn: "QTY [AMOUNT (MP)]",
      url: `${url}&order_by=qty&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (MP)]",
      url: `${url}&order_by=qty_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [AMOUNT (CP)]",
      url: `${url}&order_by=qty_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (CP)]",
      url: `${url}&order_by=qty_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [GROWTH (%)]",
      url: `${url}&order_by=qty_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (MP)]",
      url: `${url}&order_by=nmv&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (MP)]",
      url: `${url}&order_by=nmv_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (CP)]",
      url: `${url}&order_by=nmv_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (CP)]",
      url: `${url}&order_by=nmv_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [GROWTH (%)]",
      url: `${url}&order_by=nmv_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (MP)]",
      url: `${url}&order_by=net_revenue&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (MP)]",
      url: `${url}&order_by=net_revenue_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (CP)]",
      url: `${url}&order_by=net_revenue_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (CP)]",
      url: `${url}&order_by=net_revenue_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [GROWTH (%)]",
      url: `${url}&order_by=net_revenue_growth&order_by_type=desc`,
      expected: { success: true },
    },
  ])(
    "Top Sales Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch top sales sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

// Top Sales Sort By Column Feature With Filter Default Group By Product
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: default, Group By Product`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=product";
  it.each([
    {
      sortByColumn: "QTY [AMOUNT (MP)]",
      url: `${url}&order_by=qty&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (MP)]",
      url: `${url}&order_by=qty_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [AMOUNT (CP)]",
      url: `${url}&order_by=qty_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (CP)]",
      url: `${url}&order_by=qty_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [GROWTH (%)]",
      url: `${url}&order_by=qty_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (MP)]",
      url: `${url}&order_by=nmv&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (MP)]",
      url: `${url}&order_by=nmv_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (CP)]",
      url: `${url}&order_by=nmv_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (CP)]",
      url: `${url}&order_by=nmv_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [GROWTH (%)]",
      url: `${url}&order_by=nmv_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (MP)]",
      url: `${url}&order_by=net_revenue&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (MP)]",
      url: `${url}&order_by=net_revenue_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (CP)]",
      url: `${url}&order_by=net_revenue_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (CP)]",
      url: `${url}&order_by=net_revenue_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [GROWTH (%)]",
      url: `${url}&order_by=net_revenue_growth&order_by_type=desc`,
      expected: { success: true },
    },
  ])(
    "Top Sales Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch top sales sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

// Top Sales Sort By Column Feature With All Filter Group By Product
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: all, Group By Product`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/sales/top?order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-10&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-10&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600&group_by=product";
  it.each([
    {
      sortByColumn: "QTY [AMOUNT (MP)]",
      url: `${url}&order_by=qty&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (MP)]",
      url: `${url}&order_by=qty_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [AMOUNT (CP)]",
      url: `${url}&order_by=qty_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (CP)]",
      url: `${url}&order_by=qty_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [GROWTH (%)]",
      url: `${url}&order_by=qty_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (MP)]",
      url: `${url}&order_by=nmv&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (MP)]",
      url: `${url}&order_by=nmv_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (CP)]",
      url: `${url}&order_by=nmv_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (CP)]",
      url: `${url}&order_by=nmv_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [GROWTH (%)]",
      url: `${url}&order_by=nmv_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (MP)]",
      url: `${url}&order_by=net_revenue&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (MP)]",
      url: `${url}&order_by=net_revenue_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (CP)]",
      url: `${url}&order_by=net_revenue_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (CP)]",
      url: `${url}&order_by=net_revenue_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [GROWTH (%)]",
      url: `${url}&order_by=net_revenue_growth&order_by_type=desc`,
      expected: { success: true },
    },
  ])(
    "Top Sales Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch top sales sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

// Top Sales Sort By Column Feature With Filter Business Unit Offline Group By Product
describe.only(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature, Filter: business_unit offline, Group By Product`, () => {
  const url =
    "https://jarvis-api.sociolla.info/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-18&t=1726630158011&start_date_compare=2024-08-01&end_date_compare=2024-08-18&skip=0&limit=10&group_by=product";
  it.each([
    {
      sortByColumn: "QTY [AMOUNT (MP)]",
      url: `${url}&order_by=qty&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (MP)]",
      url: `${url}&order_by=qty_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [AMOUNT (CP)]",
      url: `${url}&order_by=qty_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (CP)]",
      url: `${url}&order_by=qty_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [GROWTH (%)]",
      url: `${url}&order_by=qty_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (MP)]",
      url: `${url}&order_by=nmv&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (MP)]",
      url: `${url}&order_by=nmv_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (CP)]",
      url: `${url}&order_by=nmv_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (CP)]",
      url: `${url}&order_by=nmv_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [GROWTH (%)]",
      url: `${url}&order_by=nmv_growth&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (MP)]",
      url: `${url}&order_by=net_revenue&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (MP)]",
      url: `${url}&order_by=net_revenue_percent&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (CP)]",
      url: `${url}&order_by=net_revenue_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (CP)]",
      url: `${url}&order_by=net_revenue_percent_cp&order_by_type=desc`,
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [GROWTH (%)]",
      url: `${url}&order_by=net_revenue_growth&order_by_type=desc`,
      expected: { success: true },
    },
  ])(
    "Top Sales Sort By Column: $sortByColumn -> $expected",
    async ({ sortByColumn, url, expected }) => {
      try {
        const result = await getData(url);
        expect(result).toMatchObject(expected);
      } catch (e) {
        expect(e.message).toBe(
          `Unable to fetch top sales sort by column: ${sortByColumn}`
        );
      }
    }
  );
});

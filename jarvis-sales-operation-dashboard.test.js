import { expect, describe, it } from "vitest";
const getData = require("./helpers");

// business unit: all
describe(`[${process.env.JARVIS_ENV}] Test Concurrent Jarvis Sales Operation Dashboard, Filter: default`, () => {
  it.concurrent("Fetch Data Platform", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/platform?report_type=top_platform_store&period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725866750404&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10"
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
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/period?report_type=period&period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725866750404&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10&report_types[]=order&report_types[]=aut&report_types[]=nmv&report_types[]=aov&report_types[]=aur"
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
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/sales-contributions?report_type=sales_contribution&period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725866750404&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10"
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
        "http://localhost:8989/v2/aov-distributions?report_type=aov_distribution&period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726554101568&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10"
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
        "http://localhost:8989/v2/sales/top?report_type=top_sales&period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726554101568&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand"
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
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/platform?report_type=top_platform_store&order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-10&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-10&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600"
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
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/period?report_type=period&order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-10&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-10&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600&report_types[]=order&report_types[]=aut&report_types[]=nmv&report_types[]=aov&report_types[]=aur"
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
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/sales-contributions?report_type=sales_contribution&order_platform[]=offline_store&store[]=6&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&order_type[]=On+Sale&brand_type=exclusive&start_date=2024-09-01&end_date=2024-09-10&t=1725956611452&start_date_compare=2024-08-01&end_date_compare=2024-08-10&skip=0&limit=10&store_mongoid[]=5dde3513fdef3a0ce69f9600"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data sales contribution");
    }
  });
});

// business_unit: offline
describe(`[${process.env.JARVIS_ENV}] Test Concurrent Jarvis Sales Operation Dashboard, Filter: business_unit offline`, () => {
  it.concurrent("Fetch Data Platform", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await getData(
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/platform?report_type=top_platform_store&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725873906342&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10"
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
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/period?report_type=period&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725873906342&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10&report_types[]=order&report_types[]=aut&report_types[]=nmv&report_types[]=aov&report_types[]=aur"
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
        "https://jarvis-api.sociolla.info/v2/sales-operation-dashboard/sales-contributions?report_type=sales_contribution&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-09&t=1725873906342&start_date_compare=2024-08-01&end_date_compare=2024-08-09&skip=0&limit=10"
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
        "http://localhost:8989/v2/aov-distributions?report_type=aov_distribution&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726554418498&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10"
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
        "http://localhost:8989/v2/sales/top?report_type=top_sales&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726554418498&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand"
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
        "http://localhost:8989/v2/footfalls?report_type=footfall&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726554418498&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10"
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
        "http://localhost:8989/v2/net-promotor-scores?report_type=nps&period_type=monthly&value_type=net&value_mode=before_discount&business_unit=SRI&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726554418498&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10"
      );
      expect(result).toMatchObject(data);
    } catch (e) {
      expect(e.message).toBe("Unable to fetch data net promotor score (nps)");
    }
  });
});

// Sales summary Sort By Column Feature
describe.only(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Sales Summary Sort By Column Feature`, () => {
  it.each([
    {
      sortByColumn: "ORDER",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=order&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "QTY",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=qty&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NMV",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=sales&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "TOTAL PAID",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=total_paid&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE (MP)",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=net_revenue_mp&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE (CP)",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=net_revenue_cp&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE GROWTH (%)",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=net_revenue_growth&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE TARGET (%)",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=net_revenue_target&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE ACH. (%)",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=net_revenue_ach&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "AUT",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=aut&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "ASP",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=asp&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "AOV",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=aov&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "AUR",
      url: "http://localhost:8989/v2/sales-operation-dashboard/platform?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&order_by=aur&order_by_type=desc",
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
          `Unable to fetch sales summary sort by coolumn: ${sortByColumn}`
        );
      }
    }
  );
});

// Top Sales Sort By Column Feature
describe(`[${process.env.JARVIS_ENV}] Test Jarvis Sales Operation Dashboard, Top Sales Sort By Column Feature`, () => {
  it.each([
    {
      sortByColumn: "QTY [AMOUNT (MP)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=qty&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (MP)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=qty_percent&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [AMOUNT (CP)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=qty_cp&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [CONT. % (CP)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=qty_percent_cp&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "QTY [GROWTH (%)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=qty_growth&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (MP)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=nmv&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (MP)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=nmv_percent&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [AMOUNT (CP)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=nmv_cp&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [CONT. % (CP)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=nmv_percent_cp&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NMV [GROWTH (%)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=nmv_growth&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (MP)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=net_revenue&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (MP)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=net_revenue_percent&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [AMOUNT (CP)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=net_revenue_cp&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [CONT. % (CP)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=net_revenue_percent_cp&order_by_type=desc",
      expected: { success: true },
    },
    {
      sortByColumn: "NET REVENUE [GROWTH (%)]",
      url: "http://localhost:8989/v2/sales/top?period_type=monthly&value_type=net&value_mode=before_discount&active_in[]=sociolla&start_date=2024-09-01&end_date=2024-09-17&t=1726556945503&start_date_compare=2024-08-01&end_date_compare=2024-08-17&skip=0&limit=10&group_by=brand&order_by=net_revenue_growth&order_by_type=desc",
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

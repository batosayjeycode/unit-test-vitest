import { describe, it } from "vitest";
const getData = require("./helpers");

describe("Test Concurrent Jarvis GP Report", () => {
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

import { describe, it } from "vitest";
const Helpers = require("./helpers");

// clear cache all
describe(`[${process.env.JARVIS_ENV}] Test Concurrent Jarvis Clear Cache List`, () => {
  it.concurrent("Clear Cache List: Order State", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        "https://jarvis-api.sociolla.info/order-state/list?clear_cache=true"
      );
      expect(result).toMatchObject(data);
      expect(result).toEqual(expect.not.objectContaining({ fromCache: true }));
    } catch (e) {
      expect(e.message).toBe("Unable to Clear Cache List: Order State");
    }
  });

  it.concurrent("Clear Cache List: Store", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        "https://jarvis-api.sociolla.info/store/list?clear_cache=true"
      );
      expect(result).toMatchObject(data);
      expect(result).toEqual(expect.not.objectContaining({ fromCache: true }));
    } catch (e) {
      expect(e.message).toBe("Unable to Clear Cache List: Store");
    }
  });

  it.concurrent("Clear Cache List: Order Type", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        "https://jarvis-api.sociolla.info/order-type/list?clear_cache=true"
      );
      expect(result).toMatchObject(data);
      expect(result).toEqual(expect.not.objectContaining({ fromCache: true }));
    } catch (e) {
      expect(e.message).toBe("Unable to Clear Cache List: Order Type");
    }
  });

  it.concurrent("Clear Cache List: Platform", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        "https://jarvis-api.sociolla.info/platform/list?clear_cache=true"
      );
      expect(result).toMatchObject(data);
      expect(result).toEqual(expect.not.objectContaining({ fromCache: true }));
    } catch (e) {
      expect(e.message).toBe("Unable to Clear Cache List: Platform");
    }
  });

  it.concurrent("Clear Cache List: Order Payment", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        "https://jarvis-api.sociolla.info/order-payments?length=2000&clear_cache=true"
      );
      expect(result).toMatchObject(data);
      expect(result).toEqual(expect.not.objectContaining({ fromCache: true }));
    } catch (e) {
      expect(e.message).toBe("Unable to Clear Cache List: Order Payment");
    }
  });

  it.concurrent("Clear Cache List: Province", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        "https://jarvis-api.sociolla.info/provinces?length=2000&clear_cache=true"
      );
      expect(result).toMatchObject(data);
      expect(result).toEqual(expect.not.objectContaining({ fromCache: true }));
    } catch (e) {
      expect(e.message).toBe("Unable to Clear Cache List: Province");
    }
  });

  it.concurrent("Clear Cache List: City", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        "https://jarvis-api.sociolla.info/cities?length=2000&clear_cache=true"
      );
      expect(result).toMatchObject(data);
      expect(result).toEqual(expect.not.objectContaining({ fromCache: true }));
    } catch (e) {
      expect(e.message).toBe("Unable to Clear Cache List: City");
    }
  });

  it.concurrent("Clear Cache List: Fullfilment", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        "https://jarvis-api.sociolla.info/fullfilments?length=2000&clear_cache=true"
      );
      expect(result).toMatchObject(data);
      expect(result).toEqual(expect.not.objectContaining({ fromCache: true }));
    } catch (e) {
      expect(e.message).toBe("Unable to Clear Cache List: Fullfilment");
    }
  });

  it.concurrent("Clear Cache List: Additional Field", async ({ expect }) => {
    try {
      const data = { success: true };
      const result = await Helpers.getDataFromAxios(
        "https://jarvis-api.sociolla.info/b2c/order/additional-fields?&clear_cache=true"
      );
      expect(result).toMatchObject(data);
      expect(result).toEqual(expect.not.objectContaining({ fromCache: true }));
    } catch (e) {
      expect(e.message).toBe("Unable to Clear Cache List: Additional Field");
    }
  });
});

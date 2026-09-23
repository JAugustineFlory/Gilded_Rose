import { describe, expect, test } from "vitest";
import { Item, Shop } from "../src/gilded_rose.js";

// These tests are only a starting point. Add tests to pin down every rule
// before refactoring the production code.
describe("Gilded Rose pin-down tests", () => {
  describe("Quality rules", () => { 
    test("normal items degrade in quality by 1 each day", () => {
    const normalItem = new Item("normal", 10, 20);
    const gildedRose = new Shop([normalItem]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(19);
  });

  test('quality of "Aged Brie" increases by 1 each day', () => {
    const agedBrie = new Item("Aged Brie", 10, 20);
    const gildedRose = new Shop([agedBrie]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(21);
  });

  test('quality of "Backstage passes" increases by 3 with 5 days or less', () => {
    const backstagePass = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      20,
    );
    const gildedRose = new Shop([backstagePass]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(23);
  });
  });
  
});

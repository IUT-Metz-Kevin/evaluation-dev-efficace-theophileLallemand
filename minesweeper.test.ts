import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

function MineSweeper(tableauMiné: string): string {
   for (let i = 0; i === tableauMiné.length; i++) {
    if (tableauMiné[i + 1] == "*") return "1";
   }
  return "0"
}

describe("test pour nombre de mine", () => {
  it("zero mine", () => {
     expect(MineSweeper(".")).toBe("0");
  });
  
    it("1 mine", () => {
     expect(MineSweeper("*")).toBe("1");
  });

});

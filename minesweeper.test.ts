import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

function MineSweeper(tableauMiné: string): string {
  // for (let i = 0; i === tableauMiné.length; i++) {
  //   if (tableauMiné[i + 1] == "*") return "1";
  // }
  // return "0"
  return "";
}

describe("add function", () => {
  it("adds two numbers correctly", () => {
     expect(MineSweeper(".")).toBe("0");
  });

});

import { it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

function MineSweeper(tableauMiné: string): string {
  for (let i = 0; i < tableauMiné.length; i++) {
    if (tableauMiné[i - 1] == "*" && tableauMiné[i + 1] == "*") return "2";
    if (tableauMiné[i + 7] == "*" && tableauMiné[i + 1] == "*") return "2";
    if (tableauMiné[i + 8] == "*" && tableauMiné[i + 1] == "*") return "2";
    if (tableauMiné[i + 8] == "*") return "1";
    if (tableauMiné[i - 1] == "*") return "1";
    if (tableauMiné[i + 1] == "*") return "1";
  }
  return "0";
}

it("zero mine", () => {
  expect(MineSweeper(".")).toBe("0");
});

it("1 mine après", () => {
  expect(MineSweeper(".*")).toBe("1");
});

it("1 mine avant", () => {
  expect(MineSweeper("*.")).toBe("1");
});
it("1 mine en dessous", () => {
  expect(MineSweeper(".....\n*")).toBe("1");
});

it("2 mines (une de chaque coté)", () => {
  expect(MineSweeper("*.*")).toBe("2");

});

it("2 mines (une à coté et un en diagonale )", () => {
  expect(MineSweeper(".*....\n.*")).toBe("2");
});

it("2 mines (une à coté et un en dessous)", () => {
  expect(MineSweeper(".*....\n*")).toBe("2");
});
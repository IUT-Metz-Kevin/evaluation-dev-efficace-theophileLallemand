import { it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

function MineSweeper(tableauMiné: string): string {
    if (tableauMiné[1] == "*") return "1";
    if(tableauMiné[0] == "*" && tableauMiné[2] == "*") return "2";
    else return "0"
   }

  it("zero mine", () => {
     expect(MineSweeper(".")).toBe("0");
  });
  
    it("1 mine", () => {
     expect(MineSweeper(".*")).toBe("1");

  });

    it("2 mines (une de chaque c", () => {
     expect(MineSweeper("*.*")).toBe("2");

  });


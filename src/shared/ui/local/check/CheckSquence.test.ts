import { describe, it, expect, beforeEach } from "vitest";
import { v4 as uuidv4 } from "uuid";

import { updateItems } from "./CheckSequence";
import { CheckItemRaw, Position } from "./types";

describe("CheckSequence", () => {
  let items: CheckItemRaw[];

  let id1: string;
  let id2: string;
  let id3: string;
  let id4: string;
  let id5: string;

  beforeEach(() => {
    id1 = uuidv4();
    id2 = uuidv4();
    id3 = uuidv4();
    id4 = uuidv4();
    id5 = uuidv4();

    items = [{ id: id1 }, { id: id2 }, { id: id3 }, { id: id4 }, { id: id5 }];
  });

  describe("First", () => {
    it("First1", () => {
      let res = updateItems(id1, items);

      expect(res[0].state).toBe("subChecked");
      expect(res[0].position).toBe(Position.single);

      res = updateItems(id1, res);

      expect(res[0].state).toBe("checked");

      res = updateItems(id1, res);

      expect(res[0].state).toBe(undefined);
      expect(res[0].position).toBe(Position.single);
    });

    it("First2", () => {
      //ooooo
      let res = updateItems(id2, items);
      res = updateItems(id1, res);

      //**ooo

      expect(res[0].state).toBe("subChecked");
      expect(res[0].position).toBe(Position.left);

      expect(res[1].state).toBe("subChecked");
      expect(res[1].position).toBe(Position.right);

      res = updateItems(id1, res);
      res = updateItems(id1, res);

      res = updateItems(id3, res);
      res = updateItems(id1, res);

      //***oo
      expect(res[1].position).toBe(Position.center);

      res = updateItems(id1, res);
      res = updateItems(id1, res);

      expect(res[1].position).toBe(Position.left);
    });
  });

  describe("Center", () => {
    it("Center1", () => {
      let res = updateItems(id1, items);
      res = updateItems(id2, res);
      res = updateItems(id4, res);
      res = updateItems(id5, res);

      res = updateItems(id3, res);

      expect(res[0].state).toBe("subChecked");
      expect(res[0].position).toBe(Position.left);

      expect(res[1].state).toBe("subChecked");
      expect(res[1].position).toBe(Position.center);

      expect(res[2].state).toBe("subChecked");
      expect(res[2].position).toBe(Position.center);

      expect(res[3].state).toBe("subChecked");
      expect(res[3].position).toBe(Position.center);

      expect(res[4].state).toBe("subChecked");
      expect(res[4].position).toBe(Position.right);

      res = updateItems(id3, res);
      res = updateItems(id3, res);

      expect(res[2].state).toBe(undefined);
      expect(res[2].position).toBe(Position.single);

      expect(res[1].state).toBe("subChecked");
      expect(res[1].position).toBe(Position.right);

      expect(res[3].state).toBe("subChecked");
      expect(res[3].position).toBe(Position.left);
    });

    it("Center2", () => {
      let res = updateItems(id1, items);
      res = updateItems(id2, res);
      res = updateItems(id3, res);

      expect(res[1].state).toBe("subChecked");
      expect(res[1].position).toBe(Position.center);
    });

    it("Center3", () => {
      let res = updateItems(id2, items);
      res = updateItems(id4, res);
      res = updateItems(id3, res);

      //o***o

      expect(res[1].state).toBe("subChecked");
      expect(res[1].position).toBe(Position.left);

      expect(res[2].state).toBe("subChecked");
      expect(res[2].position).toBe(Position.center);

      expect(res[3].state).toBe("subChecked");
      expect(res[3].position).toBe(Position.right);

      res = updateItems(id3, res);
      res = updateItems(id3, res);

      //o*o*o

      expect(res[1].state).toBe("subChecked");
      expect(res[1].position).toBe(Position.single);

      expect(res[3].state).toBe("subChecked");
      expect(res[3].position).toBe(Position.single);
    });

    it("Center4", () => {
      let res = updateItems(id3, items);
      res = updateItems(id3, res);
      res = updateItems(id2, res);

      res = updateItems(id3, res);

      expect(res[1].state).toBe("subChecked");
      expect(res[1].position).toBe(Position.single);

      res = updateItems(id3, res);
      res = updateItems(id3, res);

      res = updateItems(id1, res);

      expect(res[1].state).toBe("subChecked");
      expect(res[1].position).toBe(Position.center);

      res = updateItems(id3, res);

      expect(res[1].state).toBe("subChecked");
      expect(res[1].position).toBe(Position.right);
    });

    it("Center5", () => {
      let res = updateItems(id3, items);
      res = updateItems(id3, res);
      res = updateItems(id4, res);

      res = updateItems(id3, res);

      expect(res[3].position).toBe(Position.single);
    });
  });

  describe("First", () => {
    it("Last1", () => {
      let res = updateItems(id4, items);

      res = updateItems(id4, res);
      res = updateItems(id5, res);
      res = updateItems(id5, res);
      res = updateItems(id5, res);

      expect(res[3].position).toBe(Position.single);

      res = updateItems(id3, res);
      res = updateItems(id5, res);
      res = updateItems(id5, res);
      res = updateItems(id5, res);

      expect(res[3].position).toBe(Position.right);
    });

    it("Last2", () => {
      let res = updateItems(id4, items);
      res = updateItems(id3, res);

      expect(res[3].state).toBe("subChecked");
      expect(res[3].position).toBe(Position.right);

      res = updateItems(id5, res);

      res = updateItems(id3, res);
      res = updateItems(id3, res);

      expect(res[3].state).toBe("subChecked");
      expect(res[3].position).toBe(Position.left);

      res = updateItems(id3, res);

      expect(res[3].state).toBe("subChecked");
      expect(res[3].position).toBe(Position.center);
    });
  });
});

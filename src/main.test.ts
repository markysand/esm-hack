import { beforeEach, expect, test, vi } from "vitest";
import main from "./main.ts";
import * as dep from "./dep.ts";

beforeEach(() => {
  vi.resetAllMocks();
});

test("mocked", () => {
  vi.spyOn(dep, "default").mockImplementation(() => "mocked value");

  expect(main()).toBe(
    "Hello, ESM! I am running in a module context. I use the return value of dep: mocked value",
  );
});

test("unmocked", () => {
  expect(main()).toBe(
    "Hello, ESM! I am running in a module context. I use the return value of dep: dependency value",
  );
});

import slugify from "@sindresorhus/slugify";
import main2 from "./main2.ts";
import { beforeEach, expect, test, vi, type Mock } from "vitest";

vi.mock("@sindresorhus/slugify", { spy: true });

beforeEach(() => {
  vi.resetAllMocks();
});

test("slugification mocked", () => {
  (slugify as Mock<typeof slugify>).mockImplementation((text: string) =>
    text.toUpperCase(),
  );

  expect(main2()).toBe("ME LLAMO MARCOS!");
});

test("slugification", () => {
  expect(main2()).toBe("me-llamo-marcos");
});

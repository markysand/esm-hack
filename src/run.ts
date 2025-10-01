import main from "./main.ts";
import { parse } from "personnummer.js";

main();

const parsed = parse("090301-6681");

console.log("using cjs package", parsed);

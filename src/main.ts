import dep from "./dep.js";

export default function main() {
  const result = `Hello, ESM! I am running in a module context. I use the return value of dep: ${dep()}`;

  console.log(result);

  return result;
}

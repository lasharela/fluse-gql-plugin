import * as fs from "fs";
import { coreTransformerList, testTransform } from "fuse-box";
import * as path from "path";
import MyAwesomeTransformer from "./";

const testFile = path.join(__dirname, "../src/project/test.ts");

const result = testTransform({
  code: fs.readFileSync(testFile).toString(),
  compilerOptions: {
    jsxFactory: "React.createElement"
  },
  props: { module: { absPath: testFile } },
  transformers: [MyAwesomeTransformer({}), ...coreTransformerList]
});
console.log(result.code);

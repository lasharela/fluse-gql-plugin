import { testTransform } from "fuse-box";
import MyAwesomeTransformer from "../MyAwesomeTransformer";

describe("Awesome transformer test", () => {
  const test = (props: { code: string; jsx?: boolean }) => {
    return testTransform({
      code: props.code,
      jsx: props.jsx,
      transformers: [MyAwesomeTransformer({})]
    });
  };

  it("should", () => {
    const res = test({ code: `console.log("hello")` });
    expect(res.code).toMatchSnapshot()
  });
});

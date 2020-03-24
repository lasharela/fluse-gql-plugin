import { Context } from "fuse-box/core/context";
import MyAwesomeTransformer from "./MyAwesomeTransformer";

export function MyAwesomePlugin(target: RegExp | string) {
  return (ctx: Context) => {
    const transformers = ctx.compilerOptions.transformers;
    transformers.push({ opts: { myOptions: "foo" }, script: __filename });
  };
}
// it's important to export "default"
// since FuseBox will require current file and get "default" in order to get access to the transformer
export default MyAwesomeTransformer;

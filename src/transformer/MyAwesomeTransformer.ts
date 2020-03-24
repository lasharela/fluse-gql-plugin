import { ISchema } from "fuse-box/compiler/core/nodeSchema";
import { ASTType } from "fuse-box/compiler/interfaces/AST";
import { ITransformer } from "fuse-box/compiler/interfaces/ITransformer";

export default function MyAwesomeTransformer(myOptions): ITransformer {
  return {
    commonVisitors: props => ({
      onEach: (schema: ISchema) => {
        const { node, replace } = schema;
        if (node.type === ASTType.Literal) {
          if (node.value === "hello") {
            return replace({ type: "Literal", value: "world" });
          }
        }
      }
    })
  };
}

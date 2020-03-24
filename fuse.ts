import { fusebox, sparky } from "fuse-box";
import { tsc } from "fuse-box/sparky/tsc";

import * as path from "path";

class Context {}
const { rm, task } = sparky<Context>(Context);

task("default", async ctx => {
  rm("./dist");
  const transformer = fusebox({
    cache: false,
    dependencies: { serverIgnoreExternals: true },
    entry: "src/transformer/development.ts",
    target: "server",
    watcher: { include: ["src/"] }
  });

  const { onComplete } = await transformer.runDev({
    bundles: {
      exported: true,
      distRoot: path.join(__dirname, "dist"),
      app: { path: "plugin.js" }
    }
  });
  onComplete(({ server }) => server.start());
});

task("test:dist", async ctx => {
  rm("./dist_test");
  const { MyAwesomePlugin } = require("./dist");
  const transformer = fusebox({
    cache: false,
    dependencies: { serverIgnoreExternals: true },
    entry: "src/project/test.ts",
    plugins: [MyAwesomePlugin()],
    target: "server"
  });

  const { onComplete } = await transformer.runDev({
    bundles: {
      distRoot: path.join(__dirname, "dist_test"),
      app: { path: "test_app.js" }
    }
  });
  onComplete(({ server }) => server.start());
});

task("dist", async ctx => {
  rm("./dist");
  await tsc(
    {
      declaration: true,
      module: "CommonJS",
      skipLibCheck: true,
      target: "ES2017",
      outDir: "dist"
    },
    ["src/transformer/index.ts"]
  );
});

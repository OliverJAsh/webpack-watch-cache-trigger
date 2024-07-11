class WatchRunPlugin {
  apply(compiler) {
    compiler.hooks.watchRun.tap("WatchRun", (comp) => {
      if (comp.modifiedFiles) {
        const changedFiles = Array.from(
          comp.modifiedFiles,
          (file) => `\n  ${file}`
        ).join("");
        console.log("===============================");
        console.log("FILES CHANGED:", changedFiles);
        console.log("===============================");
      }
    });
  }
}

export default {
  mode: "development",
  entry: {
    a: "./src/index.js",
    b: "./src/index.js",
    c: "./src/index.js",
    d: "./src/index.js",
    e: "./src/index.js",
    f: "./src/index.js",
    g: "./src/index.js",
    h: "./src/index.js",
    i: "./src/index.js",
    j: "./src/index.js",
    k: "./src/index.js",
    l: "./src/index.js",
  },
  devtool: "source-map",
  cache: {
    type: "filesystem",
  },
  plugins: [new WatchRunPlugin()],
  infrastructureLogging: { debug: true },
};

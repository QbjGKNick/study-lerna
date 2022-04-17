// 用来解析命令行参数的
const yargs = require("yargs/yargs")
console.log(process.argv);
// [
//   'D:\\nodejs\\node.exe',
//   'E:\\study\\lagou\\lerna4\\doc\\lerna4.js',
//   'create',
//   'demo'
// ]
// 获取命令行参数
const argv = process.argv.slice(2) // ['create', 'demo']
const cli = yargs(argv)


// 所有命令的全局选项
const globalOptions = {
  logLevel: {
    type: "string",
    describe: "日志的级别",
    defaultDescription: "info",
    alas: "L"
  }
}

const globalKeys = Object.keys(globalOptions).concat(["help", "version"])
// lerna create demo --logLevel=info
cli
  .options(globalOptions)
  .group(globalKeys, "Global Options:")
  .usage(`Usage: $0 <command> [options]`)
  .demandCommand(1, "至少需要一个命令")
  .strict() // true 严格模式，输入的命令不认识，会报错 ERR！lerna Unknown command "xxx"
  .recommendCommands() // Did you mean list? 如果你写错了，它会帮你提建议
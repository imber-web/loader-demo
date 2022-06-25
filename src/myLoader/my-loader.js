// const loaderUtils = require('loader-utils')
module.exports = function (source) {
  // this.callback(
  //   // 当无法转换原内容时，给 Webpack 返回一个 Error
  //   err: Error | null,
  //   // 原内容转换后的内容
  //   content: string | Buffer,
  //   // 用于把转换后的内容得出原内容的 Source Map，方便调试
  //   sourceMap?: SourceMap,
  //   // 如果本次转换为原内容生成了 AST 语法树，可以把这个 AST 返回,以方便之后需要 AST 的 Loader 复用该 AST，以避免重复生成 AST，提升性能
  //   abstractSyntaxTree?: AST
  // );

  // 告诉 Webpack 本次转换是异步的，Loader 会在 callback 中回调结果
  //  var callback = this.async()
  // someAsyncOperation 代表一些异步的方法
  //  someAsyncOperation(source, function (err, result, sourceMaps, ast) {
  // 通过 callback 返回异步执行后的结果
  //  callback(err, result, sourceMaps, ast)
  //  })

  // // 关闭缓存
  // this.cacheable(false);
  this.cacheable && this.cacheable()
  // 通过 this.callback 告诉 Webpack 返回的结果
  this.callback(null, source.replace('world', ', I am imber'), 'SourceMap')
  return

  // 获取到用户给当前 Loader 传入的 options
  // const options = loaderUtils.getOptions(this)
  // console.log('options-->', options)
  // // 在这里按照你的需求处理 source
  // return source.replace('word', ', I am imber')
}
// 为了在使用 this.callback 返回内容时将 source-map 返回给 Webpack
// loader 必须返回 undefined
// 让 Webpack 知道 loader 返回的结果在 this.callback 中，而不是在 return

// 第一个loader会得到要处理的原始内容，将前一个loader处理的结果传递给下一个。
// 处理完毕，最终的Loader会将处理后的最终结果返回给 Webpack

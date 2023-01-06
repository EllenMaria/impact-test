module.exports = {
  transformIgnorePatterns: [
    // all exceptions must be first line
    "/node_modules/(?!@microsoft/sp-core-library|sp-dialog|other_libs_need_transform)",
  ],
};

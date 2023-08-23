module.exports = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: ["jpg", "png", "gif", "jpeg", "svg"],
  },
};

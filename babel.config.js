module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          navigation: './src/navigation',
          features: './src/features',
          screens: './src/screens',
          config: './src/config',
          store: './src/store',
          hooks: './src/hooks',
          types: './src/types',
          lib: './src/lib',
        },
      },
    ],
  ],
};

## step 1 (webpack 基本配置)
 1. mkdir react-0-1-build & cd react-0-1-build
 2. touch README.md
 3. npm init -y
 5. git init & touch .gitignore & echo -e "/node_modules \nyarn.lock \npackage-lock.json \n/.git \n/dist" >> .gitignore
 6. mkdir config & touch config/webpack.dev.config.js
 7. mkdir src & touch src/index.js & echo -e "console.log('Hello webpack')" > src/index.js
 8. mkdir public & touch public/index.html
 9. git remote add origin https://github.com/zhuyuanmin/react-0-1-build.git

 10. yarn add webpack webpack-cli -D
 11. npx webpack --config ./config/webpack.dev.config.js


## step 2 (别名、后缀、无需引入React、路由、webpack-dev-server)
  1. yarn add
    @babel/core
    @babel/preset-env
    @babel/preset-react
    babel-loader
    @babel/plugin-transform-runtime
    @babel/plugin-proposal-class-properties
  -D
  2. touch .babelrc
  3. yarn add react-router-dom -S
  4. yarn add webpack-dev-server -D
  5. script: webpack serve --config ./config/webpack.dev.config.js

## step 3 (开发代理、source-map、redux、处理html、处理css、处理svg、其他类型、按需加载、提取css、打包加速、打包分析报告、配置抽离合并、配置缓存、环境env)
  1. yarn add redux react-redux redux-thunk -S
  2. yarn add html-webpack-plugin clean-webpack-plugin -D
  3. yarn add style-loader css-loader -D
  4. yarn add postcss-loader postcss-cssnext -D
  5. yarn add url-loader file-loader -D
  6. yarn add react-loadable -D
  7. yarn add mini-css-extract-plugin optimize-css-assets-webpack-plugin -D
  8. yarn add happypack webpack-bundle-analyzer -D
  9. yarn add react-svg -S
  10. yarn add webpack-merge -D
  11. yarn add ip os -D
  12. yarn add cross-env -D
  13. yarn add friendly-errors-webpack-plugin -D
  14. script: cross-env NODE_ENV=development webpack serve --config ./config/webpack.dev.config.js
  15. script: cross-env NODE_ENV=production webpack --config ./config/webpack.prod.config.js

## step 4 (路由懒加载、eslint、常用库、less、antd按需引入、axios、jsx+、antd国际化)
  1. yarn add husky lint-staged
  2. npx husky install
  3. npx husky add .husky/pre-commit "npx lint-staged"
  4. yarn add babel-eslint eslint-plugin-react -D
  5. yarn add antd axios dayjs qs -S
  6. yarn add less less-loader -D
  7. yarn add babel-plugin-import -D
  8. yarn add babel-react-rif babel-react-rfor babel-react-rmodel babel-react-rshow -D

## step 5 (支持typescript)
  1. yarn add @types/react @types/react-dom @types/react-router-dom @types/react-redux -D
  2. touch tsconfig.json
  3. yarn add @babel/preset-typescript -D
  4. yarn add @types/react-loadable -D
  5. yarn add @babel/plugin-proposal-decorators -D
  6. yarn add @babel/plugin-proposal-private-methods -D
  
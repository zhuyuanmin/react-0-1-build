## step 一
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

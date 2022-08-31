# sxp-api-helper

[![https://t.me/@nayiem]](https://telegram.me/@nayiem)



## Install via git

```
git clone https://github.com/dokdo-sh/sxp-api-helper
cd sxp-api-helper
yarn install

node example.js
```

example.js:

```
const sxpApi = require("./lib/sxpApi");
const sxpapi = new sxpApi.default();


(async () => {

  const alias = await sxpapi.getAlias();

  console.log("Alias: " + data.alias);

})();
```

## Notes

### This commond is used to generate a component in the packages (ui) folder
npm run generate:component

### To create an new application inside this monorepo
* move into the apps folder and run the command to create a new project

* After creating the new application add the common packages as dependency in the packge.json

* Instead of duplication extend the configurations from the base configs and add the required one ( you can re-use it from the official examples provided from the turbo.build ) -- this is for the tsconfig.json

* add build script, lint script and dev scripts in package.json

## Creating a new common package inside package

this common folder is a node application 
install node and typescript by 

```

npm init -y 
npx tsc --init 

```
add exports and dependies inside the package.json 

```
"exports":{
    "./config" : "./src/index.ts"
  },
  "dependencies":{
    "@repo/common" : "*"
  },

```

## Note

when ever adding a new package run a global npm install

there can be a build error when the nodejs module tries to get the data or an exported data from the common packages

to fix this we can use some other compiler like esbuild to build the ts file to js files as turbo got some error in default in compiling ts to js files

run this inside the backend ( nodejs application )

```
npx esbuild app.js --bundle --platform=node --target=node10.4
npx esbuild ./src/index.ts --bundle --platform=node --outfile=out.js
``

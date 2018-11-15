#!/usr/bin/env node

const shell = require("shelljs");
const fs = require("fs-extra");

const REQS = require("./requirements/dev.json");
const SCRIPTS = require("./misc/scripts.json");

const APP_NAME = process.argv[2];
const APP_ROOT = `${process.cwd()}/${APP_NAME}`;

const createReactApp = () => {
  return new Promise(resolve => {
    if (APP_NAME) {
      shell.exec(`npx create-react-app ${APP_NAME}`, () => {
        resolve(true);
      });
    } else {
      console.log("No app name was provided.");
      console.log("Provide an app name in the following format: ");
      console.log("create-cc-react-app ", "app-name");
      resolve(false);
    }
  });
};

const installPackages = (req, dev = false) => {
  return new Promise(resolve => {
    console.log(`Installing package: ${req}`);
    shell.exec(
      `yarn add ${req} ${dev ? "--dev" : ""}`,
      { cwd: APP_ROOT },
      () => {
        resolve();
      },
    );
  });
};

const installRequirements = async () => {
  const prodString = REQS.prod.join(" ");
  await installPackages(prodString);

  const devString = REQS.dev.join(" ");
  await installPackages(devString, true);

  console.log("Adding config files...");
  shell.cp("-rf", `${__dirname}/config/.*`, APP_ROOT);
  shell.cp("-rf", `${__dirname}/config/*`, APP_ROOT);

  console.log("Customizing yarn scripts...");
  const basePackageJson = JSON.parse(
    fs.readFileSync(`${APP_ROOT}/package.json`),
  );
  const newPackageJson = {
    ...basePackageJson,
    scripts: {
      ...basePackageJson.scripts,
      ...SCRIPTS.scripts,
    },
    "lint-staged": SCRIPTS["lint-staged"],
  };
  fs.writeFileSync(
    `${APP_ROOT}/package.json`,
    JSON.stringify(newPackageJson, null, 4),
  );
};

const scaffoldProject = () => {
  console.log("Scaffolding templates...");
  shell.rm("-rf", `${APP_ROOT}/src/*`);
  shell.rm("-f", `${APP_ROOT}/public/index.html`);
  shell.cp(
    "-f",
    `${__dirname}/misc/index.html`,
    `${APP_ROOT}/public/index.html`,
  );
  shell.cp("-rf", `${__dirname}/templates/*`, `${APP_ROOT}/src/`);
};

const run = async () => {
  let success = await createReactApp();
  if (!success) {
    console.error("Error running create-react-app");
    return false;
  }

  await installRequirements();
  await scaffoldProject();
};

run();

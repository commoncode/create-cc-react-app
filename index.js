#!/usr/bin/env node

const shell = require("shelljs");
const fs = require("fs-extra");
const colors = require("colors");

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
      logToConsole(
        "No app name was provided.\nProvide an app name in the following format: \ncreate-cc-react-app app-name",
        true,
      );
      resolve(false);
    }
  });
};

const installPackages = (req, dev = false) => {
  return new Promise(resolve => {
    shell.exec(
      `yarn add ${req} ${dev ? "--dev" : ""}`,
      { cwd: APP_ROOT },
      error => {
        if (error) resolve(false);
        resolve(true);
      },
    );
  });
};

const installRequirements = async () => {
  const prodString = REQS.prod.join(" ");
  logToConsole("Installing packages...");
  if (!(await installPackages(prodString))) {
    logToConsole("Error installing packages", true);
    process.exit(1);
  }

  const devString = REQS.dev.join(" ");
  logToConsole("Installing dev packages...");
  if (!(await installPackages(devString, true))) {
    logToConsole("Error installing dev packages", true);
    process.exit(1);
  }

  logToConsole("Adding config files...");
  shell.cp("-rf", `${__dirname}/config/.*`, APP_ROOT);
  shell.cp("-rf", `${__dirname}/config/*`, APP_ROOT);

  logToConsole("Customizing yarn scripts...");
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

const logToConsole = (text, error = false) => {
  console.log("**************************************************");
  console.log();
  console.log(error ? colors.red(text) : colors.green(text));
  console.log();
  console.log("**************************************************");
};

const scaffoldProject = () => {
  logToConsole("Scaffolding templates...");
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
  logToConsole("Creating base CRA...");
  let success = await createReactApp();
  if (!success) {
    logToConsole("Error running create-react-app", true);
    process.exit(1);
  }

  await installRequirements();
  scaffoldProject();
  process.exit(0);
};

run();

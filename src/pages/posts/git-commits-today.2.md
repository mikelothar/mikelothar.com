---
path: "/development/node"
date: "2016-05-21"
title: "NodeJS"
subtitle: "Some tips and tricks to get by"
---

### Upgrade to latest version of NodeJS from terminal
N is a very simple NodeJS version management system. Install it with:
```bash
npm i -g n
```
Once that is installed, upgrade your NodeJS with this command:
```bash
sudo n latest
```

### npm outdated
The command `npm outdated` will check the registry to see if any (or, specific) installed packages are currently outdated. Based on this dependencies in package.json:

```javascript
{
  "glob": "^5.0.15",
  "nothingness": "github:othiym23/nothingness#master",
  "npm": "^3.5.1",
  "once": "^1.3.1"
}
```

... npm outdated will reveal this:

```bash
$ npm outdated
Package      Current   Wanted   Latest  Location
glob          5.0.15   5.0.15    6.0.1  test-outdated-output
nothingness    0.0.3      git      git  test-outdated-output
npm            3.5.1    3.5.2    3.5.1  test-outdated-output
local-dev      0.0.3   linked   linked  test-outdated-output
once           1.3.2    1.3.3    1.3.3  test-outdated-output
```

### Initialize new package.json with default values 
`npm init -f`, this will automatically accept the defaults. The -f stands for force.

### List globally installed packages
`npm -g list --depth 0`, this will show which npm packages you have installed globally.
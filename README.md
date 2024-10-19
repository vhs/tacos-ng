# tacos-ng

TACOS next generation(/rewrite)

# Setup

clone the repository to your a folder on your local machine from github

```shell
git clone git@github.com:vhs/tacos-ng.git
```

navigate to the tacos-ng.code-workspace file and click the open workspace button
on the side vscode should prompt you to install recommended extensions click yes
once the extensions are installed double check to make sure they are enabled before proceeding

In order to install the packages associated with Tacos you must install pnpm. inorder to do so
you must first have npm installed.

if your on windows install npm via this tutorial
https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows

then install pnpm via

```shell
npm install -g pnpm
```

if you run into any issue follow this
https://pnpm.io/installation

In order to install all the packages we need for

right click the root folder in your workspace and click open in integrated terminal

then run

```shell
pnpm install
```

you can then follow up with this by running

```shell
pnpm run build
```

and this will build the backend on your local repository

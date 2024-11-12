# tacos-ng

TACOS next generation(/rewrite)

Documentation

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

and this will build the backend on your local repository.

# Frontend Iteration 2 Feature Tracking

Working page routing
-Navbar with buttons
-Buttons provide user feedback
Proper header
-Displays project name TACOS
-Displays VHS logo
-Has color theme toggle
Dark/light mode toggle
-Toggles between light and dark theme for the entire page Working Device Delete
-Devices delete when delete button is pressed
Working Device Arm
-Devices arm when arm button is pressed
To Learn
Learn SWR
-Reason: custom handling of fetch and api calls
-TODO: implement custom fetch for device

Retrospective
Some pitfalls we fell into during iteration 2 include having unnecessary slowdowns in the back end team, a lack of organization on tasks as well as a hard time defining ambiguous tasks. we addressed these problems by firstly having everyone on the back end team drop a course called CMPT 272, followed by incorporating the use of a task management software, in our case GitHub issues, and finally by creating a High level and low level design documents to define all the ambiguities associated with our system.

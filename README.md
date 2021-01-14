# Canarytrace documentation, issues and questions 
Stack for functional testing web application and for analyze behavior of web browser.

![GitHub issues](https://img.shields.io/github/issues/canarytrace/documentation?color=red&style=flat-square) ![GitHub closed issues](https://img.shields.io/github/issues-closed/canarytrace/documentation?color=green&style=flat-square) 
---

- Documentation is on our [Canarytrace Confluence](https://bit.ly/canary-doc)
- Do you found an error or have you a question, please create [issue](https://github.com/canarytrace/documentation/issues), Thanks 👍


---

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

**Sources**
- [uiDraw](https://undraw.co/search)

### Installation

You can use yarn or node

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Continuous Integration

Some common defaults for linting/formatting have been set for you. If you integrate your project with an open source Continuous Integration system (e.g. Travis CI, CircleCI), you may check for issues using the following command.

```
$ yarn ci
```

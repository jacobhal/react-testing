# Section 3: ESLint and Prettier

ESLint is a linter for checking your code while Prettier is a formatter.

## ESLint

- A popular linter for JavaScript
- Linting keeps code style consistent
  - Especially in projects with multiple developers
- Also catches errors in your code
  - Using variable before defining it
  - Importing from nonexisting file
  - etc

> A linter analyzes static text and marks syntax that breaks rules. Static text means code as it is written, not what happens when the code is run.

## Linting vs Formatting

- Formatters (like Prettier) automatically format code (indents, spacing).
- Linting address format _and_ style
  - example: preferred assertion method. `expect(checkbox).toHaveAttribute(checked)` -> `expect(checkbox).toBeChecked()`

## ESLint Plugins

- Plugins extend ESLint
- Testing Library and Jest-DOM have ESLint plugins
  - Enforce best practices
- https://github.com/testing-library/eslint-plugin-testing-library
- https://github.com/testing-library/eslint-plugin-jest-dom

## Setup ESLint for Testing Library and Jest-DOM

Create React App comes with ESLint installed so we just need the plugins:

`npm install eslint-plugin-testing-library eslint-plugin-jest-dom`

When the plugins are installed, do the following steps:

1. Remove the eslintConfig node in `package.json`.
2. Create a new file in the src folder called `.eslintrc.json` which will hold our eslint config.

Fill the `.eslint` file with the following config:

```JSON
{
    "plugins": [
        "testing-library",
        "jest-dom"
    ],
    "extends": [
        "react-app",
        "react-app/jest",
        "plugin:testing-library/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
    ]
}
```

> This config uses the plugins we just installed and extends some recommended practices as well as the removed nodes from our `package.json`.

There are some public predefined .eslintrc files that we find and use if we like like this one:  
https://github.com/bonnie/bonniedotdev/blob/master/client/.eslintrc.json

## Configure ESLint in VSCode

Now we want to setup VSCode to mark our code when we are not following the linter rules as well as autocorrect things it can. This can be either done for your VSCode instance or for a specific project. In this case, we want to add this configuration for the color-button project only.

### Project Configuration

Do the following steps:

1. Create a new folder at the root level of the project called `.vscode`.
2. Create a new file within that folder called `settings.json`.

Fill the `settings.json` file with the following config:

```JSON
{
    "eslint.options": {
        "configFile": ".eslintrc.json"
    },
    "eslint.validate": ["javascript", "javascriptreact"],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

The final step is to install the ESLint extension in VSCode and then make sure that it is allowed by checking that ESLint has two checkmarks next to it at the bottom of the editor screen.

### Global Configuration

If no `settings.json` is specified for the project, a global settings.json file will be used.  
Go to https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations in order to see where the global settings.json is located on your system.

## Configure Prettier in VSCode

1. Install the extension "Prettier - Code Formatter" in VSCode.
2. Modify the `settings.json` file to include the following lines:
   - `"editor.defaultFormatter": "esbenp.prettier-vscode"`
   - `"editor.formatOnSave": true`

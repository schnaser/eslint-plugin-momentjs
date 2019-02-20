# eslint-plugin-momentjs

Moment.js code style rules. See the documentation in the docs/ folder for more information on the specific rules.

Note: This project has no affiliation with the ESLint team or the Moment.js team.

## Installation

#### Prerequisites

Install [ESLint](http://eslint.org/) if you haven't already. ESLint installation instructions can be found [here](https://eslint.org/docs/user-guide/getting-started).

#### Plugin installation

Install eslint-plugin-momentjs.

    npm i eslint-plugin-momentjs --save-dev

Add the plugin to your `.eslintrc` configuration.

    ...
    "plugins": [
        "momentjs"
    ],
    ...
    
Configure the rules. [More information](https://eslint.org/docs/user-guide/configuring#configuring-rules)

    "rules": {
        "momentjs/some-rule": "warn",
        "momentjs/some-other-rule": "error",
        ...
    }
    
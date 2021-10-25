# eslint-plugin-mindbox-custom

Custom rules for Mindbox frontend

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-mindbox-custom`:

```sh
npm install eslint-plugin-mindbox-custom --save-dev
```

## Usage

Add `mindbox-custom` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "mindbox-custom"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "mindbox-custom/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here



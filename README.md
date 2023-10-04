# CoolAlert

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
  - [Alert Dialog](#alert-dialog)
  - [Input Dialog](#input-dialog)
  - [Customization](#customization)
  - [Button Customization](#button-customization)
- [License](#license)

## Introduction

**CoolAlert** is a JavaScript library that allows you to create customizable alert and input dialogs with ease. It provides a simple way to display alerts with OK and Cancel buttons, as well as input dialogs for user interaction.

## Installation

You can install CoolAlert via npm or by including the script in your HTML.

**Via npm:**

```bash
npm install coolalert
```
**Via HTML**
```html
<script type="module" src="https://bashamega.github.io/coolalert/src/index.js"></script>
```
## Usage
### Alert Dialog
To display a basic alert dialog, use the `CoolAlert` function:
```js
import { CoolAlert } from "coolalert";

CoolAlert("This is a CoolAlert!", { okButton: true });
```
You can customize the text, buttons, and CSS.
### InputDialog
To create an input dialog, use the **CoolInput** function:
```js
import { CoolInput } from "coolalert";

CoolInput("Please enter something:", { okButton: true, cancelButton: true }, { placeholder: "Enter text", name: "userInput" });
```
This allows users to input text and provides OK and Cancel buttons for confirmation.
### Customization
You can customize the appearance of the dialogs by providing custom CSS as a string:
```js
CoolAlert("Customized Alert", { okButton: true }, "your-custom-css-here");
```
### Button Customization
You can also customize the buttons further by providing an object:
```js
CoolAlert("Customized Buttons", { okButton: { text: "Confirm", bg: "green" }, cancelButton: { text: "Abort", bg: "red" } });
```
## License
CoolAlert is licensed under the MIT License.
© 2023 Bashamega


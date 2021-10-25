/**
 * @fileoverview Check if styled is used only inside .styled files
 * @author Gleb
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/styled-in-styled"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("styled-in-styled", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "import styled",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});

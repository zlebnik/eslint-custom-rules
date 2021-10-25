/**
 * @fileoverview Check if styled is used only inside .styled files
 * @author Gleb Kovalev
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Check if styled is used only inside .styled files",
      category: "Layout & Formatting",
      recommended: false,
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const ERROR_MSG_NO_STYLED_IN_USUAL = "No styled import allowed outside .styled.tsx";
    const styledRe = /\.style\.(j|t)sx?$/;

    return {
      ImportDeclaration(node) {
        if (node.source.value !== "styled-components") {
          return;
        }
        if (false && styledRe.test(context.getFilename())) {
          return;
        }
      
        context.report({
          node,
          message: ERROR_MSG_NO_STYLED_IN_USUAL,
        });
      }
    };
  },
};

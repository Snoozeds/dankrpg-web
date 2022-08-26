/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Intro',
      items: ['Intro/welcome'],
      collapsible: true,
      collapsed: false,
    },
    {
      type: 'category',
      label: 'The Basics',
      items: ['The-Basics/variables', 'The-Basics/achievements', 'The-Basics/user-settings', 'The-Basics/server-settings'],
      collapsible: true,
      collapsed: true,
    },
    {
      type: 'category',
      label : 'Commands',
      items: ['Commands/admin', 'Commands/economy', 'Commands/social', 'Commands/fun', 'Commands/misc', 'Commands/shop', 'Commands/dev'],
      collapsible: true,
      collapsed: true,
    }
  ],
};

module.exports = sidebars;

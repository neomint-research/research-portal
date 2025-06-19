// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Whitepaper sidebar with organized structure
  whitepaperSidebar: [
    {
      type: 'category',
      label: 'Whitepapers',
      items: [
        {
          type: 'category',
          label: '2024',
          items: [
            'whitepapers/2024/ai-ethics-framework',
          ],
        },
        {
          type: 'category',
          label: '2025',
          items: [
            'whitepapers/2025/context-aware-systems',
          ],
        },
      ],
    },
  ],
};

export default sidebars;

// /**
//  * Creating a sidebar enables you to:
//  - create an ordered group of docs
//  - render a sidebar for each doc of that group
//  - provide next/previous navigation

//  The sidebars can be generated from the filesystem, or explicitly defined here.

//  Create as many sidebars as you want.
//  */

// // @ts-check

// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// const sidebars = {
//     // By default, Docusaurus generates a sidebar from the docs folder structure
//     tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

//     // But you can create a sidebar manually
//     /*
//   tutorialSidebar: [
//     {
//       type: 'category',
//       label: 'Tutorial',
//       items: ['hello'],
//     },
//   ],
//    */
// };

// module.exports = sidebars;

module.exports = {
    mySidebar: [
        `intro`,
        `getting-started`,
        {
            type: "category",
            label: "What you get",
            items: [`features/sdk`, `features/api-docs`, `features/server`, `features/postman`, `features/openapi`],
        },
        {
            type: "category",
            label: "Defining an API",
            link: {
                type: "doc",
                id: "definition",
            },
            items: [
                `definition/services`,
                `definition/types`,
                `definition/errors`,
                `definition/docs`,
                `definition/imports`,
            ],
        },
        {
            type: "category",
            label: "Generators",
            items: [`generators/supported`, `generators/generators`],
        },
        {
            type: "category",
            label: "CLI",
            items: [`cli/add`, `cli/check`, `cli/generate`, `cli/init`, `cli/upgrade`, `cli/fern.config`],
        },
        {
            type: "category",
            label: "Tutorials",
            items: [`tutorials/express`, `tutorials/fastapi`, `tutorials/spring`],
        },
        {
            type: "link",
            label: "Join Discord",
            href: "https://discord.gg/JkkXumPzcG",
        },
    ],
};

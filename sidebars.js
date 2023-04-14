const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  // docsSidebar: [
  //   'get-started',
  //   'migrate-github-radicle',
  //   'troubleshooting',
  //   {
  //     type: 'category',
  //     label: 'Code hosting',
  //     collapsed: false,
  //     items: [
  //       'using-radicle/create',
  //       'using-radicle/view-share',
  //       'using-radicle/push',
  //       'using-radicle/clone',
  //       'using-radicle/identity',
  //     ]
  //   },
  //   {
  //     type: 'category',
  //     label: 'Code collaboration',
  //     collapsed: false,
  //     items: [
  //       'using-radicle/collaboration',
  //       'using-radicle/issues',
  //       'using-radicle/track-review-merge',
  //     ]
  //   },
  //   {
  //     type: 'category',
  //     label: 'Understanding Radicle',
  //     collapsed: false,
  //     items: [
  //       'understanding-radicle/how-radicle-works',
  //       'understanding-radicle/radicle-versus-github-gitlab',
  //       'understanding-radicle/glossary',
  //       'understanding-radicle/faq',
  //     ]
  //   },
  // ],
  communitySidebar: [
    'community/community',
    'community/ecosystem',
    'community/our-story',
    {
      type: 'category',
      label: 'Governance',
      collapsed: false,
      items: [
        'community/governance-overview',
        'community/manual',
        'community/stay-up-to-date',
      ]
    },
    'community/contributor-directory',
    'community/code-of-conduct',
  ],
};

module.exports = sidebars;

export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb2e69fadbab8942ae7cda9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3mzim2t3',
                  apiId: '60df1927-c59f-4682-8365-2c6aa8e32aa0'
                },
                {
                  buildHookId: '5eb2e69f3c1961d3d0a2e056',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cgpmw4v4',
                  apiId: '4b2686ca-d7b9-4235-9afd-1197a3d42aa0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RealLukeMartin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cgpmw4v4.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

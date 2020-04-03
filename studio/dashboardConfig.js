export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e87aa9b44de2a8b9ae839ec',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-design-portfolio-studio',
                  apiId: '0660a651-5b25-4c90-9235-1c476f352cbc'
                },
                {
                  buildHookId: '5e87aa9b241c7d0763b7f9c8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-design-portfolio',
                  apiId: '956cca58-4072-4190-bd94-928458680443'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aliandor/sanity-gatsby-design-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-design-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

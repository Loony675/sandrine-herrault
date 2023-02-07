import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ateliers',
  title: 'Ateliers',
  type: 'document',

  fields: [
    {name: 'titre', title: 'Titre', type: 'string'},
    {name: 'photo', title: 'Photo', type: 'image', option: {hotspot: true}},
    {name: 'description', title: 'Description', type: 'string'},
    {
      name: 'type',
      title: "Type d'atelier",
      type: 'string',

      options: {
        list: [
          {title: '4-6 ans', value: '4-6ans'},
          {title: '7 ans', value: '7ans'},
          {title: '11 ans', value: '11ans'},
          {title: 'Ado', value: 'ado'},
          {title: '14+ et adulte', value: 'ado+adulte'},
        ],
        layout:'radio'
      },
    },
  ],
})

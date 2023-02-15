import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ancienStage',
  title: 'Anciens stages',
  type: 'document',

  fields: [
    {name: 'titre', title: 'Nom du projet', type: 'string'},
    {name: 'description', title: 'Description du projet', type: 'string'},
    {
      name: 'image',
      title: 'Images',
      type: 'array',
      of: [{name: 'image', title: 'Image', type: 'image', option: {hotspot: true}}],
    },
  ],
})

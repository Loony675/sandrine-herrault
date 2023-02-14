import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stages',
  title: 'Stages',
  type: 'document',

  fields: [
    {name: 'titre', title: 'Titre', type: 'string'},
    {name: 'photo', title: 'Photo', type: 'image', option: {hotspot: true}},
    {name: 'description', title: 'Description', type: 'string'},
    {name:'lieu', title:'Lieu', type:'string'}
  ],
})

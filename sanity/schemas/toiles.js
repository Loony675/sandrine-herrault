import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'oeuvres',
  title: 'Oeuvres',
  type: 'document',
  fields: [
    {name: 'titre', title: 'Titre', type: 'string'},
    {name: 'photo', title: 'Photo', type: 'image', option: {hotspot: true}},
    {name:'description', title:'Description', type:'string'},
    {name:'prix', title:'Prix', type:'number'},
    {name:'enVente', title:'En vente', type:'boolean'},
    {name:'vendu', title:'Vendu', type:'boolean'}
  ],
})

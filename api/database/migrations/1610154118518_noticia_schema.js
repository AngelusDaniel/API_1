'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NoticiaSchema extends Schema {
  up () {
    this.create('noticias', (table) => {
      table.increments();
      table.string("titulo").notNullable();
      table
        .integer("noticia_id")
        .unsigned()
        .references("id")
        .onUpdate("cascade")
        .onDelete("cascade")
        .notNullable();
      table.text("noticia");
      table.timestamps();
    })
  }

  down () {
    this.drop('noticias')
  }
}

module.exports = NoticiaSchema

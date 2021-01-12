'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NoticiaSchema extends Schema {
  up () {
    this.create('noticias', (table) => {
      table.increments();
      table.string("titul").notNullable();
      table.texto("texto");
      table.timestamps();
    });
  }

  down () {
    this.drop('noticias')
  }
}

module.exports = NoticiaSchema;

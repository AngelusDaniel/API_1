'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NoticiaSchema extends Schema {
  up () {
    this.create('noticias', (table) => {
      table.increments();
      table.string("titulo").notNullable();
      table.text("texto");
      table.timestamps();
    });
  }

  down () {
    this.drop('noticias')
  }
}

module.exports = NoticiaSchema;


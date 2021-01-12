'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Noticia = use("App/Models/Noticia");
/**
 * Resourceful controller for interacting with noticias
 */
class NoticiaController {
  /**
   * Show a list of all noticias.
   * GET noticias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const noticia = await Noticia.all();
    return noticia;
  }

  

  /**
   * Create/save a new noticia.
   * POST noticias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only(["titulo","texto"]);
    console.log(auth.user.id);
    const noticia = await Noticia.create(data);
    return noticia;
  }

  /**
   * Display a single noticia.
   * GET noticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const noticia = await Noticia.findOrFail(params.id);
    return noticia;
  }

  

  /**
   * Update noticia details.
   * PUT or PATCH noticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const noticia = await Noticia.findOrFail(params.id);
    const { titulo, texto } = request.only([
      "titulo",
      "texto"
    ]);
    noticia.titulo = titulo;
    noticia.texto = texto;
    await noticia.save();
    return noticia;
  }

  /**
   * Delete a noticia with id.
   * DELETE noticias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const noticia = await Noticia.findOrFail(params.id);
    await noticia.delete();
    return noticia;
  }
}

module.exports = NoticiaController;

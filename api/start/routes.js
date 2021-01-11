'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/', () => {
  return { greeting: 'Hello world in JSONS' }
});
Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

Route.group(() => {
  Route.get('/imagems', "ImagemController.index");
  Route.resource("/noticias", "NoticiaController").apiOnly();
  //Route.post("/noticias", "NoticiaController.store");
  //Route.get("/noticias/:id", "NoticiaController.show");
  //Route.get("/noticias", "NoticiaController.index");
  //Route.put("/noticias/:id", "NoticiaController.update");
  //Route.delete("/noticias/:id", "NoticiaController.destroy")
}).middleware(["auth"]);

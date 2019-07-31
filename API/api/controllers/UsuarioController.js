/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  showAll: async function (req, res) {
    try {
      const usuarios = await Usuario.find();
      return res.ok(usuarios);
    } catch (err) {
      return res.serverError(err);
    }
  },

  show: async function (req, res) {
    try {
      const usuario = await Usuario.findOne({
        id: req.params.id
      });
      return res.ok(usuario);
    } catch (err) {
      return res.serverError(err);
    }
  },

  insert: async function (req, res) {
    try {
      let params = req.allParams();
      const results = await Usuario.create({
        nombre: params.nama,
        apellido: params.universitas,
        cedula: params.cedula,
        imagenUrl: params.imagenURL
      });
      return res.ok(results);
    }
    catch (err){
      return res.serverError(err);
    }
  },

  modify: async function (req, res) {
    try {
      let params = req.allParams();
      let attributes = {};
      if(params.nombre){
        attributes.nombre = params.nombre;
      }
      if(params.apellido){
        attributes.apellido = params.apellido;
      }
      if(params.imagenURL){
        attributes.imagenURL = params.imagenURL;
      }
      if(params.cedula) {
        attributes.cedula = params.cedula;
      }
      const results = await Usuario.update({id: req.params.id}, attributes, {updatedAt: Date.now()});
      return res.ok(results);
    } catch (err) {
      return res.serverError(err);
    }
  },

  delete: async function (req, res) {
    try {
      const results = await Usuario.destroy({
        id: req.params.id
      });
      return res.ok(results);
    } catch (err) {
      return res.serverError(err);
    }
  },

  api: function (req, res) {
    res.send("API Cargada");
  }
};

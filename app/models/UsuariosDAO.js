function UsuariosDAO(connection) {
  this._conn = connection;
}

UsuariosDAO.prototype.inserirUsuario = async function(usuario) {
  try {
    const db = await this._conn;
    const responseMongo = await db.collection('usuario').insertOne(usuario);
    console.log('A resposta do banco', responseMongo)
  } catch (error) {
   console.error('Tivemos um problema no model inserir Usuario');
  }
};

UsuariosDAO.prototype.autenticar = async function(usuario, req, res) {
  try {
    const db = await this._conn;
    const responseMongo = await db.collection('usuario').find(usuario)
    .toArray(function(err, result) {

      if (result[0] != undefined) {
        req.session.autorizado = true
        req.session.usuario = result[0].usuario
        req.session.casa = result[0].casa
      }

      if (req.session.autorizado) {
        res.redirect('jogo')
      } else {
        res.render('index', {validacao: {}})
      }

    });
    console.log('A resposta do banco', responseMongo)
  } catch (error) {
   console.error('Tivemos um problema no model inserir Usuario');
  }
}

module.exports = function() {
  return UsuariosDAO;
};

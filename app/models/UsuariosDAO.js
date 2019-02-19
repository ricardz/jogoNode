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

module.exports = function() {
  return UsuariosDAO;
};

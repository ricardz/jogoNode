function JogoDAO(connection) {
  this._conn = connection;
}

JogoDAO.prototype.inserirUsuario = async function(usuario) {
  try {
    const db = await this._conn;
    const responseMongo = await db.collection('usuario').insertOne(usuario);
    console.log('A resposta do banco', responseMongo)
  } catch (error) {
   console.error('Tivemos um problema no model inserir Usuario');
  }
};

module.exports = function() {
  return JogoDAO;
};

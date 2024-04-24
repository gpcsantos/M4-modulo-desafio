const clienteService = require('./services/cliente.service');

async function getRole(username) {
  if (username == 'admin') {
    return 'admin:0';
  }
  const cliente = await clienteService.getClienteByEmail(username);
  if (cliente) {
    if (cliente.email == username) {
      return `role1:${cliente.clienteId}`;
    }
  }
}

function authorize(...allowed) {
  const isAllowed = (role) => allowed.indexOf(role) > -1;

  return async (req, res, next) => {
    if (req.auth.user) {
      let role = await getRole(req.auth.user);
      const clienteId = role.split(':')[1];
      role = role.split(':')[0];
      if (isAllowed(role)) {
        req.userId = { userId: clienteId, role };
        next();
      } else {
        res.status(401).send('Role not allowed');
      }
    } else {
      res.status(403).send('User not found');
    }
  };
}

module.exports = { authorize };

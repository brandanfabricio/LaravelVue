let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    // saldoEnPesos: 8675,
    saldoEnPesos: 0,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
let Banco = {
  arrayCuentas,
  consultarCliente: function (titular) {
    let cliente = arrayCuentas.filter(
      ({ titularCuenta }) => titularCuenta === titular
    );
    return cliente[0];
  },
  deposito: function (titular, monto) {
    let cliente = arrayCuentas.filter(
      ({ titularCuenta }) => titularCuenta === titular
    );
    cliente[0].saldoEnPesos = cliente[0].saldoEnPesos + monto;
    console.log(
      "Deposito realizado, su nuevo salfo es:",
      cliente[0].saldoEnPesos
    );
  },
  extraccion: function (titular, monto) {
    let cliente = arrayCuentas.filter(
      ({ titularCuenta }) => titularCuenta === titular
    );
    let saldo =  Number(cliente[0].saldoEnPesos)
    if (saldo === 0 ) {
      return console.log(" Fondo insuficientes");
    }
    cliente[0].saldoEnPesos = cliente[0].saldoEnPesos - monto;
    return console.log(
      "Extracción realizada correctamente, su nuevo saldo es: ",
      cliente[0].saldoEnPesos
    );
  },
};

console.log("inicio ", Banco.arrayCuentas[1]);
Banco.deposito("Ramon Connell", 20);
console.log(Banco.consultarCliente("Ramon Connell").saldoEnPesos);
Banco.extraccion("Ramon Connell", 20);
Banco.extraccion("Ramon Connell", 20);
Banco.deposito("Ramon Connell", 20);
Banco.extraccion("Ramon Connell", 5);

// Banco.extraccion("Ramon Connell", 10);
console.log(Banco.consultarCliente("Ramon Connell"));




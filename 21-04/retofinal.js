let saldo = 500000;

let transacciones = [200000, -100000, -300000, 150000, -400000];

for (let i = 0; i < transacciones.length; i++) {
  let movimiento = transacciones[i];

  if (movimiento > 0) {
    saldo += movimiento;
    console.log(`Depósito de $${movimiento}. Saldo actual: $${saldo}`);
  } else {
    if (Math.abs(movimiento) > saldo) {
      console.log("Fondos insuficientes");
    } else {
      saldo += movimiento;
      console.log(`Retiro de $${Math.abs(movimiento)}. Saldo actual: $${saldo}`);
    }
  }
}

console.log("Saldo final:", saldo);
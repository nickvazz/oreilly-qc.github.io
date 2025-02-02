// Programming Quantum Computers
//   by Eric Johnston, Nic Harrigan and Mercedes Gimeno-Segovia
//   O'Reilly Media

// To run this online, go to http://oreilly-qc.github.io?p=5-3

// Initialize
num_qubits = 6;
qc.reset(num_qubits);
a = qint.new(4, 'a');
b = qint.new(2, 'b');
// prepare
qc.label('prepare');
a.write(1);
a.hadamard(0x4);
a.phase(45, 0x4);
b.write(1);
b.hadamard(0x2);
b.phase(90, 0x2);
qc.nop();
qc.label('');
qc.nop();

qc.label('a += b');

// a += b * b
a.addSquared(b);

qc.label('');
qc.nop();

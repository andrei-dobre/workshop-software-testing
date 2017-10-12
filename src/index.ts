import { BasePipe } from './pipe/base-pipe.class';
import { OperationsCatalog } from './operations/operations-catalog.class';
import { Program } from './program/program.class';

const operationsCatalog = new OperationsCatalog();
const pipe = new BasePipe();

const program = new Program(operationsCatalog, pipe);

console.clear();
(async function dontKillMe() { await program.run(); })();
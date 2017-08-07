const program = require('commander');

program
  .option('--url <url>', 'swagger.json location')
  .option('--path <path>', 'swagger.json file path')
  .parse(process.argv);

console.log(program.url);
console.log(program.path);

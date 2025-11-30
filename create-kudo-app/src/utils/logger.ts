import pc from 'picocolors';

export const logger = {
  info: (message: string) => {
    console.log(pc.blue('ℹ'), message);
  },
  success: (message: string) => {
    console.log(pc.green('✔'), message);
  },
  error: (message: string) => {
    console.log(pc.red('✖'), message);
  },
  warn: (message: string) => {
    console.log(pc.yellow('⚠'), message);
  },
  step: (step: number, total: number, message: string) => {
    console.log(pc.cyan(`[${step}/${total}]`), message);
  },
  title: (message: string) => {
    console.log('\n' + pc.bold(pc.magenta(message)) + '\n');
  },
};

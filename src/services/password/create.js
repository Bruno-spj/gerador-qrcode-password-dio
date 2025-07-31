import chalk from "chalk";
import handle from "./handle.js";


async function passwordCreat() {
  console.log(chalk.greenBright("Bem-vindo ao Gerador de Senhas!"));
  const password = await handle();
  console.log(chalk.blueBright("Sua senha gerada é: "),password);
  console.log(chalk.greenBright("Senha gerada com sucesso!"));
}

export default passwordCreat;
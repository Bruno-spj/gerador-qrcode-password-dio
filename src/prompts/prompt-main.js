import chalk from "chalk";

const mainPrompt = [
  {
    name: "select",
    description: chalk.greenBright("Escolha a ferramenta (1 - QR Code), (2 - Gerador de Senhas)"),
    pattern: /^[1-2]$/,
    message: chalk.red.bold(
      "Opção inválida. Por favor, escolha 1 ou 2."
    ),
    required: true,
  }
]
export default mainPrompt;
import chalk from "chalk";

const qrcodePrompt = [
  {
    name: "qrcode",
    description: chalk.greenBright("Digite o texto ou URL para gerar o QR Code:"),
  },
  {
    name: "type",
    description: chalk.greenBright("Escolha o tipo de QR Code (1 - NORMAL, ou 2 - TERMINAL):"),
    pattern: /^[1-2]$/,
    message: chalk.red.bold(
      "Opção inválida. Por favor, escolha 1 para NORMAL ou 2 para TERMINAL."
    ),
    required: true,
  }
]

export default qrcodePrompt;  
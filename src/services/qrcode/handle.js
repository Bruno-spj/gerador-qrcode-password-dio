import qrcode from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
  if (err) {
    console.error("Erro ao obter os dados do QR Code:", err);
    return;
  }

  const isSmall = result.type === "2";
  qrcode.generate(result.qrcode, {
    small: isSmall
  }, (qrcode) => {
    console.log(chalk.greenBright("\nQR Code gerado com sucesso!"));
    console.log(qrcode);
    console.log(chalk.blueBright("\nLink do QR Code: "), result.qrcode);
  });
}

export default handle;
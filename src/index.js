import prompt from "prompt"
import mainPrompt from "./prompts/prompt-main.js";
import createQrCode from "./services/qrcode/create.js";
import passwordCreat from "./services/password/create.js";

async function main() {
  prompt.get(mainPrompt, async (err, result) => {
    if (result.select === "1") {
      await createQrCode();
    } else if (result.select === "2") {
      await passwordCreat();
    }
  });

   prompt.start();
}
main()
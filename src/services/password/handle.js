import permissionCharacters from "./permission-characters.js";

async function handle() {
  let characters = [];
  let password = "";
  
  const passwordLength = process.env.MIN_LENGTH;
  characters = await permissionCharacters();

   for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

export default handle;
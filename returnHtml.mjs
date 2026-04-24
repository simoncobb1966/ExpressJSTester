import { fileURLToPath } from "url";
import { dirname } from "path";

export const returnHtml = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const absolutePath = __dirname + "/html.html";
  res.sendFile(absolutePath);
};

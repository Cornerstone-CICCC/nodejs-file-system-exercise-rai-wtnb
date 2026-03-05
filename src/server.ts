import http from "http";
import fs from "fs";
import path from "path";

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/view-image") {
    const imagePath = path.join(__dirname, "images", "veryhappydog.jpg");

    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading image");
        return;
      }

      res.writeHead(200, { "Content-Type": "image/jpeg" });
      res.end(data);
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

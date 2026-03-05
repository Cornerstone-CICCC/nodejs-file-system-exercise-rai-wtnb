"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const PORT = 3000;
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/view-image") {
        const imagePath = path_1.default.join(__dirname, "images", "veryhappydog.jpg");
        fs_1.default.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error reading image");
                return;
            }
            res.writeHead(200, { "Content-Type": "image/jpeg" });
            res.end(data);
        });
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

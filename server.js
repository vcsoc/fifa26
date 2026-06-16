const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT) || 8000;
const root = __dirname;
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp"
};

http.createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || "/").split("?")[0]);
  const safePath = path.normalize(requestPath).replace(/^([.][.][/\\])+/, "");
  let filePath = path.join(root, safePath === "/" ? "index.html" : safePath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (!statError && stats.isDirectory()) filePath = path.join(filePath, "index.html");

    fs.readFile(filePath, (readError, content) => {
      if (readError) {
        res.writeHead(readError.code === "ENOENT" ? 404 : 500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(readError.code === "ENOENT" ? "Not found" : "Server error");
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
      res.end(content);
    });
  });
}).listen(port, () => {
  console.log(`FIFA 2026 Scoreboard running at http://localhost:${port}`);
});

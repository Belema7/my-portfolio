const fs = require('fs');
let content = fs.readFileSync('data/posts.ts', 'utf-8');

// Pattern 1
content = content.replace(/Browser\n   ↓\nDNS\n   ↓\nInternet\n   ↓\nCloud Server\n   ↓\nFirewall\n   ↓\nNginx\n   ↓\nBackend Application\n   ↓\nDatabase/g, "Browser → DNS → Internet → Cloud Server → Firewall → Nginx → Backend App → Database");

// Pattern 2
content = content.replace(/Browser:\n\n"Can I have the homepage\?"\n\n↓\n\nServer:\n\n"Sure! Here it is\."/g, 'Browser: "Can I have the homepage?"  →  Server: "Sure! Here it is."');

// Pattern 3
content = content.replace(/Browser:\n\n"Can I log in with this email and password\?"\n\n↓\n\nServer:\n\n"Yes, welcome back\."\n\nor\n\n"No, your password is incorrect\."/g, 'Browser: "Can I log in with this email and password?"  →  Server: "Yes, welcome back." (or) "No, your password is incorrect."');

// Pattern 4
content = content.replace(/Start Line\n\n↓\n\nHeaders\n\n↓\n\nBlank Line\n\n↓\n\nBody/g, 'Start Line  →  Headers  →  Blank Line  →  Body');

// Pattern 5
content = content.replace(/POST\n\n↓\n\nto \/login\n\n↓\n\nI'm sending JSON\n\n↓\n\nHere's the data/g, "POST  →  to /login  →  I'm sending JSON  →  Here's the data");

// Pattern 6
content = content.replace(/Status Line\n\n↓\n\nHeaders\n\n↓\n\nBlank Line\n\n↓\n\nBody/g, 'Status Line  →  Headers  →  Blank Line  →  Body');

// Pattern 7
content = content.replace(/HTTP Version\n\n↓\n\nStatus Code\n\n↓\n\nStatus Message/g, 'HTTP Version  →  Status Code  →  Status Message');

// Pattern 8
content = content.replace(/REQUEST\n\nPOST \/login HTTP\/1\.1\n\nHeaders\.\.\.\n\nBody\.\.\.\n\n        ↓\n\nSERVER THINKS\n\n        ↓\n\nRESPONSE\n\nHTTP\/1\.1 200 OK\n\nHeaders\.\.\.\n\nBody\.\.\./g, 'REQUEST (POST /login)  →  SERVER THINKS  →  RESPONSE (200 OK)');

// Pattern 9
content = content.replace(/Login\n\n↓\n\nReceive JWT\n\n↓\n\nStore JWT\n\n↓\n\nSend JWT on every request/g, 'Login  →  Receive JWT  →  Store JWT  →  Send JWT on every request');

// Pattern 10
content = content.replace(/GET\n\nPOST\n\nPUT\n\nPATCH\n\nDELETE/g, 'GET, POST, PUT, PATCH, DELETE');
content = content.replace(/\/users\n\n\/products\n\n\/login\n\n\/api\/tours/g, '/users, /products, /login, /api/tours');
content = content.replace(/HTTP\/1\.1\n\nHTTP\/2\n\nHTTP\/3/g, 'HTTP/1.1, HTTP/2, HTTP/3');
content = content.replace(/200 OK\n\n201 Created\n\n404 Not Found\n\n500 Internal Server Error/g, '200 OK, 201 Created, 404 Not Found, 500 Internal Server Error');
content = content.replace(/application\/json\n\ntext\/html\n\nimage\/png\n\napplication\/pdf/g, 'application/json, text/html, image/png, application/pdf');
content = content.replace(/URL\n\n\+\n\nJSON/g, 'URL + JSON');

fs.writeFileSync('data/posts.ts', content);
console.log("Done replacing vertical blocks!");

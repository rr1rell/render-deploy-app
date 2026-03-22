const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Render Deploy</title>
        <style>
            body { font-family: Arial; text-align: center; padding: 50px; background: #f0f0f0; }
            h1 { color: #333; }
            .container { background: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto; }
            .version { color: #666; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Deployed via GitHub Actions!</h1>
            <p>This app is automatically deployed to Render.com when you push to GitHub.</p>
            <div class="version">
                <p>Version: 1.0.0</p>
                <p>Last updated: ${new Date().toLocaleString()}</p>
            </div>
        </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

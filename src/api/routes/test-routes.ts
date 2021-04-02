import { Router, Response, Request } from "express";

const TEST_ROUTES = Router();

TEST_ROUTES.get('/', (req: Request, resp: Response) => {
  resp.json({
    ok: true,
    message: 'Test route online'
  });
});


TEST_ROUTES.get('/html', (req: Request, resp: Response) => {
  const STYLE = `
    body{
      font-family: Arial, sans-serif;
      margin:0;
      padding:0;
    }
    nav{
      background-color:green;
      color:white;
      padding:10px;
    }

    .text-center{
      text-aling:center;
    }

    .w-100{
      width:100%;
    }
  `;
  const TEMPLATE = `
  <!doctype html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Test Page Api Nodej-E-TS</title>

          <style>${STYLE}</style>
      </head>
      <body>
        <nav>
            <h2>Test Page</h2>
        </nav>
        <div class="w-100">
            <h1 class="text-center">Api Rest NodeJs Expresss and TypeScript</h1>
        </div>
      </body>
    </html>
  `;

  resp.send(TEMPLATE);
});


export default TEST_ROUTES;
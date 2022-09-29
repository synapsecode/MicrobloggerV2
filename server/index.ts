import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('MicrobloggerV2');
});

app.listen(port, () => {
    console.log(`MicrobloggerV2 server running on port ${port} ⚡️`);
});

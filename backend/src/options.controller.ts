import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class OptionsController {
    @All('*')
    handleOptions(@Req() req: Request, @Res() res: Response) {
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
            res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
            return res.status(204).end();
        }
        return res.status(404).json({ message: 'Not Found' });
    }
}

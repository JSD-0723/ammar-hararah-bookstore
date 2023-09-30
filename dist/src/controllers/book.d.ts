import { Request, Response } from 'express';
declare class BookController {
    create(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    getAll(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    remove(req: Request, res: Response): Promise<void>;
}
declare const _default: BookController;
export default _default;

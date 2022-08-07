import { Request, Response } from 'express'

import { CreateProductService } from '../../services/product/CreateProductService'

class CreateProductController{
    async handle(req: Request, res:Response){
        const { id, amount, customer_id} = req.body;
        
        const createProductService = new CreateProductService();

        const product = await  createProductService.execute({
            id,
            amount,
            customer_id
        })     

        return res.json(product)
    }
}
export { CreateProductController }
import { Request, Response } from 'express'

import { CreateAddressService} from '../../services/address/CreateAddressService'


class CreateAddressController{
    async handle(req: Request, res:Response){
        const { zip_code,house_number,street,neighborhood,city,uf,complement,reference,customer_id,product_id} = req.body;
        
        const createAddressService = new CreateAddressService();

        const address = await  createAddressService.execute({
            zip_code,
            house_number,
            street,
            neighborhood,
            city,
            uf,
            complement,
            reference,
            customer_id,
            product_id
        })     

        return res.json(address)
    }
}
export { CreateAddressController }
import { Request, Response } from 'express'

import { DetailCustomerServices  } from '../../services/customer/DetailCustomerServices'

class DetailCustomerController{
    async handle( req:Request, res:Response){

        const customer_id = req.customer_id;
       
        
        const detailCustomerService = new DetailCustomerServices();
        
        const customer = await detailCustomerService.execute(customer_id);

        return res.json(customer);
    }

}
export { DetailCustomerController}
import { Request, response, Response, Router } from 'express'
import { CreateCustomerService } from '../../services/customer/CreateCustomerService'

class CreateCustomerController{
    async handle( req: Request , res:Response ) {
       const { name, document, password  } = req.body;

       const createCustomerService = new CreateCustomerService();
       const customer =  await createCustomerService.execute({
            name,
            document,
            password
       });

        return res.json(customer)
    }
}

export { CreateCustomerController}
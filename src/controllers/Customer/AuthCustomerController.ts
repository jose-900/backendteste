import  {  Request , Response  } from 'express'
import { AuthCustomerServices } from '../../services/customer/AuthCustomerServices'
class AuthCustomerController{
    async handle(req: Request , res: Response){
        const { name, password} = req.body;
        
        const authCustomerService = new AuthCustomerServices();

        const auth =  await authCustomerService.execute({
            name,
            password
        })
        
        return res.json(auth);
    
    }
}

export { AuthCustomerController }
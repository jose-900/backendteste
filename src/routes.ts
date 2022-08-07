import { Router } from 'express';
import { CreateCustomerController } from './controllers/Customer/CreateCustomerController'
import {  AuthCustomerController} from './controllers/Customer/AuthCustomerController'
import { DetailCustomerController } from './controllers/Customer/DetailCustomerController'
import { CreateProductController } from './controllers/Product/CreateProductController'
import { CreateAddressController } from './controllers/Address/CreateAddressController'


const router = Router();
//-- Rotas Customers --
router.post('/customers', new CreateCustomerController().handle)

router.post('/session', new AuthCustomerController().handle)

router.get('/customer/info' ,  new DetailCustomerController().handle )

//-- Rota Product --
router.post('/product',  new CreateProductController().handle)

//-- Rota Address 
router.post('/address', new CreateAddressController().handle)

export { router};
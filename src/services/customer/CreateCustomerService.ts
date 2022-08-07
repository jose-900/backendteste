import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface CustomerRequest{
    name: string;
    document: string;
    password: string;
}

class CreateCustomerService{
    async execute({ name,document,password } : CustomerRequest){
        if(!document){
            throw new Error("Document incorrect") 
         }
         const userAlreadyExist = await prismaClient.customer.findFirst({
            where: {
                document: document
            }
         })
         if(userAlreadyExist){
            throw new Error("Customer already exists");
            }
          
         const passwordHash = await hash(password, 8)
         
         const customer = await prismaClient.customer.create({
                data:{
                    name: name,
                    document: document,
                    password: passwordHash,
                },
                select:{
                    name: true,
                    document: true,
                }

          })

        return customer;
    }
}

export { CreateCustomerService }
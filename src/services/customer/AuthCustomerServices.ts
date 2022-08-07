import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest{
    name: string;
    password: string;
}

class AuthCustomerServices{
    async execute({ name, password }: AuthRequest){
        const customer = await prismaClient.customer.findFirst({
            where: {
                name: name
            }
        })
        if(!customer){
            throw new Error("Customer/password incorrect");
        }
 
        const passwordMatch = await compare(password, customer.password)
        
        if(!passwordMatch){
            throw new Error("Customer/password incorrect");
        }

        const token = sign(
            {
                name: customer.name,
                document: customer.document
            },
            process.env.JWT_SECRET,
            {
                subject: customer.customer_id,
                expiresIn:'30d'
            }
        )
        return {
          name: customer.name,
          document: customer.document,
          token: token    
        }
    }
}

export { AuthCustomerServices };
import prismaClient from "../../prisma";

class DetailCustomerServices{
    async execute(customer_id: string){
    
        const customer =  await prismaClient.customer.findFirst({
            where:{
                customer_id: customer_id
            },
            select:{
                name: true,
                document: true,
            }
        }) 

        return customer;
    }
}
export { DetailCustomerServices }
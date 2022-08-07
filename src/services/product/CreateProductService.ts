import prismaClient from "../../prisma";

interface ProductRequest{
    id: string;
    amount: string;
    customer_id: string;
}

class CreateProductService{
    async execute({ id, amount, customer_id}: ProductRequest){
    
    const product = await prismaClient.product.create({
        data:{
            id: id,
            amount: amount,
            customer_id: customer_id
        }
    })

        return product;

    }
}

export { CreateProductService }
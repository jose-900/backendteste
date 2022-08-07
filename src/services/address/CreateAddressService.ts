import prismaClient from "../../prisma";

interface AddressRequest{
    zip_code:string;
    house_number: string;
    street: string;
    neighborhood: string;
    city: string;
    uf: string;
    complement: string;
    reference: string;
    customer_id: string;
    product_id: string;
}

class CreateAddressService{
    async execute({zip_code,house_number,street,neighborhood,city,uf,complement,reference,customer_id,product_id}: AddressRequest){
        const address = await prismaClient.address.create({
          data:{
            zip_code:zip_code,
            house_number:house_number,
            street:street,
            neighborhood:neighborhood,
            city:city,
            uf:uf,
            complement:complement,
            reference:reference,
            customer_id:customer_id,
            product_id:product_id
          }  

        })
        return address;
    }
}

export { CreateAddressService}

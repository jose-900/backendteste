import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload{
    sub: string;
}


export function isAuthenticated(
    req: Request,
    res:Response,
    next: NextFunction

){
    //recebe o token
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")
    
   try {
    //validando o token
    const {sub} = verify(
        token,
        process.env.JWT_SECRET
    )as Payload;

    // resgatando o id do token e incluindo em uma variavel customer_id no request.
    req.customer_id = sub;

    return next();

   } catch (error) {
        return res.status(401).end();
   }
    

}
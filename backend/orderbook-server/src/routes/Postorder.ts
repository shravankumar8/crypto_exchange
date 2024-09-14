import { OrderInputSchema } from "../types"

export const Postorder=(req:Request,res:Response)=>{
    const order=OrderInputSchema.safeParse(req.body);
    if(!order.success){
        res.status(400).send({message:order.error.message});
        return
    }
    const {baseAsset,quoteAsset,price,quantity,side,kind}=order.data
    const orderId=getOrderId();



}
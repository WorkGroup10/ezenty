exports.getProducts=(req,res,next)=> {
    res.status(200).json({
        success:true,
        message:"En esta ruta usted va a poder todos los productos"
    })
}
const {Product} = require('./../Model/ProductModel');

exports.getAllProduct= async (req, res) => 
{ 
    try
    { 
       

        const product = await Product.find()

       //SEND RESPONSE
        res
        .status(202)
        .json({
            status: 'Success',
            result: product.length,
            data: { product }
        });
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send('Server error');
        return;
    }   
}
   
exports.createProduct = async (req, res)=> 
{   
    try {
    const NewProduct = await Product.create(req.body)
            res.status(202).json({
            status: 'Success',
            data: {
                Product : NewProduct
            }
        });
    } 
    catch (error) 
    {
        res.status(404).json({
                    status: 'Error',
                    message: 'Invalid Product'
                })
    }

}
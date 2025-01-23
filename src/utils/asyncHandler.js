const asuncHandlaer = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res,next)).catch((err)=> next(err))
    }
 }


export { asuncHandlaer }


//handler  fr try catch
// const asuncHandlaer = (fun) =>async (req, res, next) => {
//     try {
//         await fun(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message : error.message
//         })
//     }
// }
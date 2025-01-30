const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
 }


export { asyncHandler };


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
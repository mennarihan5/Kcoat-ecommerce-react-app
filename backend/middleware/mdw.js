const mid = (req, res, next) =>{
    console.log("Sending middleware")

    next()
}

module.exports = {mid}
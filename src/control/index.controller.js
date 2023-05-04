const path = require("path")
const controller = {}

controller.index = (req, res) => {
    res.sendFile(path.resolve(__dirname, "../vistas/index.html"))
}
//poder llamar desde otra funcion 
module.exports = controller  
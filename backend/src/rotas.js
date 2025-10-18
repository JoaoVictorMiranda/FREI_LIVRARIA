import loginController from './controller/loginController.js'
import livrosCotroller from './controller/livrosController.js'


export default function Navegar(api) {
    api.use(loginController)
    api.use(livrosCotroller)
}
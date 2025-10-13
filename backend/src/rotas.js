import loginController from './controller/loginController.js'



export default function Navegar(api){
api.use(loginController)
}
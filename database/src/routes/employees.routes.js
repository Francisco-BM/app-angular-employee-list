const {Router}=require('express')
const router=Router()



const employeesCtrl=require('../controller/employeesControllers')
//CRUD
//CREATE-READ-UPDATE-DELETE

//las rutas tienen el prefijo /api/employees
router.get('/',employeesCtrl.getEmployees);

router.post('/', employeesCtrl.createEmployee);

router.get('/:id',employeesCtrl.getEmployee);

router.put('/:id', employeesCtrl.editEmployee);

router.delete('/:id',employeesCtrl.deleteEmployees);





module.exports=router



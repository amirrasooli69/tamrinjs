const router = require('express').Router();
// const router = express.Router();
const todosController = require('../controllers/todo');


router.post('/' , todosController.create);
// fill todo when start page // other use refresh
router.get('/', todosController.fetchAll);

router.delete('/', todosController.delete);

router.put('/' , todosController.update);

module.exports = router;
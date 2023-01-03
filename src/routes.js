const { Router } = require('express');
const controler = require ("./controler")
const router = Router();

router.get('/', controler.getRegisters)
router.get('/:id', controler.getRegistersId)

module.exports = router;
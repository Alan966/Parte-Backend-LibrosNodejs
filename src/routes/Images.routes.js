const express = require('express');
const router = express.Router();
const { list, createImage, imageId, read, image, remove } = require('../controllers/imagesControllers');

router.get('/all', list);
router.param("imageId", imageId)
router.post('/create', createImage);
router.get('/:imageId', read);
router.get('/image/:imageId', image);
router.delete('/:imageId', remove);

module.exports = router;
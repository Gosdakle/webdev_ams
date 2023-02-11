import express, {Router} from 'express';
const router = express.Router();
const returnsuccess = {"success": true};

const Newscategories = [
    {"id":1, "name":"Их уншсан"},
    {"id":2, "name":"Эрэлттэй"},
    {"id":1, "name":"Цаг үе"},
    {"id":1, "name":"Спорт"},
    {"id":1, "name":"Олон улс"},
]
/**
 * @openapi
 * /category
 *   get:
 *     description: buh category
 *     responses:
 *       200:
 *         description: category uud json helbereer
 *       500:
 *         description: error...
 */
router.get('/', (req, res)=>{
    res.send(Newscategories);
})
/**
 * @openapi
 * /category
 *   get:
 *     description: buh category
 *     responses:
 *       200:
 *         description: category uud json helbereer
 *       500:
 *         description: error...
 */

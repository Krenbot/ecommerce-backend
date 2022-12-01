const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product }]
    })
    res.json(allCategories)
  } catch (err) {
    res.status(500).json(err)
  }
}); //DONE

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  console.log(req.params)
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: Product }]
    })
    res.json(category)
  } catch (err) {
    res.status(500).json(err)
  }
}); //DONE

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body)
    res.json(category)
  } catch (err) {
    res.status(500).json(err)
  }
}); //DONE

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json('Category updated!')
  } catch(err){
    res.status(500).json(err)
  }
}); //DONE

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const result = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}); //DONE

module.exports = router;
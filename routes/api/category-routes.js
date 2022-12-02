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

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.id
      },
      // include its associated Products
      include: [{ model: Product }]
    })
    res.json(category)
  } catch (err) {
    res.status(500).json(err)
  }
}); //DONE

// create a new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body)
    res.json(category)
  } catch (err) {
    res.status(500).json(err)
  }
}); //DONE

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json('Category updated!')
  } catch (err) {
    res.status(500).json(err)
  }
}); //DONE

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
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
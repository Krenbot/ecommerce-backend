const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//Get all tags
router.get('/', async (req, res) => {
  try {
    const tag = await Tag.findAll({
      include: [Product]
    })
    res.json(tag)
  } catch (err) {
    res.status(500).json(err)
  }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const singleTag = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
    res.json(singleTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const productTag = await ProductTag.create(req.body)
    res.json(productTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    await ProductTag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json('Product Tag updated!')
  } catch (err) {
    res.status(500).json(err)
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const result = await ProductTag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json('Product Tag Deleted!')
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
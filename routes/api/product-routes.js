const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    const product = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  try {
    const product = await Product.findOne(req.params.id, {
      include: [Category, Tag],
    });
    if (!product) {
      res
        .status(400)
        .json({ message: "Product not found. Try different ID number." });
      return;
    }
    res.json(product)
  } catch (err) {
    res.status(500).json(err)
  }
});

// create new product NOT DONE
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.json(newProduct)
  } catch (err) {
    res.status(500).json(err)
  }
});

// update product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(product)
  } catch (err) {
    res.status(500).json(err)
  }
});

//Delete one product by its id value
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(product)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;

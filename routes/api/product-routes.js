const router = require('express').Router();
const e = require('express');
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
  try {
    const singleProduct = await Product.findOne({
      where: {
        id: req.params.id
      },
      include: [Category, Tag]
    })
    res.json(singleProduct)
  } catch (err) {
    res.status(500).json(err)
  }
});


// create new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body)
    if (req.body.tagIds?.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      const productTagIds = await ProductTag.bulkCreate(productTagIdArr);
      res.status(200).json(productTagIds);
    } else {
      // if no product tags, just respond
      res.status(200).json(product);
    }
  } catch (err) {
    console.error(err)
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
    const productTags = await ProductTag.findAll({ where: { product_id: req.params.id } });
    // get list of current tag_ids
    const productTagIds = productTags.map(({ tag_id }) => tag_id);
    // create filtered list of new tag_ids
    const newProductTags = req.body.tagIds
      ?.filter((tag_id) => !productTagIds.includes(tag_id))
      .map((tag_id) => {
        return {
          product_id: req.params.id,
          tag_id,
        };
      }) || []
    // figure out which ones to remove
    const productTagsToRemove = productTags
      ?.filter(({ tag_id }) => !req.body.tagIds?.includes(tag_id))
      .map(({ id }) => id) || []

    // run both actions
    const updatedProductTags = await Promise.all([
      ProductTag.destroy({ where: { id: productTagsToRemove } }),
      ProductTag.bulkCreate(newProductTags),
    ]);
    res.json(updatedProductTags)
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
});

//Delete one product by its id value
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json('Product Deleted!')
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;

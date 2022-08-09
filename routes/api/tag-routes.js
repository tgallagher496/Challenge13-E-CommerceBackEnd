const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tags = await Tag.findAll();
    res.status(200).json(tags);
  } catch (err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagId = await Tag.findByPk(req.params.id,{
      include:[{}]
    });

    if(!tagId){
      res.status(404).json({message: 'No such Product ID exists'})
      return;
    }
    res.status(200).json(tagID);
  } catch (err){
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try{
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try{
    const tag = await Category.destroy({
      where:{id: req.params.id}
    });
    if(!tag){
      res.status(404).json({message: 'No tag has this id'});
      return;
    }
    res.status(200).json(tag);
  } catch (err){
    res.status(500).json(err);
  }
});

module.exports = router;

const foodsService = require("../services/foods");

const foodsController = {
  findAll: async function (req, res){
    try {
      const foods = await foodsService.findAll();
      res.json(foods);
    } catch (error) {
      res.status(500).json({message: "Houve um erro no servidor!"});
    }
  },

  findById: async function (req, res){
    try {
      const { id } = req.params;
      const food = await foodsService.findById(id);

      if (!food) return res.status(404).json({message: "Alimento não encontrado!"});

      res.json(food);
    } catch (error) {
      res.status(500).json({message: "Houve um erro no servidor!"});
    }
  },

  create: async function (req, res){
    try {
      const foodData = req.body;
      const newFood = await foodsService.create(foodData);
      res.status(201).json(newFood);
    } catch (error) {
      res.status(500).json({message: "Houve um erro no servidor!"});
    }
  },

  update: async function (req, res){
    try {
      const { id } = req.params;
      const foodData = req.body;
      const updateData = await foodsService.updateOne(id, foodData);

      if (!updateData) return res.status(404).json({message: "Alimento não encontrado!"});

      res.json({message: "Alimento atualizado!"});
    } catch (error) {
      res.status(500).json({message: "Houve um erro no servidor!"});
    }
  },

  remove: async function (req, res){
    try {
      const { id } = req.params;
      const removeData = await foodsService.remove(id);

      if (!removeData) return res.status(404).json({message: "Alimento não encontrado!"});

      res.json({message: "Alimento removido!"});
    } catch (error) {
      res.status(500).json({message: "Houve um erro no servidor!"});
    }
  },
}

module.exports = foodsController;
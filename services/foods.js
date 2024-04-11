const Food = require('../models/Food');
const foodRepository = require('../repositories/foods');

const foodsService = {
  findAll: async function (){
    const foods = await foodRepository.find();
    return foods;
  },

  findById: async function (id){
    const food = await foodRepository.findById(id);
    return food;
  },

  create: async function (data){
    const newFood = await foodRepository.create(data);
    return newFood;
  },

  updateOne: async function (id, data){
    const updateData = await foodRepository.updateOne(id, data);
    return updateData;
  },

  remove: async function (id){
    const removeData = await foodRepository.remove(id);
    return removeData;
  },
}

module.exports = foodsService;
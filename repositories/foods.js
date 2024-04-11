const Food = require('../models/Food');

const foodRepository = {
  find: async function (){
    const foods = await Food.find();
    return foods;
  },

  findById: async function (id){
    const food = await Food.findOne({'_id': id});
    return food;
  },

  create: async function (data){
    const food = new Food(data);
    await food.validate();
    const newFood = await food.save();
    return newFood;
  },

  updateOne: async function (id, data){
    return await Food.findOneAndUpdate({ _id: id }, data);
  },

  remove: async function (id){
    return await Food.findOneAndDelete({ _id: id });
  },
}

module.exports = foodRepository;
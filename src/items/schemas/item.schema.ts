import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: String,
  qtd: Number,
  description: String,
});

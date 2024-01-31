const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newItemSchema = new Schema({
 newItemUserId: {
  type: mongoose.Types.ObjectId,
  ref: 'User',
  required: true,
 },
 newItemName: { type: String, required: true },
 newItemScientificName: { type: String },
 newItemDescription: { type: String },
 newItemCategory: { type: String, required: true },
 newItemType: { type: String },
 newItemUrl: { type: String },
 approved: { type: Boolean },
});

module.exports = mongoose.model('NewItem', newItemSchema);

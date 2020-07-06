"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const warframe_items_1 = __importDefault(require("warframe-items"));
class Items {
    static getFirstItem() {
        const items = new warframe_items_1.default({
            category: ['Primary']
        });
        return this.showItemName(items[0]);
    }
    static showItemName(item) {
        return item.name;
    }
}
exports.default = Items;

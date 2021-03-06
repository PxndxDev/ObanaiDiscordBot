const map = require("../../../elements/map.js");

class GiveKItems {
    constructor(target, targetId, item, itemName, itemCategory, quantity, region, area) {
        this.type = "give_k_items";
        this.target = target;
        this.targetId = targetId;
        this.item = item;
        this.itemCategory = itemCategory;
        this.itemName = itemName;
        this.quantity = quantity;
        this.got = 0;
        this.region = region;
        this.area = area;
        this.loc = map.Regions.filter(r => r.id === this.region)?.at(0);
        this.getLoc = `${this.loc.name}, ${this.loc.Areas.filter(a => a.id === this.area)?.at(0).name}`;
        this.display = function() {
            return `Donner **${this.itemName}** à **${this.target}** (**\`${this.got}\`**\`/${this.quantity}\`) (${this.getLoc})`;
        };
    }
}

module.exports = GiveKItems;
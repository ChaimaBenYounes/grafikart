import WarframeItems, { WarframeItemsOptions } from 'warframe-items'

export default class Items{

    static getFirstItem():string{
        const items = new WarframeItems({
            category:['Primary']
        })
        return this.showItemName(items[0])
    }

    static showItemName (item: {name:string}):string{
        return item.name
    }
}


declare interface warframeItem {
    name: string,
    uniqueName: string,
    secondsPerShot?:number,
    damagePerShot?:number[]
}
declare module 'warframe-items' {

    interface WarframeItemsOptions{
        category: string[]
    }



    class WarframeItems extends Array<warframeItem> {
        constructor(options:WarframeItemsOptions);
    }
    
    export = WarframeItems;
}



export class Menu {
    private _label: string;
    private _icon: string;
    private _items: Item[];
    private _routerLink: string;

    constructor(label: string, icon: string, items: Item[], routerLink: string) {
        this._label = label;
        this._icon = icon;
        this._items = items;
        this._routerLink = routerLink;
    }
    

    public get label(): string {
        return this._label;
    }
    public set label(value: string) {
        this._label = value;
    }
    public get icon(): string {
        return this._icon;
    }
    public set icon(value: string) {
        this._icon = value;
    }
    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }
    public get routerLink(): string {
        return this._routerLink;
    }
    public set routerLink(value: string) {
        this._routerLink = value;
    }

}


export class Item {
    private _label: string;
    private _icon: string;
    private _routerLink: string;

    constructor(label: string, icon: string, routerLink: string) {
        this._label = label;
        this._icon = icon;
        this._routerLink = routerLink;
    }
    
    public get label(): string {
        return this._label;
    }
    public set label(value: string) {
        this._label = value;
    }
    public get icon(): string {
        return this._icon;
    }
    public set icon(value: string) {
        this._icon = value;
    }
    public get routerLink(): string {
        return this._routerLink;
    }
    public set routerLink(value: string) {
        this._routerLink = value;
    }


}
import { Containerable } from "./types";

export default abstract class Container implements Required<Containerable>{
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }

    constructor(
        private _backgroundColor: string = 'black', 
        private _color: string = 'white',
        private _borderColor: string = 'white',
        private _borderRadius: string = '0px',
        private _borderStyle: string = "solid",
        private _borderWidth: string = '2px',
        private _zIndex: number = 0,
    ){
    }

    public get attributes():Containerable{
        return {
            backgroundColor: this._backgroundColor,
            color: this._color,
            borderColor: this._borderColor, 
            borderRadius: this._borderRadius,
            borderStyle: this._borderStyle,
            borderWidth: this._borderWidth,
            zIndex: this._zIndex
        };
    }

    get zIndex(): number {
        return this._zIndex;
    }
    set zIndex(value: number) {
        this._zIndex = value;
    }
    get borderWidth(): string {
        return this._borderWidth;
    }
    set borderWidth(value: string) {
        if(parseInt(value.substring(0, 3)) < 10)
        this._borderWidth = value;
    }
    get borderStyle(): string {
        return this._borderStyle;
    }
    set borderStyle(value: string) {
        this._borderStyle = value;
    }
    get borderRadius(): string {
        return this._borderRadius;
    }
    set borderRadius(value: string) {
        this._borderRadius = value;
    }
    get borderColor(): string {
        return this._borderColor;
    }
    set borderColor(value: string) {
        this._borderColor = value;
    }
    get backgroundColor(): string {
        return this._backgroundColor;
    }
    set backgroundColor(value: string) {
        this._backgroundColor = value;
    }

}
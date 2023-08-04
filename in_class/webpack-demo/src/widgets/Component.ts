import Canvas from "./Canvas";
import { LeftLeaningContainer } from "./containers";
import { GridUnit } from "./types";

class Component {
    private static _id = 1;

    constructor(
        private _canvas: Canvas,
        private _id = Component._id++,
        private _container = new LeftLeaningContainer,
        private _height: GridUnit = 2,
        private _width: GridUnit = 2,
        private _LocationTop: GridUnit = 1,
        private _Locationleft: GridUnit = 1,
        private _content: HTMLElement = document.createElement('div')
    ) {
        
    }
    public get canvas(): Canvas {
        return this._canvas;
    }
    public set canvas(value: Canvas) {
        this._canvas = value;
    }
    public get content(): HTMLElement {
        return this._content;
    }
    public set content(value: HTMLElement) {
        this._content = value;
    }

    public get Locationleft() {
        return this._Locationleft;
    }
    public set Locationleft(value) {
        this._Locationleft = value;
    }
    public get LocationTop() {
        return this._LocationTop;
    }
    public set LocationTop(value) {
        this._LocationTop = value;
    }
    public get width() {
        return this._width;
    }
    public set width(value) {
        this._width = value;
    }
    public get height() {
        return this._height;
    }
    public set height(value) {
        this._height = value;
    }
    public get container() {
        return this._container;
    }
    public set container(value) {
        this._container = value;
    }
    public get id() {
        return this._id;
    }
    public set id(value) {
        this._id = value;
    }
}

export {
    Component
}
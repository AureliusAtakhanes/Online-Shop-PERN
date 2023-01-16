import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 2, name: 'Смартфоны' },
            { id: 3, name: 'Триммеры' },
            { id: 4, name: 'Колонки' }
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Acer' },
            { id: 4, name: 'Lenovo' }
        ]
        this._devices = [
            { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://login.kg/image/cache/catalog/new/Aksessuary/Apple/Chasy/Watch%20Series%206/new/2-500x500.jpg' },
            { id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://login.kg/image/cache/catalog/new/Aksessuary/Apple/Chasy/Watch%20Series%206/new/2-500x500.jpg' },
            { id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://login.kg/image/cache/catalog/new/Aksessuary/Apple/Chasy/Watch%20Series%206/new/2-500x500.jpg' },
            { id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://login.kg/image/cache/catalog/new/Aksessuary/Apple/Chasy/Watch%20Series%206/new/2-500x500.jpg' },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }


    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}
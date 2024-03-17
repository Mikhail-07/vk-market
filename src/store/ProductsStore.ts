import {makeAutoObservable} from 'mobx'
import { IProduct } from '../types/types';

export interface IProductsStore {
  products: IProduct[];
  totalNumberProducts: number;
  summaryCost: number;
  removeProduct(id: number): void; 
  setSummaryCost():void;
  setTotalNumberProducts():void;
  setProducts(products: IProduct[]): void;
  setProductCount(id: number, amount: number): void;
}

export default class ProductsStore{

  _products: IProduct[]
  _totalNumberProducts: number
  _summaryCost: number

  constructor(){
    this._products = [] 
    this._totalNumberProducts = 0
    this._summaryCost = 0

    makeAutoObservable(this);
  }

  setProducts(products: IProduct[]){
    this._products = products
  }

  setProductCount(id: number, amount: number){
    const product = this.products.find(p => p.id === id)!
    product.count = product.count + amount
    this.setTotalNumberProducts()
    this.setSummaryCost()
  }

  setTotalNumberProducts(){
    this._totalNumberProducts = this.products.reduce((acc, p) => acc + p.count, 0)
  }

  setSummaryCost(){
    this._summaryCost = this.products.reduce((acc, p) => acc + p.price * p.count, 0)
  }

  removeProduct(id: number){
    this.setProducts(this.products.filter(p => p.id !== id))
    this.setTotalNumberProducts()
    this.setSummaryCost()
  }

  get products(){
    return this._products
  }

  get totalNumberProducts(){
    return this._totalNumberProducts
  }
  
  get summaryCost(){
    return this._summaryCost
  }
}
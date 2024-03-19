import { ObjectId } from "mongoose";
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
} from "../enums/product.enam";

export interface Product {
  _id: ObjectId; // biz buni Mongoosedan qabul qildik
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImage: string[];
  productViews: number;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImage?: string[];
  productViews?: number;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: string;
  productPrice?: number;
  productLeftCount?: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImage?: string[];
  productViews?: number;
}

import { model, Schema } from 'mongoose';

interface Iimage {
  fileName: string;
  originalName: string;
}

export interface IProduct {
  title: string;
  image: Iimage;
  category: string;
  description: string;
  price: number;
}

const imageSchema = new Schema<Iimage>({
  fileName: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
});

const productSchema = new Schema<IProduct>({
  title: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
    unique: true,
  },
  image: {
    imageSchema,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    default: null,
  },
});

export default model<IProduct>('product', productSchema);

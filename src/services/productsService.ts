import { books } from "@apiV1/models/productsModel";


export class ProductService {
  public async getProducts(): Promise<any[]> {

    return await books.find()
  }
  public async addProduct(book: any) {
    
    await books.create(book);
  }
}

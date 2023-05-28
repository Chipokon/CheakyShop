import axios from 'axios';
import { makeAutoObservable } from 'mobx'

class DefaultLayoutStore {
  //здесь писать стейты 
  categories = [];
  constructor() {
    makeAutoObservable(this)
  }
 
  //здесь писать функции по обращению со стейтами и с асинхронными операциями 
  getCategories = async () => {
    const {data} = await axios.get('/api/cheakyshop/categories')
    console.log('data : ', data);
  }

}

export default DefaultLayoutStore

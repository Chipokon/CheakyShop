import axios from 'axios';
import { makeAutoObservable, observable } from 'mobx'

class DefaultLayoutStore {
  //здесь писать стейты 
  categories = observable([]);
  constructor() {
    makeAutoObservable(this)
  }
 
  //здесь писать функции по обращению со стейтами и с асинхронными операциями 
  getCategories = async () => {
   
   const {data} = await axios.get('/api/cheakyshop/categories');
   this.categories = data.data;
  }

}

export default DefaultLayoutStore

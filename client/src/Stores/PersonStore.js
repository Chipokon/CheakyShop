import { makeAutoObservable } from 'mobx'
import axios from 'axios';

class PersonStore {
  //здесь писать стейты 

  constructor() {
    makeAutoObservable(this)
  }
  
  //здесь писать функции по обращению со стейтами и с асинхронными операциями 

  regUser = async (values) => {
    console.log(values);
  const data = await axios.post('/api/cheakyshop/users/registration', values)

  }

}

export default PersonStore

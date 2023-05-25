import { makeAutoObservable } from 'mobx'

class DefaultLayoutStore {

  //здесь писать стейты 
  constructor() {
    makeAutoObservable(this)
  }

  //здесь писать функции по обращению со стейтами и с асинхронными операциями 
}

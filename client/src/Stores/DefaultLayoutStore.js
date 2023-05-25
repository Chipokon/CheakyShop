import { makeAutoObservable } from 'mobx'

class DefaultLayoutStore {
  sodaMachine = ["cola", "fanta", "sprite"]
  //здесь писать стейты 
  sum = 2
  list = []
  constructor() {
    makeAutoObservable(this)
  }
  
  //здесь писать функции по обращению со стейтами и с асинхронными операциями 
}

export default DefaultLayoutStore

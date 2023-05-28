import React from 'react'
import DefaultLayoutStore from './DefaultLayoutStore'
import PersonStore from './PersonStore'

export const storesContext = React.createContext({
DefaultLayoutStore : new DefaultLayoutStore(),
PersonStore: new PersonStore()
})

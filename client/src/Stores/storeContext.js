import React from 'react'
import DefaultLayoutStore from './DefaultLayoutStore'

export const storesContext = React.createContext({
DefaultLayoutStore : new DefaultLayoutStore()
})

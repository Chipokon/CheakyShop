import React from 'react'
import { storesContext } from '../Stores/storeContext'


export const useStores = () => React.useContext(storesContext)

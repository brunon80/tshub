import React from 'react'
import { storesContext } from '../contexts/index'
import { Stores } from '../contexts/index'

export const useStores = (): Stores => React.useContext(storesContext)

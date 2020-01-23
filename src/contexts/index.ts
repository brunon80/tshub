import React from 'react'
import BaseStore from '../stores/baseStore'

export interface Stores {
    baseStore: BaseStore
}

export const storesContext = React.createContext<Stores>({
    baseStore: new BaseStore(),
})

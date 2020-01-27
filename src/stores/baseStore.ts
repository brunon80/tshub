import { action, observable } from 'mobx'
import api from '../lib/api'

class BaseStore {
    @observable username = ''

    @action async get<T>(url: string): Promise<T> {
        const response = await api<T>({ url })
        return response
    }
}
export default BaseStore

import { action, observable } from 'mobx'
import api from '../lib/api'

class BaseStore {
    @observable username = ''

    @action async get(url): Promise<object> {
        const response = await api({ url })
        return response
    }
}
export default BaseStore

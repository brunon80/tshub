import { action, observable } from 'mobx'
// import API from '../lib/API'

class BaseStore {
    @observable username = ''
}
export default BaseStore

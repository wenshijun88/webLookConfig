import axios from '../utils/http'

const basic = {
    init(){
        return axios.get('/api/menu')
    }
}

export default basic

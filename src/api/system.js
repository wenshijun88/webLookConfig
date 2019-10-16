import axios from '../utils/http'

const basic = {
    init(){
        return axios.get('/api/menu')
    },
    testNgix() {
        return axios.get('/api/v1/business/get_user_selection?v=1&access_token=d6e7a429-c5a9-4556-bb7a-74dc40cc4fb2')
    }
}

export default basic

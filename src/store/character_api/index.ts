import { reactive } from 'vue'
import axios from 'axios';

class CharacterAPI {
    mainUrl = 'https://rickandmortyapi.com/api/character'
    
    state = reactive({
        pages: 0,
        count: 0,
        data: [],
    })

    filter = reactive({
        name: '',
        status: ''
    })

    async getCards(page = 1) {
        try {
            let result = await axios.get(this.mainUrl, { params: { page, name: this.filter.name, status: this.filter.status }})
            this.state.data = result.data.results
            this.state.count = result.data.info.count
            this.state.pages = result.data.info.pages
        } catch(e: any) {
            console.error(e)
            if(e.response.status == 404) {
                alert('Не найдено!')
            }
        }
    }
}

const Character = new CharacterAPI()

export {
    Character
}
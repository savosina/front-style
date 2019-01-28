import { DELETE_ARTICLE, LOAD_ALL_ARTICLES } from '../constants'
import { arrToMap } from './utils'
//import defaultArticles from '../fixtures'
import { Record } from 'immutable'

const ArticleRecord = Record({
    title:null,
    id: null,
    text:null,
    comments:[]
})

//const ReduserRecord = Record({
//    entities: arrToMap([], ArticleRecord),
//    loading: false,
//    loaded: false,
//    error: null
//})

export default (articles = arrToMap([], ArticleRecord), action) => {
    const { type, payload, response } = action

    switch (type){
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)

        case LOAD_ALL_ARTICLES:
            return articles(response, ArticleRecord)

        default:
            return articles
    }
}
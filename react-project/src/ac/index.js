import {INCREMENT, DELETE_ARTICLE, LOAD_ALL_ARTICLES} from '../constants'

export function increment(){
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id){
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function loadAllArticles(){
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: 'api/article'
    }
}
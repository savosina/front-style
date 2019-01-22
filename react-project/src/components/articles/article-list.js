import React, { Component } from 'react'
import Article from './article'
import accordion from '../../decorators/accordion'

class ArticleList extends Component {

    render(){
        console.log('this.props-al', this.props);
        return (
            <div className="article-list">
                <h2>Article list</h2>
                {this.body}
            </div>
        )
    }

    get body(){
        const { toggleOpenItem, openItemId, articles } = this.props
        return articles.map((article) =>
                <div className="article-list__item" key={article.id}>
                    <Article article = {article}
                        isOpen = {openItemId === article.id}
                        toggleOpen = {toggleOpenItem} />
                </div>
        )
    }

}
export default accordion(ArticleList)
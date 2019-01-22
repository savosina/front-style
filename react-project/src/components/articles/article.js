import React, { PureComponent } from 'react'
//import CommentList from './comment-list'

// Компонент статьи state
class Article extends PureComponent {

    state = {
        hasError: false
    }

    componentDidCatch(err){
        console.log('----', err);
        this.setState({
            hasError:true
        })
    }

    render() {
        console.log('---');
        console.log('this.props-a', this.props);
        const { article, isOpen } = this.props
        return (
            <div>
                <div className="article-list-head">
                    <h3 className="content__h3">{article.title}</h3>
                    <button className={isOpen ? 'button button_grey' : 'button button_green'} onClick = {this.handleBtnClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </div>
                {this.body}
            </div>
        )
    }

    handleBtnClick = () => this.props.toggleOpen(this.props.article.id)

    get body(){
        const { isOpen, article } = this.props
        if (!isOpen) return null
        if(this.state.hasError) return <div>Error</div>

        return (
            <section className="article-list-body">
                {article.text}
            </section>
        )
    }
}

export default Article
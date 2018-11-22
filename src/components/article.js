import React, { PureComponent } from 'react'
import CommentList from './comment-list'

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
                <div>
                    <h3>{article.title}</h3>
                    <button onClick = {this.handleBtnClick}>
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
            <section>
                {article.text}
                <CommentList comments={article.comments} />
            </section>
        )
    }
}

export default Article
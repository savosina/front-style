import React, { PureComponent } from 'react'

// Компонент статьи state
class Article extends PureComponent {
    render() {
        console.log('---');
        const { article, isOpen } = this.props
        return (
            <div>
                <div>
                    <h3>{article.title}</h3>
                    <button onClick = {this.handleBtnClick}>{isOpen ? 'close' : 'open'}</button>
                </div>
            { isOpen && <section>{article.text}</section> }
            </div>
        )
    }

    handleBtnClick = () => this.props.toggleOpen(this.props.article.id)
}

export default Article
import React, { Component } from 'react'



export default class Posts extends Component {
    
    state= {
        posts: []
    }

    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2bfd8bbb25e5415dab52d55d57da4112')
        .then(response => response.json())
        .then(postJson => this.setState({posts: postJson.articles}))
    }
    render() {
        return (
            <div className="newsBox">
                <h1>Latest News</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id} className="new">
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <span>Date: {post.publishedAt.split('T')[0]}</span>
                            <div>
                                <a href={post.url} target="_blank"><img src={post.urlToImage}></img></a>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}

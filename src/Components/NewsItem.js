import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (
            <div>
             
                <div className="card" style={{ width: '18rem' }}>
                    <img src={!imgUrl ? "https://www.news18.com/news/business/markets/bpcl-privatisation-govt-calls-off-present-expression-of-interest-process-to-sell-53-stake-5254057.html" : imgUrl } className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description }...</p>
                        <a href={newsUrl} rel="noreferrer"  target="_blank" className="btn btn-md btn-primary">Read more...</a>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

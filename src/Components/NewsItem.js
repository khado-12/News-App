import React, { Component } from 'react'

export default class NewsItem extends Component {
  
    render() {
        let {title,description,imgUrl,newsUrl}= this.props;
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={!imgUrl? "https://www.india.com/sports/ipl-2022-lsg-skipper-kl-rahul-and-gautam-gambhir-post-match-picture-is-already-a-hit-on-internet-see-posts-lsg-vs-rcb-5413560/" :imgUrl } className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description }...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-md btn-primary">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';

export default class News extends Component {
    
    
    
    
    constructor() {
        super();
        console.log("I am a constructor")
        this.state = {
            articles: [],
            loading:true
        }

    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=41f9391148264546a70e04bf990c6eb0&page=1&pageSize=${this.props.pageSize}`;
        
    
        let data= await fetch(url);
        let parsData= await data.json();
         
       this.setState({articles: parsData.articles, page: 1,
       totallArticles:parsData.totalResults});
      

        
    }
      previousBtn= async()=>{
          
        console.log("preciouse bTn")
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=41f9391148264546a70e04bf990c6eb0&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
       
        let data= await fetch(url);
        let parsData= await data.json();
    
       this.setState({
        page:this.state.page - 1,
        articles: parsData.articles
          
    
        });
      
           
      

    }
    nextBtn= async()=>{
        console.log("next bTn")
        if( this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=41f9391148264546a70e04bf990c6eb0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parsData= await data.json();
       this.setState({
        page:this.state.page + 1,
        articles: parsData.articles
        
         
    
        });
    }
    }
    render() 
    {

        return (
            <div className='container my-3' >
                <div className='row'>
                    <h1>News Day- Top Headlines</h1>
                    {/* {this.state.loading &&<Spinner/>} */}
                    
                    {this.state.articles.map((element) => {
                        
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem  title={element.title? element.title.slice(0,45):""}  imgUrl={element.urlToImage} description={element.description? element.description.slice(0,79): ""} newsUrl={element.url} />
                        </div>
                        

                    })}

                         
                </div>
                <div className='container d-flex justify-content-between'>
                    <button  disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.previousBtn}>&larr; Previous</button>
                    <button disabled={this.state.page + 1<Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary"onClick={this.nextBtn}>Next &rarr;</button>

                </div>

            </div>


        )
    }
}
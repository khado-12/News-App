import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    
    //  articles=[
    //     {
    //     "source": {
    //     "id": "the-times-of-india",
    //     "name": "The Times of India"
    //     },
    //     "author": null,
    //     "title": "Orbital Flight Test-2: Boeing’s Starliner capsule lands on earth after trip to International Space Station - Times of India",
    //     "description": "Boeing’s Starliner capsule has landed on earth safely after its trip to the International Space Station. The unmanned mission touched down in the New Mexico desert with help of 3 parachutes. If everything goes to plan, NASA astronauts will be onboard for the …",
    //     "url": "https://timesofindia.indiatimes.com/videos/international/orbital-flight-test-2-boeings-starliner-capsule-lands-on-earth-after-trip-to-international-space-station/videoshow/91803373.cms",
    //     "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-91803373,imgsize-17248.cms",
    //     "publishedAt": "2022-05-26T04:26:45Z",
    //     "content": "May 26, 2022, 09:56AM ISTSource: TOI.inBoeings Starliner capsule has landed on earth safely after its trip to the International Space Station. The unmanned mission touched down in the New Mexico dese… [+269 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "News18"
    //     },
    //     "author": "Tech Desk",
    //     "title": "Apple iPhone 14 Production Delayed Due To COVID-19 Restrictions In China, Will This Postpone Launch? - News18",
    //     "description": "The iPhone 14 series is expected to be launched in September this year, but at least one model is falling behind schedule in production, a report has said.",
    //     "url": "https://www.news18.com/news/tech/apple-iphone-14-production-delayed-due-to-covid-19-restrictions-in-china-will-this-postpone-launch-5248123.html",
    //     "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/01/iphone-14-hole-punch-mockup-164195996516x9.jpg",
    //     "publishedAt": "2022-05-26T04:22:31Z",
    //     "content": "Apples iPhone 14 series is expected to be launched in September this year. This, however, might just be delayed as a report has now said that the production has fallen behind schedule due to fresh CO… [+1965 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "NDTV News"
    //     },
    //     "author": null,
    //     "title": "Maharashtra Minister Searched By Probe Agency In money Laundering Probe - NDTV",
    //     "description": "Seven locationsin Mumbai and Pune linked to Shiv Sena leader Anil Parab were raided this morning by the Enforcement Directorate in connection with an alleged money laundering case.",
    //     "url": "https://www.ndtv.com/india-news/maharashtra-minister-searched-by-probe-agency-in-money-laundering-probe-3010247",
    //     "urlToImage": "https://c.ndtvimg.com/2020-09/9cd39t5o_shiv-sena-minister-anil-parab650_625x300_14_September_20.jpg",
    //     "publishedAt": "2022-05-26T03:56:54Z",
    //     "content": "Mr Parab has been questioned by the ED in the past in another money laundering case (File)\r\nNew Delhi: Multiple locations in Maharashtra linked to state transport minister Anil Parab were raided this… [+1268 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "NDTV News"
    //     },
    //     "author": null,
    //     "title": "Hrithik Roshan's Date At Karan Johar's Birthday Party Was The Usual Suspect Saba Azad - NDTV Movies",
    //     "description": "Hrithik Roshan and Saba Azad were first pictured together in January",
    //     "url": "https://www.ndtv.com/entertainment/hrithik-roshans-date-at-karan-johars-birthday-party-was-the-usual-suspect-saba-azad-3009945",
    //     "urlToImage": "https://c.ndtvimg.com/2022-05/kv479uag_hrithik_625x300_26_May_22.jpg",
    //     "publishedAt": "2022-05-26T03:48:12Z",
    //     "content": "Hrithik Roshan pictured with Saba Azad at Karan Johar's party.\r\nNew Delhi: Hrithik Roshan and rumoured girlfriend Saba Azad frequently feature on the trends list for their relationship. Well, the rea… [+1648 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-times-of-india",
    //     "name": "The Times of India"
    //     },
    //     "author": "Times Of India",
    //     "title": "Garena Free Fire Max Redeem Codes for May 26, 2022: claim exciting goodies and rewards - Times of India",
    //     "description": "The game's creators are constantly adding alpha-numeric codes to the game. These codes provide players the opportunity to win free prizes. These codes",
    //     "url": "https://timesofindia.indiatimes.com/gadgets-news/garena-free-fire-max-redeem-codes-for-may-26-2022-claim-exciting-goodies-and-rewards/articleshow/91802510.cms",
    //     "urlToImage": "https://static.toiimg.com/thumb/msid-91802567,width-1070,height-580,imgsize-86786,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //     "publishedAt": "2022-05-26T03:44:00Z",
    //     "content": null
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Hindustan Times"
    //     },
    //     "author": "HT Tech",
    //     "title": "iPhone 14 Pro could borrow one OLD Samsung Galaxy feature to make life easy - HT Tech",
    //     "description": "iPhone 14 Pro is predicted to feature the Always On Display from Samsung Galaxy smartphones. Here are all the details.",
    //     "url": "https://tech.hindustantimes.com/mobile/news/iphone-14-pro-could-borrow-one-old-samsung-galaxy-feature-to-make-life-easy-71653535631127.html",
    //     "urlToImage": "https://images.hindustantimes.com/tech/img/2022/05/26/1600x900/20220101_161453(1)_1641039259561_1653535782183.jpg",
    //     "publishedAt": "2022-05-26T03:32:24Z",
    //     "content": "iPhone 14 Pro could borrow a feature that has been present on the Samsung Galaxy flagships since ages! At the moment, high refresh rate displays are all the hype in the world of smartphones, with eve… [+2046 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "NDTV News"
    //     },
    //     "author": "Press Trust of India",
    //     "title": "KL Rahul Lists \"Obvious\" Reasons For LSG's Loss To RCB In IPL 2022 Eliminator - NDTV Sports",
    //     "description": "IPL 2022: Rajat Patidar's brilliant century powered RCB to a 14-run win over LSG in the Eliminator.",
    //     "url": "https://sports.ndtv.com/ipl-2022/kl-rahul-lists-obvious-reasons-for-lsgs-loss-to-rcb-in-ipl-eliminator-3010240",
    //     "urlToImage": "https://c.ndtvimg.com/2022-05/tnptimg_kl-rahul-bcciipl_625x300_26_May_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
    //     "publishedAt": "2022-05-26T03:31:26Z",
    //     "content": "A dejected Lucknow Super Giants skipper KL Rahul blamed sloppy fielding for his team's 14-run defeat at the hands of Royal Challengers Bangalore in the IPL Eliminator while acknowledging Rajat Patida… [+3097 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Livemint"
    //     },
    //     "author": "Livemint",
    //     "title": "Monkeypox Outbreak: Centre Advises Isolation Of Suspected Cases. See Details Here | Mint - Mint",
    //     "description": "Union Health Ministry recently asked health officials at airports and ports to step up surveillance and isolate symptomatic travellers from monkeypox-affected countries and send their samples to the NIV for investigation",
    //     "url": "https://www.livemint.com/news/india/monkeypox-outbreak-centre-advises-isolation-of-suspected-cases-see-details-here-11653531417542.html",
    //     "urlToImage": "https://images.livemint.com/img/2022/05/26/600x338/HEALTH-MONKEYPOX--0_1653058643789_1653531557538.JPG",
    //     "publishedAt": "2022-05-26T03:12:27Z",
    //     "content": "In the wake of several countries reporting monkeypox cases, the Union Health Ministry has advised all states to direct hospitals to watch out for symptomatic patients who have travelled to these coun… [+2835 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-times-of-india",
    //     "name": "The Times of India"
    //     },
    //     "author": "Reuters",
    //     "title": "Minutes before school attack, Texas gunman sent online warning - Times of India",
    //     "description": "US News: The Texas gunman Salvador Ramos, who murdered 19 children and two teachers, posted an online message warning that he was going to shoot up an elementa",
    //     "url": "https://timesofindia.indiatimes.com/world/us/minutes-before-school-attack-texas-gunman-sent-online-warning/articleshow/91800980.cms",
    //     "urlToImage": "https://static.toiimg.com/thumb/msid-91803525,width-1070,height-580,imgsize-97800,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //     "publishedAt": "2022-05-26T02:32:00Z",
    //     "content": ""
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Moneycontrol"
    //     },
    //     "author": "Sandip Das",
    //     "title": "Top 10 things to know before the market opens today - Moneycontrol",
    //     "description": "Trends in SGX Nifty indicate a positive opening for the broader index in India with a gain of 64 points",
    //     "url": "https://www.moneycontrol.com/news/business/markets/top-10-things-to-know-before-the-market-opens-today-85-8577081.html",
    //     "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/01/BSE_Sensex_Stocks_market-770x433.png",
    //     "publishedAt": "2022-05-26T02:29:16Z",
    //     "content": "The market is expected to open in the green as trends in the SGX Nifty indicate a positive opening for the broader index in India with a gain of 64 points.\r\nThe BSE Sensex fell more than 300 points t… [+7218 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "NDTV News"
    //     },
    //     "author": null,
    //     "title": "Pak Army Deployed As Imran Khan's Protest March Enters Islamabad - NDTV",
    //     "description": "Failing to control the growing unrest due to the protest march launched by Imran Khan, the Shehbaz Sharif government has been forced to call in the army to protect the Red Zone as former PM entered Islamabad in the early hours of Thursday.",
    //     "url": "https://www.ndtv.com/world-news/pak-army-deployed-as-imran-khans-protest-march-enters-islamabad-3010174",
    //     "urlToImage": "https://c.ndtvimg.com/2022-05/tlc7sk34_islamabad-protests-afp_625x300_25_May_22.jpg",
    //     "publishedAt": "2022-05-26T02:23:06Z",
    //     "content": "Imran Khan urged his supporters not to vacate D-Chowk until a date for fresh polls announced.\r\nIslamabad: Failing to control the growing unrest due to the protest march launched by Imran Khan, the Sh… [+2813 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "India.com"
    //     },
    //     "author": "India.com Sports Desk",
    //     "title": "IPL 2022: LSG Skipper KL Rahul and Gautam Gambhir Post Match Picture Is Already A Hit On Internet | See Posts - India.com",
    //     "description": "Lucknow's mentor Gautam Gambhir post match picture with KL Rahul has gone viral ever since it got out.",
    //     "url": "https://www.india.com/sports/ipl-2022-lsg-skipper-kl-rahul-and-gautam-gambhir-post-match-picture-is-already-a-hit-on-internet-see-posts-lsg-vs-rcb-5413560/",
    //     "urlToImage": "https://static.india.com/wp-content/uploads/2022/05/pjimage-2022-05-26T074727.728.jpg",
    //     "publishedAt": "2022-05-26T02:22:20Z",
    //     "content": "New Delhi: It was a tough night for Lucknow Super Giants (LSG) as they succumbed to a 14-run defeat against Royal Challengers Bangalore in the Eliminator match on Wednesday. Lucknow skipper KL Rahul … [+2033 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Hindustan Times"
    //     },
    //     "author": "HT News Desk",
    //     "title": "3 Lashkar terrorists shot dead in J&K's Kupwara, infiltration bid foiled - Hindustan Times",
    //     "description": "Jammu and Kashmir: The encounter started when the infiltrating terrorists were intercepted by the army and police. | Latest News India",
    //     "url": "https://www.hindustantimes.com/india-news/3-lashkar-terrorists-neutralised-in-j-k-s-kupwara-infiltration-bid-foiled-101653530526008.html",
    //     "urlToImage": "https://images.hindustantimes.com/img/2022/05/26/1600x900/Search_operation_1652446989362_1653531176144.jpg",
    //     "publishedAt": "2022-05-26T02:14:07Z",
    //     "content": "Three terrorists affiliated with Pakistan-based outfit Lashkar-e-Taiba (LeT) were neutralized in an encounter that broke out in the Kupwara district of Jammu and Kashmir on Thursday morning, Kashmir … [+1463 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "ThePrint"
    //     },
    //     "author": null,
    //     "title": "Siddhartha Verma, ‘patriot’ UK scholar & IRTS officer who battled Rahul Gandhi on ‘idea of India’ - ThePrint",
    //     "description": "Commonwealth scholar Siddhartha Verma challenged Gandhi at an event in Cambridge University, argued Congress leader’s idea of India as a ‘union of states’ was ‘destructive’.",
    //     "url": "https://theprint.in/india/siddhartha-verma-patriot-uk-scholar-irts-officer-who-battled-rahul-gandhi-on-idea-of-india/970668/",
    //     "urlToImage": "https://static.theprint.in/wp-content/uploads/2022/05/Siddhartha-Verma.jpg",
    //     "publishedAt": "2022-05-26T02:00:58Z",
    //     "content": "New Delhi: When 31-year-old Indian Railway Traffic Service (IRTS) officer Siddhartha Verma challenged Rahul Gandhi over his idea of India at a Cambridge University event Monday, his interjections wer… [+5312 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Hindustan Times"
    //     },
    //     "author": "HT Entertainment Desk",
    //     "title": "Deepika Padukone serves jaw-dropping look at Elvis premiere at Cannes - Hindustan Times",
    //     "description": "Deepika Padukone arrived for the grand premiere of the film Elvis at the Cannes Film Festival in a dramatic gown with bulky sleeves.",
    //     "url": "https://www.hindustantimes.com/entertainment/bollywood/deepika-padukone-serves-jaw-dropping-look-at-elvis-premiere-at-cannes-film-festival-ranveer-singh-calls-her-a-queen-101653527991185.html",
    //     "urlToImage": "https://images.hindustantimes.com/img/2022/05/26/1600x900/France-Cannes-2022-Elvis-Red-Carpet-53_1653527990037_1653528004406.jpg",
    //     "publishedAt": "2022-05-26T01:56:01Z",
    //     "content": "Deepika Padukone has been surprising her fans with her fashion choices at the Cannes Film Festival each day. She took her red carpet style a notch higher on Wednesday as she walked the red carpet in … [+1699 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "google-news",
    //     "name": "Google News"
    //     },
    //     "author": null,
    //     "title": "Gold price in India for 24 carat and 22 carat today - Kalinga TV",
    //     "description": null,
    //     "url": "https://news.google.com/__i/rss/rd/articles/CBMiVWh0dHBzOi8va2FsaW5nYXR2LmNvbS9idXNpbmVzcy9nb2xkLXByaWNlLWluLWluZGlhLWZvci0yNC1jYXJhdC1hbmQtMjItY2FyYXQtdG9kYXktMi_SAQA?oc=5",
    //     "urlToImage": null,
    //     "publishedAt": "2022-05-26T01:54:36Z",
    //     "content": null
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "The Sentinel Assam"
    //     },
    //     "author": "Sentinel Digital Desk",
    //     "title": "Monkeypox doesnt spread easily by air like Covid: US - Sentinelassam - The Sentinel Assam",
    //     "description": "Amid the recent scare of monkeypox spreading rapidly to over a dozen countries",
    //     "url": "https://www.sentinelassam.com/topheadlines/monkeypox-doesnt-spread-easily-by-air-like-covid-us-593627",
    //     "urlToImage": "https://assets.sentinelassam.com/h-upload/2022/05/25/349327-monkeypox.jpg",
    //     "publishedAt": "2022-05-26T01:45:31Z",
    //     "content": "WASHINGTON: Amid the recent scare of monkeypox spreading rapidly to over a dozen countries, the US Centers for Disease Control and Prevention (CDC) has dispelled fears saying that the virus doesn't s… [+2659 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "The Indian Express"
    //     },
    //     "author": "Manoj C G",
    //     "title": "Newsmaker | After fast rise in Congress, Kapil Sibal’s sudden exit; big blow to rebel G23 - The Indian Express",
    //     "description": "Having emerged as one of the most trenchant critics of the Gandhis in the last two years, Kapil Sibal's exit may not really ruffle them. In fact, some in the leadership are heaving a sigh of relief, at being spared of his frequent acerbic attacks.",
    //     "url": "https://indianexpress.com/article/india/political-pulse/fast-rise-in-congress-kapil-sibal-sudden-exit-big-blow-to-rebel-g23-7935901/",
    //     "urlToImage": "https://images.indianexpress.com/2022/05/Sibal-1.jpg",
    //     "publishedAt": "2022-05-26T01:23:11Z",
    //     "content": "Kapil Sibal perhaps always had a rebellious streak in him. While his exit from the Congress, two months after he openly asked the Gandhis to step aside from leadership roles and give some other leade… [+5919 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "India Today"
    //     },
    //     "author": null,
    //     "title": "Horoscope Today, May 26, 2022: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces - India Today",
    //     "description": "Horoscope Today, May 26, 2022: Read the astrological prediction for Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius and Pisces, here.",
    //     "url": "https://www.indiatoday.in/horoscopes/story/horoscope-today-may-26-2022-aries-taurus-gemini-cancer-leo-virgo-libra-scorpio-sagittarius-capricorn-aquarius-pisces-1954134-2022-05-26",
    //     "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/thumbnail_Astro_IT-1_2__1___1_-647x363.jpeg?JzoEuPO516LCCUZ6HtzIgtu4M3BxCtGn",
    //     "publishedAt": "2022-05-26T00:28:38Z",
    //     "content": null
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "The Indian Express"
    //     },
    //     "author": "Express News Service",
    //     "title": "Militants kill J&K TV artist Amreen Bhat, her 10-yr-old nephew is injured - The Indian Express",
    //     "description": "The attack came a day after suspected militants killed a policeman and injured his minor daughter outside their house in Soura neighbourhood of Srinagar.",
    //     "url": "https://indianexpress.com/article/cities/srinagar/militants-kill-jk-tv-artist-amreen-bhat-her-10-yr-old-nephew-is-injured-7936443/",
    //     "urlToImage": "https://images.indianexpress.com/2022/05/Amreen-Bhat.jpg",
    //     "publishedAt": "2022-05-25T23:43:28Z",
    //     "content": "A TELEVISION artist, identified as Amreen Bhat, was killed and her 10-year-old nephew injured when suspected militants barged into her house and opened fire, in Budgam district of central Kashmir on … [+996 chars]"
    //     }
    //     ]
    
    
    
    constructor() {
        super();
        console.log("I am a constructor")
        this.state = {
            articles: [],
            loading:true
        }

    }
    async componentDidMount(){
        let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=41f9391148264546a70e04bf990c6eb0';
        console.log("didmount Runnign..");
        let data= await fetch(url);
        let parsData= await data.json();
       this.setState({articles: parsData.articles});

        
    }
    render() 
    {

        return (
            <div className='container my-3' >
                <div className='row'>
                    <h1>News Day- Top Headlines</h1>
                    {this.state.articles.map((element) => {
                        
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem  title={element.title? element.title.slice(0,45):""}  imgUrl={element.urlToImage} description={element.description? element.description.slice(0,79): ""} newsUrl={element.url} />
                        </div>
                        

                    })}

                        
                </div>


            </div>


        )
    }
}

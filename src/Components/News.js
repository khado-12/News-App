import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    
     articles=[
            
            {
                
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Sandee LaMotte, CNN",
                "title": "What is monkeypox, its symptoms and threat to you? - CNN",
                "description": "Where did monkeypox come from, what are the signs and symptoms and how worried should you be? Here's what we know.",
                "url": "https://www.cnn.com/2022/05/24/health/what-is-monkeypox-virus-explainer-update-wellness/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220520183005-02-monkeypox-handout-super-tease.jpg",
                "publishedAt": "2022-05-25T08:28:00Z",
                "content": "(CNN)An extremely rare disease called monkeypox, a much less severe cousin of smallpox, is spreading around the world. More than 250 cases have been reported in at least 16 countries, according to th… [+8476 chars]"
            },
            -
            {
                
                "source": {
                    "id": null,
                    "name": "TMZ"
                },
                "author": "TMZ Staff",
                "title": "Caitlyn Jenner Wasn't Invited to Kourtney Kardashian, Travis Barker Wedding - TMZ",
                "description": "Caitlyn Jenner didn't intentionally skip out on Kourtney Kardashian and Travis Barker's wedding, fact is, she just wasn't invited ... TMZ has learned.",
                "url": "https://www.tmz.com/2022/05/25/caitlyn-jenner-wasnt-invited-kourtney-kardashian-travis-barker-wedding/",
                "urlToImage": "https://imagez.tmz.com/image/f0/16by9/2022/05/24/f07b06c14261495fa33003bfbd23b3a2_xl.jpg",
                "publishedAt": "2022-05-25T08:00:00Z",
                "content": "Caitlyn Jenner didn't intentionally skip out on Kourtney Kardashian and Travis Barker's wedding, fact is, she just wasn't on the guestlist ... TMZ has learned.\r\nSources close to the couple tell us Ca… [+1278 chars]"
            },
            -
            {
                
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "By <a href=\"/profiles/rhea-mogul\">Rhea Mogul</a>, CNN",
                "title": "Russia's war in Ukraine: Live updates - CNN",
                "description": "Russia's invasion of Ukraine has effectively halted all maritime trade at Ukrainian ports, according to declassified US intelligence, blocking grain exports and risking a global food crisis. Follow live news updates here.",
                "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-05-25-22/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220524114937-01-kamikaze-drone-ukraine-super-tease.jpg",
                "publishedAt": "2022-05-25T07:59:00Z",
                "content": "Russias invasion of Ukraine has effectively halted all maritime trade at Ukrainian ports, according to newly declassified US intelligence, cutting off a critical export commodity for Ukraine and risk… [+2187 chars]"
            },
            -
            {
                
                "source": {
                    "id": "fox-news",
                    "name": "Fox News"
                },
                "author": "Fox News",
                "title": "Primary elections in Georgia, Alabama, runoff in Texas - Fox News",
                "description": "Voters Tuesday are picking their party nominees for several key elections, including Alabama's open Senate seat and Georgia's gubernatorial race.",
                "url": "https://www.foxnews.com/live-news/primary-elections-in-georgia-alabama-runoff-in-texas",
                "urlToImage": "https://livenews.foxnews.com/images/2022/05/ce4b9afce0cec3dc9f6c5ba55a599e94.png",
                "publishedAt": "2022-05-25T06:16:25Z",
                "content": "Former President Donald Trump's spokesman Taylor Budowich Tuesday touted the strength of Trump's endorsement, even as one of his biggest foes in the Republican Party beat a Trump-backed opponent.\r\n\"P… [+1261 chars]"
            },
            -
            {
                
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "Exclusive: China seeks Pacific islands policing, security cooperation - Reuters",
                "description": "China will seek a region-wide deal with almost a dozen Pacific islands covering policing, security and data communications cooperation when Foreign Minister Wang Yi hosts a meeting in Fiji next week, documents seen by Reuters show.",
                "url": "https://www.reuters.com/world/asia-pacific/exclusive-china-seeks-pacific-islands-policing-security-cooperation-document-2022-05-25/",
                "urlToImage": "https://www.reuters.com/resizer/VbWIr7ssv3AqkUT_1oLEIMBMAjQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/C6DVNXTZ7RI5HNYKJEPVPCYAMM.jpg",
                "publishedAt": "2022-05-25T06:16:00Z",
                "content": "SYDNEY, May 25 (Reuters) - China will seek a region-wide deal with almost a dozen Pacific islands covering policing, security and data communications cooperation when Foreign Minister Wang Yi hosts a… [+4631 chars]"
            },
            -
            {
                
                "source": {
                    "id": "the-washington-post",
                    "name": "The Washington Post"
                },
                "author": "Colby Itkowitz, David Weigel",
                "title": "Georgia primary tests influence of Trump, false election claims - The Washington Post",
                "description": "The results in Georgia’s Republican primaries for governor and secretary of state amounted to a significant blow to the former president.",
                "url": "https://www.washingtonpost.com/politics/2022/05/24/trump-georgia-kemp-perdue/",
                "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WXLQ2SG32UI6ZPBVVEOQVFESHM.jpg&w=1440",
                "publishedAt": "2022-05-25T06:03:00Z",
                "content": "Placeholder while article actions load\r\nGeorgia Republican primary voters on Tuesday rejected former president Donald Trumps attempt to unseat GOP officeholders who refused to join his fight to overt… [+11041 chars]"
            },
            -
            {
                
                "source": {
                    "id": "associated-press",
                    "name": "Associated Press"
                },
                "author": "Elena Becatoros, Oleksandr Stashevskyi",
                "title": "Ukraine: 200 bodies found in basement in Mariupol's ruins - The Associated Press",
                "description": "KYIV, Ukraine (AP) — Workers digging through the rubble of an apartment building in Mariupol found 200 bodies in the basement, Ukrainian authorities said Tuesday, as more horrors come to light in the ruined city that has seen some of the worst suffering of th…",
                "url": "https://apnews.com/article/russia-ukraine-zelenskyy-kyiv-0c74a0c16b834732b81e460450da3131",
                "urlToImage": "https://storage.googleapis.com/afs-prod/media/8e05ff64b70049dab346439b0828976d/3000.jpeg",
                "publishedAt": "2022-05-25T05:15:07Z",
                "content": "KYIV, Ukraine (AP) Workers digging through the rubble of an apartment building in Mariupol found 200 bodies in the basement, Ukrainian authorities said Tuesday, as more horrors come to light in the r… [+7039 chars]"
            },
            -
            {
                
                "source": {
                    "id": null,
                    "name": "New York Times"
                },
                "author": "Josh Peck, J. David Goodman",
                "title": "Texas Elementary School Shooting: Latest Updates - The New York Times",
                "description": "The dead included 19 students and two adults. It was the deadliest school shooting since the 2012 massacre in Newtown, Conn.",
                "url": "https://www.nytimes.com/live/2022/05/24/us/shooting-robb-elementary-uvalde",
                "urlToImage": "https://static01.nyt.com/images/2022/05/24/world/24uvalde-shooting-promo-2am/24vid-tx-pkg-photocover-facebookJumbo-v2.jpg",
                "publishedAt": "2022-05-25T03:50:00Z",
                "content": "UVALDE, Texas A gunman killed at least 19 children and two adults on Tuesday in a rural Texas elementary school, a state police official said, in the deadliest American school shooting since the mass… [+8700 chars]"
            },
            -
            {
                
                "source": {
                    "id": "cbs-news",
                    "name": "CBS News"
                },
                "author": "Sophie Reardon",
                "title": "Senator Chris Murphy, lawmaker from Sandy Hook district, pleads for action after Texas elementary school mass shooting: \"What are we doing?\" - CBS News",
                "description": "\"I am here on this floor to beg — to literally get down on my hands and knees and beg my colleagues,\" he said. \"Find a path forward here.\"",
                "url": "https://www.cbsnews.com/news/chris-murphy-senate-speech-sandy-hook-texas-elementary-school-mass-shooting/",
                "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2022/05/24/c6eadd00-dcdb-4c7b-b299-ac7d92d3df6c/thumbnail/1200x630/02608fab6968d99aac4a219f0ad9fb66/screen-shot-2022-05-24-at-5-56-51-pm.png",
                "publishedAt": "2022-05-25T03:50:00Z",
                "content": "Connecticut's Senator Chris Murphy spoke from the Senate floor on Tuesday several hours after a mass shooting at a Texas elementary school killed at least 19 students and two adults. The Democrat, wh… [+1310 chars]"
            },
            -
            {
                
                "source": {
                    "id": null,
                    "name": "ESPN"
                },
                "author": "Tim MacMahon",
                "title": "Luka Doncic, Dallas Mavericks eye another playoff shocker after avoiding sweep by Warriors - 'Going to believe until the end' - ESPN",
                "description": "After the Mavericks avoided being swept out of the Western Conference finals by the Warriors, superstar Luka Doncic said he remains focused on winning the series, regardless of the long odds.",
                "url": "https://www.espn.com/nba/story/_/id/33980542/luka-doncic-dallas-mavericks-eye-another-playoff-shocker-avoiding-sweep-warriors-going-believe-end",
                "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0525%2Fr1017218_1296x729_16%2D9.jpg",
                "publishedAt": "2022-05-25T03:45:13Z",
                "content": "DALLAS -- Mavericks superstar Luka Doncic doesn't necessarily see any honor in avoiding being swept in the Western Conference finals. He remains focused on beating the Golden State Warriors in the se… [+2955 chars]"
            },
            -
            {
                
                "source": {
                    "id": null,
                    "name": "CNBC"
                },
                "author": "Evelyn Cheng",
                "title": "China would only use force as a 'last resort' for Taiwan reunification, former PLA official says - CNBC",
                "description": "Force is a \"last resort\" for Taiwan reunification, said Zhou Bo, senior fellow at Tsinghua University's Center for International Strategy and Security Studies.",
                "url": "https://www.cnbc.com/2022/05/25/force-a-last-resort-for-china-on-taiwan-reunification-former-pla-official-says.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/107065946-1653380885409-gettyimages-1172712699-43.jpeg?v=1653381075&w=1920&h=1080",
                "publishedAt": "2022-05-25T03:17:00Z",
                "content": "BEIJING The central Chinese government in Beijing would only use force as the \"last resort\" for Taiwan reunification, said a retired officer of the People's Liberation Army.\r\n\"The Chinese PLA is gett… [+4744 chars]"
            },
            -
            {
            
                "source": {
                    "id": null,
                    "name": "Deadline"
                },
                "author": "Nellie Andreeva",
                "title": "‘This Is Us’: How NBC Drama Wrapped Pearsons’ Story In Moving Series Finale - Deadline",
                "description": "Six years ago today, the trailer for then-new NBC drama series This Is Us was blowing up, breaking records with about 80 million views in 12 days. It was a precursor to the show’s phenomenal six-season run which ended tonight with the series finale, titled “U…",
                "url": "https://deadline.com/2022/05/this-is-us-series-finale-recap-jack-rebecca-randall-kate-kevin-season-6-episode-18-1235031154/",
                "urlToImage": "https://deadline.com/wp-content/uploads/2022/05/NUP_197545_02415.jpg?w=1000",
                "publishedAt": "2022-05-25T02:01:00Z",
                "content": "Six years ago today, the trailer for then-new NBC drama seriesThis Is Us was blowing up, breaking records with about 80 million views in 12 days. It was a precursor to the show’s phenomenal six-seaso… [+6766 chars]"
            },
            -
            {
                
                "source": {
                    "id": null,
                    "name": "Steelers Depot"
                },
                "author": "Alex Kozora",
                "title": "Report: Andy Weidl To Be Named Steelers' Assistant GM, Signs Pointing To Omar Khan Being Named GM - Steelers Depot",
                "description": "Big news out of Pittsburgh Tuesday night. According to Aditi Kinkhabwala, the Steelers are reportedly slated to hire the Philadelphia Eagles’ Andy Weidl as an assistant GM. Kinkhabwala also reports the team is likely to tab Omar Khan as the team’s next GM, re…",
                "url": "https://steelersdepot.com/2022/05/report-andy-weidl-to-be-named-steelers-assistant-gm-signs-pointing-to-omar-khan-being-named-gm/",
                "urlToImage": "https://steelersdepot.com/wp-content/uploads/2022/05/StockWeidl1.jpg",
                "publishedAt": "2022-05-25T01:42:36Z",
                "content": "Big news out of Pittsburgh Tuesday night. According to Aditi Kinkhabwala, the Steelers are reportedly slated to hire the Philadelphia Eagles’ Andy Weidl as an assistant GM. Kinkhabwala also reports t… [+1799 chars]"
            },
            -
            {
                
                "source": {
                    "id": "usa-today",
                    "name": "USA Today"
                },
                "author": "Cydney Henderson, USA TODAY",
                "title": "Steve Kerr gives passionate speech after deadly Texas school shooting - USA TODAY",
                "description": "Steve Kerr, Jason Kidd, LeBron James and more NBA coaches and stars react to the deadly school shooting in Texas.",
                "url": "https://www.usatoday.com/story/sports/nba/2022/05/24/steve-kerr-passionate-speech-texas-shooting-nba-reaction/9916579002/",
                "urlToImage": "https://www.gannett-cdn.com/presto/2022/05/25/USAT/62a94e5b-ba3d-44a1-bfbd-62d302237499-AP_Warriors_Mavericks_Kerr_Texas_School_Shooting.jpg?auto=webp&crop=2999,1687,x0,y153&format=pjpg&width=1200",
                "publishedAt": "2022-05-25T00:59:52Z",
                "content": "Steve Kerr didn't want to talk about basketball. \r\nDespite the Golden State Warriors being one win away from their first NBA Finals appearance since 2019, Kerr turned his attention to a deadly mass s… [+6161 chars]"
            },
            -
            {
                
                "source": {
                    "id": null,
                    "name": "New York Times"
                },
                "author": "Pam Belluck",
                "title": "1 in 5 Adult Covid Survivors in the U.S. May Develop Long Covid, Says CDC - The New York Times",
                "description": "Researchers identified lasting health problems in many different organ systems, including the heart, lungs and kidneys.",
                "url": "https://www.nytimes.com/2022/05/24/health/long-covid-infections.html",
                "urlToImage": "https://static01.nyt.com/images/2022/05/24/science/24virus-brief-long-covid/24virus-brief-long-covid-facebookJumbo.jpg",
                "publishedAt": "2022-05-25T00:23:58Z",
                "content": "People in both groups who had a history of one of the 26 health conditions in the previous year were excluded from the study an attempt by the researchers to consider medical issues that patients dev… [+1976 chars]"
            },
            -
            {
                
                "source": {
                    "id": "ign",
                    "name": "IGN"
                },
                "author": "Ryan Leston",
                "title": "James Wan and Jason Momoa Wanted to Keep Amber Heard for Aquaman 2 - IGN",
                "description": "Aquaman star Jason Momoa and director James Wan wanted to keep Amber Heard in the upcoming sequel, Aquaman 2.",
                "url": "https://www.ign.com/articles/james-wan-and-jason-momoa-wanted-amber-heard-for-aquaman-2",
                "urlToImage": "https://assets1.ignimgs.com/2018/09/22/rev-1-amn-trl-89040-um-high-res-jpeg-1537575369363.jpeg?width=1280",
                "publishedAt": "2022-05-24T23:56:46Z",
                "content": "Amber Heard was almost removed from Aquaman 2 before Jason Momoa and director James Wan fought to keep her on.\r\nDuring the high-profile Johnny Depp libel case, entertainment consultant Katherine Arno… [+2391 chars]"
            },
            -
            {
                
                "source": {
                    "id": null,
                    "name": "YouTube"
                },
                "author": null,
                "title": "Future of Angel Stadium deal in jeopardy amid federal corruption investigation - CBS Los Angeles",
                "description": "One day after former Mayor Sidhu resigned amid a federal corruption investigation​​, the remaining city council members will vote on the future of the $325 m...",
                "url": "https://www.youtube.com/watch?v=NHPZIe_hwOI",
                "urlToImage": "https://i.ytimg.com/vi/NHPZIe_hwOI/hqdefault.jpg",
                "publishedAt": "2022-05-24T23:48:06Z",
                "content": null
            },
            -
            {
                
                "source": {
                    "id": null,
                    "name": "CNBC"
                },
                "author": "Holly Ellyatt, Amanda Macias",
                "title": "Russia's debt default risk grows; Zelenskyy speaks to EU's Michel about more aid - CNBC",
                "description": "Ukraine is top of the agenda at the World Economic Forum in Davos this year and President Volodymyr Zelenskyy addressed the summit via video link Monday.",
                "url": "https://www.cnbc.com/2022/05/24/russia-ukraine-live-updates.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/107035257-1648044710655-gettyimages-1239437143-AFP_326Q6TG.jpeg?v=1648044748&w=1920&h=1080",
                "publishedAt": "2022-05-24T23:44:00Z",
                "content": "Russia has increased the intensity of its operations in the Donbas as it seeks to encircle Severodonetsk, Lysychansk, and Rubizhne, the U.K.'s Ministry of Defence said in its latest intelligence upda… [+898 chars]"
            },
            -
            {
                
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Richard Lawler",
                "title": "Apple's new App Store rule for easier account and data deletion hits June 30th - The Verge",
                "description": "Ahead of WWDC 2022, Apple is telling developers that App Store policy changes around account deletion and payments for online group services will take effect on June 30th, despite previous delays.",
                "url": "https://www.theverge.com/2022/5/24/23140416/apple-app-store-policy-account-delete-events-in-app-payments",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/qWqxfJ6iajy_bC-tfxO0knFIOJM=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22817754/acastro_210831_1777_0003.jpg",
                "publishedAt": "2022-05-24T23:37:14Z",
                "content": "Along with a requirement that apps offering paid online group services use Apples in-app payments\r\nIllustration by Alex Castro / The Verge\r\nDuring its WWDC 2021 event, Apple laid down a slew of polic… [+2315 chars]"
            },
            -
            {
                
                "source": {
                    "id": null,
                    "name": "Hollywood Reporter"
                },
                "author": "Ryan Gajewski",
                "title": "‘FBI’ Season Finale Pulled by CBS After Texas School Shooting - Hollywood Reporter",
                "description": "CBS has pulled the FBI season finale following the Texas school shooting that left at least 18 children and three adults dead. The Dick Wolf-produced show’s season four finale was scheduled to air Tuesday, the same day that Texas Gov. Greg Abbott confirmed th…",
                "url": "https://www.hollywoodreporter.com/tv/tv-news/fbi-season-finale-pulled-cbs-texas-shooting-1235153555/",
                "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/fbi_112447_fbi_04776bcf-h_2018.jpg?w=1024",
                "publishedAt": "2022-05-24T23:20:43Z",
                "content": "CBS has pulled the FBI season finale following the Texas school shooting that left at least 18 children and three adults dead.\r\nThe Dick Wolf-produced show’s season four finale was scheduled to air T… [+1089 chars]"
            }
        ]
    
    
    
    constructor() {
        super();
        console.log("I am a constructor")
        this.state = {
            articles: this.articles
        }

    }
    render() 
    {

        return (
            <div className='container my-3' >
                <div className='row'>
                    <h1>News Day- Top News Headlines</h1>
                    {this.state.articles.map((element) => {
                
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem target="-blank" title={element.title}  imgUrl={element.urlToImage} description={element.description} newsUrl={element.url} />
                        </div>
                        

                    })}

                        
                </div>


            </div>


        )
    }
}

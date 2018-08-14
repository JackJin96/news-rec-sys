import './NewsPanel.css'

import NewsCard from '../NewsCard/NewsCard';
import React from 'react';

class NewsPanel extends React.Component {
    constructor() {
        super(); // not very necessary to use super but is recommended
        this.state = {news: null};
    }

    componentDidMount() {
        this.loadMoreNews();
    }

    loadMoreNews() {
        // TODO: send real http request.
        this.setState({
            news:
                [{
                  "source": "The Wall Street Journal",
                  "title": "Berkshire Hathaway Benefits From US Tax Plan",
                  "description": "Berkshire Hathaway posted a $29 billion gain in 2017 related to changes in U.S. tax law, a one-time boost that inflated annual profits for the Omaha conglomerate.",
                  "url": "https://www.wsj.com/articles/berkshire-hathaway-posted-29-billion-gain-in-2017-from-u-s-tax-plan-1519480047",
                  "urlToImage": "https://si.wsj.net/public/resources/images/BN-XP717_3812B_TOP_20180224064100.jpg",
                  "publishedAt": "2018-02-24T18:42:00Z",
                  "digest":"3RjuEomJo26O1syZbU7OHA==\n",
                  "reason": "Recommend"
                },
                {
                  "source": "fortune",
                  "title": "Here's How Much Bitcoin Elon Musk Owns",
                  "description": "Tesla CEO Elon Musk isn’t exactly active in cryptocurrency. Musk revealed this week on Twitter how much Bitcoin he owns—and it’s not much.",
                  "url": "http://fortune.com/2018/02/23/bitcoin-elon-musk-value/",
                  "urlToImage": "https://fortunedotcom.files.wordpress.com/2018/01/elon-musk-tesla-silicon-valley-sex-party.jpg",
                  "publishedAt": "2018-02-23T23:26:30Z",
                  "digest":"3RjuEomJo26OadyZbU7OHA==\n",
                  "reason": "Recommend"
                }]
        });
    }

    renderNews() {
        const news_list = this.state.news.map(each_news => {
            return (
              <a className='list-group-item' key={each_news.digest} href="#">
                <NewsCard news={each_news} />
              </a>
            );
        });

        return (
            <div className='container-fuild'>
                <div className='list-group'>
                    {news_list}
                </div>
            </div>
        );
    }

    render () {
        if (this.state.news) {
            return (
                <div>
                    {this.renderNews()}
                </div>
            );
        } else {
            return (
                <div id='msg-app-loading'>
                    Loading...
                </div>
            );
        }
    }
}

export default NewsPanel;
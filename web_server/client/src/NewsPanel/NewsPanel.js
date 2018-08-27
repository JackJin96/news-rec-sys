import './NewsPanel.css'

import NewsCard from '../NewsCard/NewsCard';
import React from 'react';
import _ from 'lodash';

class NewsPanel extends React.Component {
    constructor() {
        super(); // not very necessary to use super but is recommended
        this.state = {news: null};
    }

    componentDidMount() {
        this.loadMoreNews();
        this.loadMoreNews = _.debounce(this.loadMoreNews, 500);
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll () {
        console.log('actually triggered loading more news!');
        // scrollY is the height of the unseen page (page - window)
        let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        // window.innerheight is the height of the current window
        // document.body.height is the height of the whole page
        if((window.innerHeight + scrollY) >= document.body.offsetHeight - 50) {
            console.log('load more news');
            this.loadMoreNews();
        }
    }

    loadMoreNews() {
        const news_url = 'http://' + window.location.hostname + ':3000/news';
        const request = new Request(news_url, { method: 'GET'});

        fetch(request)
            .then(res => res.json())
            .then(news => {
                this.setState({
                    news: this.state.news ? this.state.news.concat(news) : news,
                })
            });
    }

    renderNews() {
        const news_list = this.state.news.map(each_news => {
            return (
              <a className='list-group-item' href="#">
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
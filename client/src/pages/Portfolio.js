import React, { Component } from "react";

class Portfolio extends Component {

  render() {
    return (
      <div>
        <h2 id="portfolio-header">Portfolio</h2><br/>
        <div class="cards-6 section-transparent">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="bryant.jpg" alt=""/>
                                    <div class="card-caption"> Cubs Talk! </div>
                            </div>
                            <div class="table">
                                <h6>Cheerio Scrape</h6>
                                <p class="card-description"> Heroku-deployed application allows users to stay current on all Chicago Cub-related headlines.</p>
                                <a href="https://secure-garden-47540.herokuapp.com/"><button className="btn-info-2">V I E W</button></a> 
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="golf.jpg" alt="golf"/>
                                    <div class="card-caption">Beaver Creek</div>
                            </div>
                            <div class="table">
                                <h6>React.JS</h6>
                                <p class="card-description"> Enhanced Full-Stack app now allows potential golfers to book tee-times thorugh the site. </p>
                                <a href="https://morning-coast-79159.herokuapp.com/"><button className="btn-info-2">V I E W</button></a> 
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="burger.jpg" alt=""/>
                                    <div class="card-caption"> Eat-Da-Burger</div>
                            </div>
                            <div class="table">
                                <h6>Handlebars</h6>
                                <p class="card-description"> Eat-Da-Burger is your burger bucket list, of sorts.  Track all your burger conquests, to date. </p>
                                <a href="https://thawing-beach-52915.herokuapp.com/"><button className="btn-info-2">V I E W</button></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <div class="cards-6 section-transparent">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="waiter.jpg" alt=""/>
                                    <div class="card-caption"> What's for Dinner? </div>
                            </div>
                            <div class="table">
                                <h6>Yelp! API</h6>
                                <p class="card-description"> Taps into the Yelp! API to arrive at list of suggested restaurants local to user based on craving considerations.</p>
                                <a href="https://lit-stream-91450.herokuapp.com/"><button className="btn-info-2">V I E W</button></a> 
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="online-shop.png" alt=""/>
                                    <div class="card-caption">Bamazon</div>
                            </div>
                            <div class="table">
                                <h6>MySQL w/ Node.JS</h6>
                                <p class="card-description">Online shop allows customers to buy products, supervisors to manage inventory & Sales Dept. to track sales metrics. </p>
                                <button class="btn-info-2">V I E W</button> 
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="birthday.png" alt=""/>
                                    <div class="card-caption"> Birthday Headlines</div>
                            </div>
                            <div class="table">
                                <h6>HTML, CSS, JavaScript</h6>
                                <p class="card-description"> Fun facts from your first day in history are revealed through this fun app and its links to the NYTimes historic API. </p>
                                <a href="https://patrickcorcoran10.github.io/Project-1/"><button className="btn-info-2">V I E W</button></a> 

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;

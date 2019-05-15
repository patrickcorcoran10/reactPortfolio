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
                                <img class="img" src="illinois.png" alt=""/>
                                    <div class="card-caption"> Illinois Politics Scrape </div>
                            </div>
                            <div class="table">
                                <h6>Cheerio Scrape</h6>
                                <p class="card-description"> Heroku-deployed application allows users to stay up-to-date with the current political reporting in Springfield and Chicago.</p>
                                <a href="https://illinois-pol-scraper.herokuapp.com/"><button className="btn-info-2">V I E W</button></a> 
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
                                <p class="card-description"> Enhanced Full-Stack app now allows potential golfers to book tee-times through the site. </p>
                                <a href="https://morning-coast-79159.herokuapp.com/"><button className="btn-info-2">V I E W</button></a> 
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="burger.jpg" alt=""/>
                                    <div class="card-caption"> Burger's For Sale</div>
                            </div>
                            <div class="table">
                                <h6>Handlebars</h6>
                                <p class="card-description"> Burger Board is a live updating burger list that allows the user to view, consume or create new burgers to put on the menu. </p>
                                <a href="https://burger-board-pc.herokuapp.com/"><button className="btn-info-2">V I E W</button></a> 
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
                                <img class="img" src="white-sox-team.jpg" alt=""/>
                                    <div class="card-caption"> Chicago White Sox Pick-to-Click Game </div>
                            </div>
                            <div class="table">
                                <h6>React.js</h6>
                                <p class="card-description"> Simple game written in react.js. Uses props and state to generate a game with the Chicago White Sox 2018 roster.</p>
                                <a href="https://sox-pick-to-click.herokuapp.com/"><button className="btn-info-2">V I E W</button></a> 
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="shoppingCart.png" alt=""/>
                                    <div class="card-caption">Bamazon</div>
                            </div>
                            <div class="table">
                                <h6>MySQL w/ Node.JS</h6>
                                <p class="card-description">Online shop allows customers to buy products, supervisors to manage inventory & Sales Dept. to track sales metrics. </p>
                                <a href="https://patrickcorcoran10.github.io/bamazon/"><button class="btn-info-2">V I E W</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="b2b.jpeg" alt=""/>
                                    <div class="card-caption"> B2B Sales Qualifier</div>
                            </div>
                            <div class="table">
                                <h6>ReactJs, Sequelize, NodeJs, Express, and ChartJS-2.</h6>
                                <p class="card-description"> This ReactJs, MySQL, Express, NodeJs application helps qualify potiential business leads for the user. It takes information for potential B2B clients, calculates the increase in revenue, as well as return on investment and displays the information both numerically and graphically.</p>
                                <a href="https://moorhouse.herokuapp.com/"><button className="btn-info-2">V I E W</button></a> 

                                
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

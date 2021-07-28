---
title: "Open vs. Contested 3Pt Shooting in the 2020-2021 NBA Regular Season"
date: 2021-06-30
tags: [Bootstrap, Resampling, Data Analysis, RStudio]
excerpt: "June 30 2021: Comparing Open vs. Contested 3Pt Shooting of 28 qualifying NBA players"
mathjax: "true"
---

# Introduction

<p>
In recent years, three point shooting has become an increasingly valued skill, as NBA players and teams have learned to unlock its full potential. 
Three point attempts are becoming more frequent, and the skill of individual shooters has also increased. 
Among 28 qualifying players (minimum 70% of the season played, and 1 contested three point attempt per game), I looked at their
shooting percentages on both open and contested three pointers, in an effort to explore how the league's elite shooters are affected
by a hand in their face.
</p>

# Data and Methodology


All data was collected from NBA.com, using the **nba_api** package in Python. Filtering through all qualifying player id's,
I was able to access their individual statistics, tracking very open, open, tight, and very tight three point attempts and makes.  <br />

For those unfamiliar, NBA.com classifies shots based on the distance of the closest defender:  <br />

* Very Open - 6+ Feet
* Open - 4-6 Feet
* Tight - 2-4 Feet
* Very Tight - 0-2 Feet

For simplicity, "Very Open" and "Open" were considered as open, and "Tight" and "Very Tight" were considered as contested.  <br />

Using plot.ly, I created a simple interactive scatterplot. The headshots were collected from [nba-players.herokuapp.com](https://nba-players.herokuapp.com/), 
with the exception of several players who entered the league after the 2017-18 season (manual collection was used for those players).
You can hover over the players to see the exact shooting percentages, as well as total attempts and makes.  <br />

Then, using matplotlib, I created another visualization, directly comparing open and contested three point percentage for each of the 28 players.
This graph provides a more direct comparison of individual shooting percentages, rather than an overall comparison to the rest of the league.



# Figures

<iframe src="/images/contested_shooting_scatter.html" title="Interactive Scatter Plot" id="Iframe"></iframe>

<script>
        // Selecting the iframe element
        var frame = document.getElementById("Iframe");
          
        // Adjusting the iframe height onload event
        frame.onload = function()
        // function execute while load the iframe
        {
          // set the height of the iframe as 
          // the height of the iframe content
          frame.style.height = 
          frame.contentWindow.document.body.scrollHeight + 'px';
           
  
         // set the width of the iframe as the 
         // width of the iframe content
         frame.style.width  = 
          frame.contentWindow.document.body.scrollWidth + 'px';
              
        }
</script>

<img src="/images/contested_shooting.png" alt="Contested Shooting Visualization">
---
title: "Has the NBA regular season gotten less exciting? A Quantitative Analysis (Part 1)"
date: 2025-10-07
tags: [NBA, Basketball, Python, Web Scraping]
excerpt: "October 07 2025: Has the NBA regular season gotten less exciting? Part 2: The impact of parity (or lack thereof)"
mathjax: "true"
---

## Introduction

This is a continuation of a previous [post](https://jeremylu43.github.io/nba_excitement_part_1/). Using [inpredictable's](https://inpredictable.com), [**excitement**](https://www.inpredictable.com/2014/05/top-game-finder-for-nba.html),
and [**tension**](https://www.inpredictable.com/2020/04/an-update-to-tension-index-with-assist_11.html) data from the 1996-97 to 2024-25 seasons, I want to explore
the question: Has the NBA regular season gotten less exciting? 

Last time, we made a cursory attempt at comparing excitement and tension across seasons by graphing the number of games in the [top 100](https://jeremylu43.github.io/images/NBA_Excitement/excitement_scatter_top_100.png) and [top 500](https://jeremylu43.github.io/images/NBA_Excitement/excitement_scatter_top_500.png) of excitement and tension.
Based on these two graphs, we have a signal that perhaps tension has decreased, while excitement has increased. This potential change might be attributed to how the NBA has shifted to a faster pace, relaxed defensive rules, and 
an emphasis on three point shooting. Leads can balloon quickly (which would reduce tension), and disappear just as quickly, leading to more comebacks (and therefore hire excitement) and closer games.
While hypothesizing why this signal exists, another potential factor I thought of which could affect tension and excitement across an entire season, would be parity. Theoretically,
if teams were more evenly matched (reflected by closer standings),  games might be closer, resulting in higher tension, and perhaps higher excitement, due to their [correlation](https://jeremylu43.github.io/images/NBA_Excitement/excitement_tension_scatter.png). This
blog post will attempt to answer **how much does parity affect a season's daily median excitement and tension?**

## Measuring Parity

The [**Gini Coefficient**](https://en.wikipedia.org/wiki/Gini_coefficient) is a statistical measure that has commonly be used to [estimate the parity of a sports league](https://harvardsportsanalysis.org/2017/08/an-analysis-of-parity-levels-in-soccer/) via season standings.
It's origins are in economics, where this measure is used to evaluate inequality among income levels. To explain it simply, a Gini coefficient of 0 means perfect inequality, where all wealth would be equal. For the NBA, that means every team would be 41-41.
A Gini of 1 would mean that one person holds all the wealth(a basketball equivalent doesn't exist, since it's impossible for one team to have all the wins). Basically, a **higher Gini coefficient means less parity** in a season.

Gini coefficient can be calculated as: $\dfrac{1}{2} \cdot \text{Relative Mean Difference} = \dfrac{1}{2} \cdot \dfrac{\text{Mean Difference}}{\text{Mean Win Percentage}}$

In our context, let $w_t$ be the win percentage for team $t$. We can calculate the Gini Coefficient as: $\dfrac{1}{2} \cdot \dfrac{\Sigma_{t=1}^n |w_t-\overline{w}|}{\overline{w}}$ where $\overline{w}$ represents the average win percentage and $n$ is the number of teams in that season.

Using this, we have the Gini's for each season sorted:

Additionally, we can compare the closest and least close seasons in terms of standings in our data:

<img src="/images/NBA_Excitement/gini_win_distribution.png" alt="2022-23 season is closest with 0.091 Gini and 1996-97 season is least close with Gini 0.161" width="500"/>

In the 2022-23 season, the team standings are extremely close, with only 6 teams eclipsing 50 wins, and 14 teams between 40 and 50 wins. The Giannis led Bucks placed first with a record of 58-24 while the Pistons finished last at 17-65.

Meanwhile, the 1997-97 was the least close season, as Michael Jordan and his Bulls led the league with a record of 69-13. 3 teams had over 60 wins, and 7 had less than 30 wins (compared to only 3 in 2022-23). Adding to the gap in competitiveness, the Celtics and Grizzlies finished at 15-67 and 14-68, respectively.

## Parity and Excitement/Tension


## Conclusion


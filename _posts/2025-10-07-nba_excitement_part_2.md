---
title: "Has the NBA regular season gotten less exciting? Part 2: The impact of parity (or lack thereof)"
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

Gini coefficient can be calculated as: $$\dfrac{1}{2} \cdot \text{Relative Mean Difference} = \dfrac{1}{2} \cdot \dfrac{\text{Mean Difference}}{\text{Mean Win Percentage}}$$

In our context, let $$w_t$$ be the win percentage for team $$t$$. We can calculate the Gini Coefficient as: $$\dfrac{1}{2} \cdot \dfrac{\Sigma_{t=1}^n |w_t-\overline{w}|}{\overline{w}}$$ where $$\overline{w}$$ represents the average win percentage and $$n$$ is the number of teams in that season.

Using this, we have the Gini's for each season sorted:

| **Original** |  |  |  |  | **Sorted** |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Season | Best Team | Worst Team | Gini |  | Season | Best Team | Worst Team | Gini |
| 1996 | CHI (69 - 13) | VAN (14 - 68) | 0.161 |  | 1996 | CHI (69 - 13) | VAN (14 - 68) | 0.161 |
| 1997 | CHI (62 - 20) | DEN (11 - 71) | 0.153 |  | 1997 | CHI (62 - 20) | DEN (11 - 71) | 0.153 |
| 1998 | SAS (37 - 13) | VAN (8 - 42) | 0.128 |  | 2008 | CLE (66 - 16) | SAC (17 - 65) | 0.143 |
| 1999 | LAL (67 - 15) | LAC (15 - 67) | 0.13 |  | 2007 | BOS (66 - 16) | MIA (15 - 67) | 0.141 |
| 2000 | SAS (58 - 24) | CHI (15 - 67) | 0.132 |  | 2023 | BOS (64 - 18) | DET (14 - 68) | 0.137 |
| 2001 | SAC (61 - 21) | GSW (21 - 61) | 0.111 |  | 2009 | CLE (61 - 21) | NJN (12 - 70) | 0.137 |
| 2002 | SAS (60 - 22) | DEN (17 - 65) | 0.115 |  | 2019 | MIL (56 - 17) | GSW (15 - 50) | 0.134 |
| 2003 | IND (61 - 21) | ORL (21 - 61) | 0.108 |  | 2013 | SAS (62 - 20) | MIL (15 - 67) | 0.134 |
| 2004 | PHX (62 - 20) | ATL (13 - 69) | 0.124 |  | 2014 | GSW (67 - 15) | MIN (16 - 66) | 0.133 |
| 2005 | DET (64 - 18) | POR (21 - 61) | 0.106 |  | 2010 | CHI (62 - 20) | MIN (17 - 65) | 0.132 |
| 2006 | DAL (67 - 15) | MEM (22 - 60) | 0.104 |  | 2000 | SAS (58 - 24) | CHI (15 - 67) | 0.132 |
| 2007 | BOS (66 - 16) | MIA (15 - 67) | 0.141 |  | 2012 | MIA (66 - 16) | ORL (20 - 62) | 0.13 |
| 2008 | CLE (66 - 16) | SAC (17 - 65) | 0.143 |  | 1999 | LAL (67 - 15) | LAC (15 - 67) | 0.13 |
| 2009 | CLE (61 - 21) | NJN (12 - 70) | 0.137 |  | 2024 | OKC (68 - 14) | UTA (17 - 65) | 0.129 |
| 2010 | CHI (62 - 20) | MIN (17 - 65) | 0.132 |  | 1998 | SAS (37 - 13) | VAN (8 - 42) | 0.128 |
| 2011 | CHI (50 - 16) | CHA (7 - 59) | 0.128 |  | 2011 | CHI (50 - 16) | CHA (7 - 59) | 0.128 |
| 2012 | MIA (66 - 16) | ORL (20 - 62) | 0.13 |  | 2015 | GSW (73 - 9) | PHI (10 - 72) | 0.127 |
| 2013 | SAS (62 - 20) | MIL (15 - 67) | 0.134 |  | 2017 | HOU (65 - 17) | PHX (21 - 61) | 0.126 |
| 2014 | GSW (67 - 15) | MIN (16 - 66) | 0.133 |  | 2004 | PHX (62 - 20) | ATL (13 - 69) | 0.124 |
| 2015 | GSW (73 - 9) | PHI (10 - 72) | 0.127 |  | 2018 | MIL (60 - 22) | NYK (17 - 65) | 0.12 |
| 2016 | GSW (67 - 15) | BKN (20 - 62) | 0.107 |  | 2021 | PHX (64 - 18) | HOU (20 - 62) | 0.119 |
| 2017 | HOU (65 - 17) | PHX (21 - 61) | 0.126 |  | 2020 | UTA (52 - 20) | HOU (17 - 55) | 0.116 |
| 2018 | MIL (60 - 22) | NYK (17 - 65) | 0.12 |  | 2002 | SAS (60 - 22) | DEN (17 - 65) | 0.115 |
| 2019 | MIL (56 - 17) | GSW (15 - 50) | 0.134 |  | 2001 | SAC (61 - 21) | GSW (21 - 61) | 0.111 |
| 2020 | UTA (52 - 20) | HOU (17 - 55) | 0.116 |  | 2003 | IND (61 - 21) | ORL (21 - 61) | 0.108 |
| 2021 | PHX (64 - 18) | HOU (20 - 62) | 0.119 |  | 2016 | GSW (67 - 15) | BKN (20 - 62) | 0.107 |
| 2022 | MIL (58 - 24) | DET (17 - 65) | 0.091 |  | 2005 | DET (64 - 18) | POR (21 - 61) | 0.106 |
| 2023 | BOS (64 - 18) | DET (14 - 68) | 0.137 |  | 2006 | DAL (67 - 15) | MEM (22 - 60) | 0.104 |
| 2024 | OKC (68 - 14) | UTA (17 - 65) | 0.129 |  | 2022 | MIL (58 - 24) | DET (17 - 65) | 0.091 |

Additionally, we can compare the closest and least close seasons in terms of standings in our data:

<img src="/images/NBA_Excitement/gini_win_distribution.png" alt="2022-23 season is closest with 0.091 Gini and 1996-97 season is least close with Gini 0.161" width="500"/>

In the 2022-23 season, the team standings are extremely close, with only 6 teams eclipsing 50 wins, and 14 teams between 40 and 50 wins. The Giannis led Bucks placed first with a record of 58-24 while the Pistons finished last at 17-65.

Meanwhile, the 1997-97 was the least close season, as Michael Jordan and his Bulls led the league with a record of 69-13. 3 teams had over 60 wins, and 7 had less than 30 wins (compared to only 3 in 2022-23). Adding to the gap in competitiveness, the Celtics and Grizzlies finished at 15-67 and 14-68, respectively.

## Parity and Excitement/Tension
<img src="/images/NBA_Excitement/gini_regressions.png" alt="Gini regression with median daily exictement and median daily tension. Median daily excitement has a negative slope indicating less excitement when there is less parity, median daily tension has no relationship" width="500"/>

Plotting a regression of each season's Gini index with median daily excitement and tension, we can see a negative relationship between Gini and median daily excitement, meaning that
excitement is lower in seasons where team standings are further separated. Under this model, we can expect that the difference in median daily excitement between the 2022-23 and the 1996-97 season to be approximately 1, although
the actual difference was almost 2.5. 2019 does stand out as an outlier, most likely due to the [bubble season](https://en.wikipedia.org/wiki/2020_NBA_Bubble). Only top teams were invited to
compete, with every game being meaningful for playoff hopes and seeding. As a result, daily median excitement was higher, and the standings were also skewed, which affects the Gini coefficient.

Removing the bubble shows a slightly stronger relationship between Gini coefficient and median daily excitement:
<img src="/images/NBA_Excitement/gini_regressions_no_bubble.png" alt="Gini regression with median daily exictement and median daily tension. Median daily excitement has a negative slope indicating less excitement when there is less parity, median daily tension has no relationship" width="500"/>


For tension, there is a lack of a clear relationship. However, there is no 

## Conclusion


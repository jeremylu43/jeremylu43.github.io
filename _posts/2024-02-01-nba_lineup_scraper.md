---
title: "New NBA lineup scraper accounts for restrictions such as player inclusions, player exclusions, team, and minimum minutes played (per lineup)"
date: 2024-02-01
tags: [Web Scraping, NBA, basketball]
excerpt: "February 1 2024: New NBA lineup scraper accounts for restrictions such as player inclusions, player exclusions, team, and minimum minutes played (per lineup)."
mathjax: "true"
---
<p>
To my fellow NBA enthusiasts, I've always struggled with getting lineup data featuring different sets of players. NBA.com and other websites have taken great leaps to make this data available, but I find most advanced filters requiring a paywall.
</p>

<p>
So instead, I wrote my own tool which utilizes Swar Patel's [nba_api package](nba_api/docs/nba_api/stats/endpoints). This script collects and aggregates lineup data from NBA.com, while accounting for restrictions such as player inclusions, player exclusions, team, and minimum minutes played (per lineup).
The advantages of this script are that it is 100% **FREE** and allows for **player exclusions** as well as **minute restrictions**. It also uses data from NBA.com, which utilizes **tracking and camera data**, rather than estimations.
</p>

<p>
You can try it out at [here.](https://github.com/jeremylu43/NBA-Lineup-Scraping/) Simply follow the instructions and make sure to check out some of the notes and limitations.
</p>

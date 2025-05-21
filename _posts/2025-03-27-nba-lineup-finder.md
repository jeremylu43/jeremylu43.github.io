---
title: "Serverless Web Design for NBA Lineup Performance using AWS"
date: 2025-03-27
tags: [NBA, Web Design, AWS, Serverless, AWS Lambda, ChatGPT, LLM, HTML, JavsScript]
excerpt: "March 27 2025: Serverless Web Design for NBA Lineup Performance using AWS"
mathjax: "true"
---

## Introduction 


<p>
<a href="https://jeremylu43.github.io/nba_lineup_scraper/">Previously</a>, I had made a Python script which pulled five man lineup data,
jereI was studying AWS for the solutions architect certification recently and wanted to implement the skills I had been learning. 
with filtering for player inclusion, exclusion, and minimum minutes played. However, it's quite clunky to run and inaccessible to people
without a myriad of technical skills. Since I already had most of the backend code figured out, it seemed like a straightforward and simple
project to build out a web version of this script, that could be used by any non-technical user.
</p>

<p>
My final product can be found <a href="https://nba-lineup-finder.github.io/">here</a>.
</p>


## App Architecture

<p>
Before I begin talking about my process and people realize I'm completely fraudulent, my disclaimer is that I've never built a fully functional website before.
Sorry if I violated a bunch of industry standards and failed to create a design/diagram before building. I've always preferred to make mistakes and learn anyways :P.
</p>

<p>
When I was watching videos on AWS Lambda, I recognized instantly how useful this would be for small apps, especially in microservice designs. 
For my application, once a user had the parameters for the lineup request they wanted, the return for the results could be accomplished with AWS Lambda. That was
the core function of my site, and I already had most of the code. From there, I started to work backwards. 
I needed a function to generate all of the players on the team, and also one to get all the teams in the league (preparing for the expansion.)
</p>

<p>
I went to work building my Lambda function for getting NBA lineups, which used the <code>nba_api</code> Python package. 
However, NBA.com, annoyingly, actually blocks API requests from AWS. There was the option of making the requests using a proxy server, but I didn't feel like
paying for one. My solution was to pull all 5 man lineups from NBA.com myself, and have it in an Amazon S3 bucket. Then my Lambda function would
essentially query from the lineups stored in my S3 bucket. So I wrote some code that would collect the 5 man lineup data using <code>nba_api</code>, and then upload
it to Amazon S3 from my PC. Another challenge arose from this: I was working on this during the regular season, and needed
to continually update the 5 man lineup data. Honestly at this point I was too bothered to formulate a way to automate this process daily -- I didn't want to 
keep my laptop on everyday for an automated process to run. So I just manually updated things by running my Amazon S3 upload script whenever I remembered too.
I know this isn't the most elegant solution, but it's free and it still works.
</p>

<p>
For frontend, I've had good experiences using Github Pages (which this blog is on obviously) so I just stuck with what I was familiar with. All in all, the app
is designed as such:
</p>


**Frontend:**

- Github Pages
- Runs on some combination of HTML and JS



**Backend:**

- Amazon S3 - to store 5 man lineup data
- `get_nba_lineups` - Lambda function which queries my S3 data to give lineup performance results
- `get_team_players` - Lambda function which makes API call to pbpstats.com for all players on a team in the 2024-25 season.
- `get_nba_teams` - Lambda function which makes API call to balldontlie.io to get all the teams in the NBA.


## Vibe Building

<p>
Prior to this, I had basic experience in HTML and CSS; real barebones, early HTML Internet design skills. To build an interactive, non-static website, as well as
make API calls to my AWS Lambda functions, I would need to incorporate JavaScript. One key problem: I've never coded in JavaScript. Luckily, ChatGPT is pretty decent
at coding (still can't multiply two digit numbers together though....) and I was able to vibe build my way to a decent end product. My process essentially boiled down to:
</p>

- Ask ChatGPT to build a small feature of my site
- Paste the huge chunk and test the website
- Fix edge cases
- Debug the inevitable errors (variables problems, order of site processes, etc...)
- Ask ChatGPT to fix the problems that it created itself
- Repeat

<p>
Overall, this program was pretty successful! The hardest part is honestly formulating a prompt that accurately represents what I wanted. There were also struggles
getting certain parts of the code to work and staying consistent with previous elements, which ChatGPT did not account for.
Luckily, once I had the boilerplate and skeleton down, getting things to work cohesively wasn't too difficult. For small personal projects under a time crunch, I'd definitely 
recommend utilizting ChatGPT as a pseudo-engineer and debugger. There's certainly a small trade off between thorough learning and understanding, 
and the speed and ease of vibe building, but you can mitigate this (and are almost forced to) by looking back and fixing coding errors yourself.
</p>

## Conclusion
<p>
tl;dr: I used ChatGPT and AWS Lambda to help build a website where you can search for NBA lineup performance data.
</p>


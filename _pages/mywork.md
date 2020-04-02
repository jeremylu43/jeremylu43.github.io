---
layout: archive
permalink: /my-work/
title: "My Work"
author-profile: true
---


<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> <br>
	  {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
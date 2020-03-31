layout: archive
permalink: /my-work/
title: "My Work"
author-profile: true
---

{% include base_path %}
{% include group-by-array collection=site.posts field="tags" &}

{% for tag in group_names %}
	{% assign posts = group_items[forloop.index0] %}
	<h2 id="{{ tag | slugify }}" class="archive_subtitle">{{ tag }}</h2>
	{% for post i nposts %}
		{% include archive-single.html &}
	{% endfor %}
{% endfor %}
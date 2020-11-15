---
layout: page
permalink: /sandbox/
exclude: true
heading: I like cupcakes
show_heading: true
tags: [ First Tag, Second Tag,    Third Tag ]
---

<html lang="en">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Grab a variable from the top</h1>
    	{% highlight liquid %}
    	{% raw %}
    		<h4>{{ page.heading }}</h4>
    		<p>{{ page.heading }}</p>
    		<h4>{{ page.heading | upcase }}</h4>
    	{% endraw %}
    	{% endhighlight %}
    		<h4>{{ page.heading }}</h4>
    		<p>{{ page.heading }}</p>
    		<h4>{{ page.heading | upcase }}</h4>
    <h1>Mess with a variable</h1>	
    	{% highlight liquid %}
    	{% raw %}
    		{% if page.show_heading %}
   		 <h4>{{ page.heading | upcase | truncate: 8 }}</h4>
    		{% endif %}
    	{% endraw %}
    	{% endhighlight %}
        	{% if page.show_heading %}
   		 <h4>{{ page.heading | upcase | truncate: 8 }}</h4>
    		{% endif %}
    <h1>Loops in Liquid</h1>
	{% highlight liquid %}
	{% raw %}
		{% for num in (1..10) %}
		<h1>{{ page.heading | upcase | truncate: num }}</h1>
		{% endfor %}
	{% endraw %}
	{% endhighlight %}
		{% for num in (0..10) %}
		<h1>{{ page.heading | upcase | truncate: num }}</h1>
		{% endfor %}
		<iframe src="https://www.google.com/maps/d/embed?mid=1ELysbd_HcyENvsuK5auBFbFpwZ0" width="640" height="480"></iframe>
    <h1>Stuff that doesn't work</h1>
	{% highlight liquid %}
	{% raw %}
		{% if page.tags.size > 0 %}
 		Tag{% if page.tags.size > 1 %}s{% endif %}:
  		{{ page.tags | sort | join: ", " }}
		{% endif %}
	{% endraw %}
	{% endhighlight %}
		This should grab the tags from the page but it is likely not wokring becasue there are no tags on this page and it is not a post.  
    <h1>Stuff that doesn't work</h1>
<h2>{{ site.data.samplelist.docs_list_title }}</h2>
<ul>
   {% for item in site.data.samplelist.docs %}
      <li><a href="{{ item.url }}">{{ item.title }}</a></li>
   {% endfor %}
	  </ul>
  </body>
</html>

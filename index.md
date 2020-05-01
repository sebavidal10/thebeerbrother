---
layout: default
title: "The BeerBrother"
---

<img class="image-banner-home" src="/assets/images/{{ site.posts[0].date | date: "%Y" }}/{{ site.posts[0].date | date: "%m" }}/{{ site.posts[0].title | slugify }}-banner.jpg" alt="Placeholder image">
<div class="gradient-back-home"></div>
<div class="container">
  <div class="title-post">
    <div class="b-title">
      <a href="{{ site.posts[0].url }}">{{ site.posts[0].title }}</a>
    </div>
    <p class="is-hidden-mobile">{{ site.posts[0].lead }}</p>
    <div>
      {% for tag in site.posts[0].tags %}
        <a class="tag {% if tag == 'spoiler' %}is-danger{% else %}is-dark{% endif %}" href="/tags/{{tag | slugify }}">#{{tag}}</a>
      {% endfor %}
    </div>
  </div>
</div>

<div class="container">
  <div class="columns is-multiline" >
      {% for post in site.posts limit:14 %}
        {% if forloop.index == 1 %}
          
        {% else %}
            <a href="{{ post.url }}">
              {% if forloop.index == 5 or forloop.index == 6 %}
                  {%- comment -%} class = "is-6" {%- endcomment -%}
                  <div class="column box is-6">
              {% elsif forloop.index == 10 %}
                  {%- comment -%} class = "is-4" {%- endcomment -%}
                  <div class="column box is-4">
              {% elsif forloop.index == 11 %}
                  {%- comment -%} class = "is-8" {%- endcomment -%}
                  <div class="column box is-8">
              {% else %}
                  {%- comment -%} class = "is-4" {%- endcomment -%}
                  <div class="column box is-4">
              {% endif %}
                
                <time class="subtitle is-7 datetime">{{ post.date | date: "%b %-d, %Y" }}</time>
                <div class="card-image">
                  <figure class="image">
                    <img src="/assets/images/{{ post.date | date: "%Y" }}/{{ post.date | date: "%m" }}/{{ post.title | slugify }}-banner.jpg" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content"> 
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="/assets/images/author/{{ post.author }}.jpg" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{{ post.title }}</p>
                      <p class="subtitle is-7">@{{ post.author }}</p>
                    </div>
                  </div>

                  <div class="content">
                    <div class="lead">{{ post.lead }}</div>
                    {% for tag in post.tags %}
                      <a class="tag {% if tag == 'spoiler' %}is-danger{% else %}is-dark{% endif %}" href="/tags/{{tag | slugify }}">#{{tag}}</a>
                    {% endfor %}<br>
                  </div>
                </div>
              </div>
            </a>
        {% endif %}
      {% endfor %}
  </div>
</div>
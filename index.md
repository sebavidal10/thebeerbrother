---
layout: default
title: 'The BeerBrother'
---

{% assign months = "Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre" | split: "|" %}

<h1 style="display: none">{{ site.title }}</h1>

<div class="container" style="padding-top: 85px">
  <div class="columns is-multiline" >
      {% for post in site.posts limit:15 %}
        <a href="{{ post.url }}" title="post-{{post-title}}">
            {% if forloop.index == 4 or forloop.index == 5 %}
                <div class="column box is-6">
            {% elsif forloop.index == 9 %}
                <div class="column box is-4">
            {% elsif forloop.index == 10 %}
                <div class="column box is-8">
            {% elsif forloop.index == 14 %}
                <div class="column box is-8">
            {% else %}
                <div class="column box is-4">
            {% endif %}
                {% assign m = post.date | date: "%-m" | minus: 1 %}
                <span class="subtitle is-7 datetime">{{ months[m] }}{{ post.date | date: " %-d, %Y" }}</span>
                <div class="card-image">
                    <figure class="image">
                        <img src="/assets/images/{{ post.date | date: "%Y" }}/{{ post.date | date: "%m" }}/{{ post.title | slugify }}-banner.jpg" alt="Banner de {{ post.title }}" loading="lazy">
                    </figure>
                </div>

                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="/assets/images/author/{{ post.author }}.jpg" alt="Foto de {{ post.author }}" loading="lazy">
                            </figure>
                        </div>
                        <div class="media-content">
                          <h2 class="title is-4">{{ post.title }}</h2>
                          <p class="subtitle is-7">@{{ post.author }}</p>
                        </div>
                    </div>

                    <div class="content">
                      <div class="lead">{{ post.description }}</div>
                      {% for cat in post.categories %}
                        <a class="tag is-dark" title="category-slug" href="/categoria/{{cat | slugify }}">#{{cat}}</a>
                      {% endfor %}
                      {% for tag in post.tags %}
                        {% if tag != "spoiler" %}
                          <a class="tag is-dark" title="tag-slug" href="/tags/{{tag | slugify }}">#{{tag}}</a>
                        {% else %}
                          <span class="tag is-danger">{{tag}}</span>
                        {% endif %}
                      {% endfor %}<br>
                    </div>
                </div>

            </div>
          </a>
      {% endfor %}

  </div>

  <div class="">
    <!-- HORIZONTAL ADS -->
  </div>

</div>

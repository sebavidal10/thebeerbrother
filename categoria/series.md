---
layout: default
---

<div class="container" style="padding-top: 100px">
{% assign months = "Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre" | split: "|" %}

    <h1 class="title title-section">Categoría: Series</h1>
    <div class="columns is-multiline" >
        {% for cat in site.categories %}
            {% if cat[0] == 'series' %}
                {% for post in cat[1] %}
                    <a href="{{ post.url }}">
                        <div class="column box is-4">
                            {% assign m = site.posts[0].date | date: "%-m" | minus: 1 %}
                            <time class="subtitle is-7 datetime">{{ months[m] }}{{ post.date | date: " %-d, %Y" }}</time>
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
                                    {% for cat in post.categories %}
                                        <a class="tag is-dark" href="/categoria/{{cat | slugify }}">#{{cat}}</a>
                                    {% endfor %}
                                    {% for tag in post.tags %}
                                    <a class="tag is-dark" href="/tags/{{tag | slugify }}">#{{tag}}</a>
                                    {% endfor %}<br>
                                </div>
                            </div>
                        </div>
                    </a>
                {% endfor %}
            {% endif %}
        {% endfor %}
    </div>

</div>

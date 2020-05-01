---
layout: default
---
<div class="container" style="padding-top: 100px">

<h1 class="title title-section">Tag: Spoiler</h1>

    <div class="columns is-multiline" >
        {% for tag in site.tags %}
            {% if tag[0] == 'spoiler' %}
                {% for post in tag[1] %}
                    <a href="{{ post.url }}">
                        <div class="column box is-4">
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
                {% endfor %}
            {% endif %}
        {% endfor %}
    </div>

</div>
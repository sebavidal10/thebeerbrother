---
layout: default
---

<div class="container" style="padding-top: 100px">
  <h1 class="title title-section">Tags</h1>
  <div class="columns is-multiline">

  {% assign sortedTags = site.tags | sort: tag[0] %}

    {% for tag in sortedTags %}
        <div class="column is-4 box">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <a href="/tags/{{ tag[0] | slugify }}" class="post-tag">{{ tag[0] | capitalize }}</a>
              </p>
            </header>
            <div class="card-content card-tabs">
              <div class="content">
                <a href="/tags/{{ tag[0] | slugify }}" style="cursor: pointer">
                  <img src="/assets/images/tags/logo-{{ tag[0] | slugify }}.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
  {% endfor %}
  
  </div>
</div>

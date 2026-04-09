---
layout: page
permalink: /publications/
title: publications
description: The symbol * means equal contribution and † means corresponding author.
year_start: 2024
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{% assign current_year = 'now' | date: '%Y' | plus: 0 %}
{%- for y in (page.year_start..current_year) reversed %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

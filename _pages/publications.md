---
layout: page
permalink: /publications/
title: publications
description: '*' means equal contribution and '†' means corresponding author.
years: [2024, 2025]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years reversed %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

---
title: Miscellaneous Notes
categories: Miscellaneous
tags:
  - Miscellaneous
  - Notes
toc: true
---

Miscellaneous notes during the use of this blog.

This is a personal notes that keeps track of all procedure, problems, tricks, etc. during the building and writing process of this blog.
Hopes it will help someone, at least me, when I'd like to migrate to another blog or unfortunately I have to re-build my blog.

<!-- more -->

## Building Notes

Installing **hexo** is quite simple: just install it through `npm`.
At 2022-09-06, the newest version of **hexo** is fully compatible with my workaround:

- Windows 11 + WSL 2
- Ubuntu 20.04 LTS
- Node.js v18.x

To install `Node.js` on Ubuntu, follow the official [guide](https://github.com/nodesource/distributions/blob/master/README.md) of installing `Node.js` binary distribution, where the commands are already included below.

``` bash shell
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g hexo-cli
```



## Initialize a Blog Repository

Following the [hexo official guide](https://hexo.io/docs/setup), run

``` bash shell
hexo init <folder>
cd <folder>
npm install
```

Personally, I put my blog folder in `~/blog/`, which is put in github repo `hexo-blog`.

**TODO:** I am planning to use *Github Action* with hexo to publish my blog automatically on site `fallcicada.github.io`.



## Customization in Blog

As often mentioned in Chinese SNS, ***the end of customization is the default***.
I do not want to put much focus on the customization part of the blog.
Except for a clean hexo theme [**Icarus**](https://github.com/ppoffice/hexo-theme-icarus), I only uses a few additional plugins which are essential in building my blog, currently only including [hexo-pdf](https://github.com/superalsrk/hexo-pdf/).

### Hexo Theme **Icarus**

To install hexo theme [**Icarus**](https://github.com/ppoffice/hexo-theme-icarus), follow its [Readme](https://github.com/ppoffice/hexo-theme-icarus/blob/master/README.md) or its [guide](https://ppoffice.github.io/hexo-theme-icarus/). Some possible dependencies should also be installed together.

``` bash
npm install -S hexo-theme-icarus hexo-renderer-inferno
hexo config theme icarus
```

This will automatically modify your `_config.yml`, and will also create another theme-specific configuration file `_config.icarus.yml` at the same directory.
Unlisted configuration is kept the same as default.

The `highlight` config should be carefully checked, as I have met several bugs due to inappropriate settings under this part.
To ensure that 2 enters break a line rather than 1 enter, set `marked.gfm: true` in the config file, as in [回车就是换行和预览不一致异常问题](https://github.com/hexojs/hexo/issues/2200).

``` yaml _config.yml >folded
# Basic Information
title: FallCicada's Blog
subtitle: ''
suffix: FallCicada
description: FallCicada's Personal Blog
keywords:
  - FallCicada
  - Blog
author: FallCicada
language: en
timezone: America/Los_Angeles
url: 'https://fallcicada.github.io/'
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace: 
marked:
  gfm: true
  pedantic: false
  sanitize: false
  tables: true
  breaks: false
  smartLists: true
  smartypants: true
  modifyAnchors: ''
  autolink: true
```

As for Icarus-specific config, I removed a lot of unnecessary component, as noted below.
Additionally, the logo, or any other image that needs to be placed in the website template, should be put in directory `<icarus directory>/source/img/xxx`, and be indexed as `/img/xxx` in config file.
The directory of Icarus, installed directly through `npm`, should be `<blog directory>/node_modules/hexo-theme-icarus`.


``` yaml _config.icarus.yml >folded
# Modified config
logo: /img/kaltsit_sticker.png
head.favicon: /img/kaltsit_sticker.png
navbar.links.My GitHub.url: https://github.com/FallCicada
sidebar.left.sticky: true
plugins.katex: true

# Commented out config
head.manifest
head.open_graph
head.structured_data
head.rss
comment
donate
widgets.profile.author_title
widgets.profile.social_links
widgets.links
widgets.categories
widgets.subscribe_email
widgets.adsense
widgets.followit
plugins.baidu_analytics
plugins.bing_webmaster
plugins.busuanzi
plugins.cnzz
plugins.cookie_consent
plugins.google_analytics
plugins.hotjar
plugins.statcounter
plugins.twitter_conversion_tracking
```

### Page Layout

To modify the page layout, follow the [layout guide](https://ppoffice.github.io/hexo-theme-icarus/uncategorized/faq/#Layout) of Icarus theme.
Personally, I modified the `<icarus_directory>/layout/layout.jsx` and `<icarus_directory>/common/widgets.jsx` to have a narrower widget column and wider content column.

``` diff /layout/layout.jsx
  <div class={classname({
      column: true,
      'order-2': true,
      'column-main': true,
      'is-12': columnCount === 1,
-     'is-8-tablet is-8-desktop is-8-widescreen': columnCount === 2,
-     'is-8-tablet is-8-desktop is-6-widescreen': columnCount === 3
+     'is-8-tablet is-9-desktop is-9-widescreen': columnCount === 2,
+     'is-8-tablet is-9-desktop is-7-widescreen': columnCount === 3
```

``` diff /layout/common/widgets.jsx
  function getColumnSizeClass(columnCount) {
      switch (columnCount) {
          case 2:
-             return 'is-4-tablet is-4-desktop is-4-widescreen';
+             return 'is-3-tablet is-3-desktop is-3-widescreen';
          case 3:
-             return 'is-4-tablet is-4-desktop is-3-widescreen';
+             return 'is-3-tablet is-3-desktop is-2-widescreen';
      }
      return '';
  }
```

As Icarus uses the [**12 columns system**](https://bulma.io/documentation/columns/sizes/#12-columns-system) of [**bulma**](https://bulma.io/), the total width of the same type needs sum up to 12.
For example, the modification above makes the width of widget column and content column in double-column desktop mode from 4:8 to 3:9.

### Additional Plugins

Currently I am only installing hexo plugin [hexo-pdf](https://github.com/superalsrk/hexo-pdf/) for rendering my CV, which could be installed by `npm install --save hexo-pdf`.
It supports both external links and relative file path with the pdf file placed locally.
Note that when referring to a local pdf file, the root directory for its path is the same as the root directory of the markdown file.
For example, the following formats are all valid:

```
{% pdf https://blablabla/test.pdf %}
{% pdf https://drive.google.com/file/d/xxxx/preview %}
{% pdf /<path>/test.pdf %}
```


## Writing Blog

I am simply using VSCode + Markdown to write my blog.
That's the easiest but most effecient way for me.



## Deploying Blog





## TODO

- [More styles](https://www.imaegoo.com/2020/icarus-with-bulma/)
- I plan to add some stickers to my blog. It is worth to try to find a way like pattern matching and replacing to save the time of manually adding stickers in in-line form in my blog.
- Move my personal note from local onto the blog might be a good choice.
- Also planning to share some of my music records, especially those in foobar2000, as I recently found a great way to backup my musics.
- No other plans? I think the above plans are enough for a short-term workload lol.

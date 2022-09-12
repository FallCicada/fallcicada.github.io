---
title: Miscellaneous Notes
categories: Miscellaneous
tags:
  - Miscellaneous
  - Notes
date: 2022-09-09 18:54:05
updated: 2022-09-11 19:26:35
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

Personally, I put my blog folder just in `~/fallcicada.github.io/`, which is put in github repo `fallcicada.github.io`.


## Customization in Blog

As often mentioned in Chinese SNS, ***the end of customization is the default***.
I do not want to put much focus on the customization part of the blog.
Except for a clean hexo theme [**Icarus**](https://github.com/ppoffice/hexo-theme-icarus), I made a few changes to my blog, mainly about the format of blogs.

### Hexo Theme **Icarus**

To install hexo theme [**Icarus**](https://github.com/ppoffice/hexo-theme-icarus), follow its [Readme](https://github.com/ppoffice/hexo-theme-icarus/blob/master/README.md) or its [guide](https://ppoffice.github.io/hexo-theme-icarus/).
Some possible dependencies should also be installed together.

``` bash
npm install -S hexo-theme-icarus hexo-renderer-inferno
hexo config theme icarus
```

This will automatically modify your `_config.yml`, and will also create another theme-specific configuration file `_config.icarus.yml` at the same directory.
Unlisted configuration is kept the same as default.

To order the posts by newest-updated, rather than newest-posted, I changed `index_generator.order_by` to `-updated`.
In addition, the `highlight` config should be carefully checked, as I have met several bugs due to inappropriate settings under this part.
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
index_generator:
  order_by: '-updated'
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

But there exists some bugs when the blog is deployed with Github Action.
As a result, I manually moved Icarus from `<blog directory>/node_modules/hexo-theme-icarus` to `<blog directory>/themes/icarus`, which resolves most of the issues.

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

### Fonts

The style sheets for Icarus theme are available at `themes/icarus/include/style/`.
To change the font, modify the `$family-sans-serif` and `$family-code` in `base.styl`.
To change the font size of the articles, refer to `article.styl` and `codeblock.styl`.

I have only made a few changes to the font size, which are listed below:

```diff themes/icarus/include/style/article.styl
- $article-font-size ?= 1.1rem
+ $article-font-size ?= 1.0rem

  pre
-     font-size: .85em
+     font-size: .95em

  code
+     font-size: .95em
      padding: 0
      background: transparent
      overflow-wrap: break-word
```

```diff themes/icarus/include/style/codeblock.styl
  figcaption
      margin: 0 !important
      padding: .3em 0em .3em .75em
      font-style: normal
-     font-size: .8em
+     font-size: 1.0em
```

### Custom Sticker Helper Functions

(Note: the following 2 lines are deliberately left here.)

Test{% emoji tb_insidious %}.

It works{% emoji tb_comic %}{% emoji tb_comic %}!

To start with, the code for these emojis are just `{% emoji EMOJI_NAME %}`.
To modify the theme (or, in other words, hexo) so that one can use [hexo tags](https://hexo.io/api/tag) to add emojis conveniently to blog, you need to create an extra javascript file to register new tags to hexo.

Although not mentioned in the doc of [API of Tag](https://hexo.io/api/tag), according to [API of Helper](https://hexo.io/api/helper), it is suggested that such javascript files should be placed at `scripts/` or `themes/<theme_name>/scripts/`.
I created a new file, `themes/icarus/scripts/emoji.js`, and write the following content to it:

```javascript themes/icarus/scripts/emoji.js
const logger = require('hexo-log')();

module.exports = hexo => {
    logger.info('=== Registering custom tag function of emoji ===');
    hexo.extend.tag.register('emoji', function(args){
        var emoji_path = args[0];
        if (emoji_path.indexOf('.') <= 0) {
            emoji_path = emoji_path + '.png'
        }
        return '<img class="not-gallery-item" src="/emoji/' + emoji_path + '">';
    });
};
```

It is necessary to use `class="not-gallery-item"` for such emojis to prevent them being recognized as normal images.

And I also need to import this file in `themes/icarus/scripts/index.js` by adding the following lines at the end of the original file.

```javascript themes/icarus/scripts/index.js
/**
 * Register custom helper functions of emoji
 */
require('./emoji')(hexo);
```

Now, the custom tag on emoji will be registered for hexo!
When you try to add an emoji in your blog, put them in `sources/emoji/xxx.png`, and insert it in your blog with `{% emoji xxx.png %}`.
If the image is in `png` format, you can leave the `.png` part and simply use `{% emoji xxx %}`.

This is really convenient, especially for those BBS users who are addicted to adding emojis in their posts, isn't it? {% emoji wow.jpg %}


## Writing Blog

I am simply using VSCode + Markdown to write my blog.
That's the easiest but most effecient way for me.


## Deploying Blog

I used [Github Action](https://docs.github.com/en/actions) to deploy my blog automatically after pushed to the main branch of my [**Github repo**](https://github.com/FallCicada/fallcicada.github.io).
The **raw contents** of my blog is pushed to the `main` branch of the repo, except the `public/` folder not uploaded.
An additional file `.github/workflows/pages.yml` is needed which describes what to do under what situation for Github Action.
I used an almost the same file as [this](https://hexo.io/docs/github-pages) provided by hexo, except for the version of `Node.js`.

The above content is completely sufficient for automatic deploy of hexo blog.
For more detailed introduction of how Github Action works, refer to [here](https://docs.github.com/en/actions/learn-github-actions).


## TODO

- [x] Keep a note of my first CD ripping experience.
- [ ] Upload most of my undergraduate course materials to Github.
- [x] Planning to add some stickers to my blog. It is worth to try to find a way like pattern matching and replacing to save the time of manually adding stickers in in-line form in my blog.
- [ ] Move my personal note from local onto the blog might be a good choice.
- [ ] Keep a diary, or weekly diary? Something like that might not be a bad choice.
- [ ] No other plans? I think the above plans are enough for a short-term workload, lol.

---
title: Blog Writing Notes
categories: Miscellaneous
tags:
  - Miscellaneous
  - Notes
toc: true
date: 2022-09-08 00:00:00
updated: 2022-09-11 19:26:53
---

This is some notes during my blog-writing procedure.
I will keep some interesting tricks, plugins, or tools inside this notes.

<!-- more -->

## Post Templates

[Hexo guide](https://hexo.io/docs/writing)

## Bulma

[活用 Bulma 美化 Icarus 文章](https://www.imaegoo.com/2020/icarus-with-bulma/)

## Tag Plugins

[Tag Plugins](https://hexo.io/zh-cn/docs/tag-plugins.html)

Tag plugins should not be wrapped inside Markdown syntax, e.g. []({% post_path lorem-ipsum %}) is not supported.

### Some Usage of Basic Tags

#### Refer to Other Posts

Use the `{% post_link filename [title] [escape] %}` tag to refer to other posts as the [document](https://hexo.io/docs/tag-plugins.html#Include-Posts) describes.

Basic usage:

- `{% post_link blog-writing-notes 'Link <b>with</b> escape' %}`,
  which looks like {% post_link blog-writing-notes 'Link <b>with</b> escape' %}.
- `{% post_link blog-writing-notes 'Link <b>Without</b> escape' false %}`,
  which looks like {% post_link blog-writing-notes 'Link <b>Without</b> escape' false %}.
- `{% post_path blog-writing-notes %}`,
  which gives the path rather than the hyperlink of post like {% post_path blog-writing-notes %}
- `<a href="{% post_path blog-writing-notes %}#Refer-to-Other-Posts">Link with anchor</a>`,
  which allows you to refer to some particular anchor of your post like <a href="{% post_path blog-writing-notes %}#Refer-to-Other-Posts">Link with anchor</a>

#### Include a PDF file

This is an additional hexo plugin [hexo-pdf](https://github.com/superalsrk/hexo-pdf/), which could be installed by `npm install --save hexo-pdf`.
It supports both external links and relative file path with the pdf file placed locally.

Basic usage:

- `{% pdf https://blablabla/test.pdf %}`
- `{% pdf https://drive.google.com/file/d/xxxx/preview %}`
- `{% pdf /<path>/test.pdf %}`

Note that when referring to a local pdf file, the root directory for its path is the same as the root directory of the markdown file.
For example, when referring to a PDF file placed in `/source/files/test.pdf` in `/source/_posts/test.md`, the correct tag should be `{% pdf ../files/test.pdf %}` rather than `{% pdf ./files/test.pdf %}`

#### Adding Emoji

I write a hexo tag for adding emojis conveniently, by inserting `{% emoji EMOJI_NAME %}` to the post.
Check out the details <a href="{% post_path misc-note %}#Custom-Sticker-Helper-Functions"><b>here</b></a>! {% emoji tb_comic %}

For even more convenience, set a VSCode key biding like [this](https://stackoverflow.com/a/71812661/19727126).
More specifically, go to `File - Preferences - User snippets - markdown.json`, and add the following lines:

```json markdown.json
"Add hexo user tag of emoji": {
  "prefix": "tag",
  "body": [
    "{% emoji $0 %}"
  ],
  "description": "Add a hexo user tag for emoji"
}
```

The `$0` means the cursor will stop at this position after inserting it.

Then, navigate to `File - Preferences - Keyboard shortcuts`, and add the following:

```json keybindings.json
{
  "key": "ctrl+alt+E",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus",
  "args": {
    "langId": "markdown",
    "name": "Add hexo user tag of emoji"
  }
}
```

Now, entering `ctrl + alt + E` will insert `{% emoji  %}` for you!

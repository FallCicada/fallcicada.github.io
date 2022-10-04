---
title: Music Record - Foobar2000 Usage
categories: Music
tags:
  - Music
  - Software Usage
  - Record
toc: true
date: 2022-10-04 11:38:21
updated: 2022-10-04 15:03:11
---

This is an article to introduce how I configure my [**foobar2000**](https://www.foobar2000.org/).
As for now (Oct 2022), **foobar2000** is experiencing a major update, as **foobar2000* v2.0 beta* is available for testing.
Currently, I'm using [**foobox-cn**](https://github.com/dream7180/foobox-cn), an CUI integration on Chinese-translated version of **foobar2000**.
An English version is also available here [**foobox-en**](https://github.com/dream7180/foobox-en).

The main reason for me to use **foobar2000** is that I'm used to download and store music locally, and I have almost no requirement of listening music online.
As far as I know, **foobar2000** provides the best user experience in local music management.
It supports plenty of features for playlist and media library.
As a result, I choose **foobar2000** as my music player and have made many configuration on it.

**Still Under Work!** {% emoji wow.jpg %}

<!-- more -->

## Installation

As mentioned in the introduction part, I've been using **foobox-cn v6.1.6.11**, which is based on the Chinese-translated version of **foobar2000 v1.6.11**.
Most of the features mentioned in this article should also be supported for **foobar2000 v1.6.12 final**, which could be the final version of **foobar2000** verion 1.x.

**TODO**...


## Plugins / User-components

This section mainly introduces the plugins, or user-components, I used to manage my playlist conveniently.

#### User Components: foo_cuefixer

[**foo_fixer**](https://github.com/RevenantX/foo_cuefixer) is a very simple component that removes duplicates when adding directories with `.cue` with `.wav`, `.flac`, etc. files.
Notice this wont work in media library, however it provides enough convenience for each separate playlist.
There's no configuration for this component.

#### User Components: Database Search

[**Database search**](https://foosion.foobar2000.org/components/?id=dbsearch&version=1.4) provides interactive search functionality on media library and playlists.
I mainly use this component to search for playlists containing a specific music.
As I'm maintaining a number of playlists with overlaps, it is very inconvenient to manually check which music is in which playlist.
This component provides enough functionality to search and list out all playlists that a specific music is in.

The configuration for this component is in `Settings - Media Library - Database Search`.
Currently, I'm using the following **Title Formatting**, which displayes the music info (this includes album release date and album artist in order to be consistent with my file structure to store these music).

``` .txt Title Formatting
$rgb(0,0,0)
['['%date%']']
['['%album artist%']' ]
[%album%[ #$num(%tracknumber%,2)] - ]
$rgb(64,0,128)
%title%
$rgb(0,0,0)
[ '//' %artist%]
$rgb(0,0,160)
[, %playlist_name% #%playlist_number%]
```

Then, switch to **Format Preset**, choose **Search for same - Search in** `All Playlists` **using the** `Find exact text` **mode**.
Finally, go to `Settings - Shortcuts`, add a shortcut (personally `Ctrl+Alt+F`, corresponding to normal search function using `Ctrl+F`), choose `[Context Menu] - Search for same - Title`.

Now, by choosing any music and click `Ctrl+Alt+F` (or right click on music and choose `Search for same - ...`), you can clearly see all music with the same title in all playlists, which makes the music management much more convenient.

#### User Components: Text Tools

[**Text tools**](https://www.foobar2000.org/components/view/foo_texttools) is a tool which adds new commands for copying customizable music info about selected tracks.
The configuration is in `Setting - Tools - Text Tools`.
I've only added one line, named `All Info`, with pattern as following:

``` .txt Text Tools Pattern
"%album artist%", "%date%", "%album%", "%tracknumber%", "%title%", "%artist%", "%play_count%", "%rating%", "%first_played%", "%last_played%"
```

This is used to keep track of statistics like playcounts and ratings of each music, as the original export function of playback statistics component only stores music info with **hash of the music album, title, artist, etc.**, which makes it extremely difficult when migrating to another player or when changing the name of album, artist, etc. in batch during archieving.

To use this component, just select all music that is to be exported, right click on any of them, go to `Tools - Text Tools - Copy: All Info`, and then you'll have all info to your copy board.
I use a separated `.csv` file to manually backup these information to prevent accidents.

If it is necessary to restore these info, refer to <a href="{% post_path music-record-foobar2000 %}#Restoring Music Info using Backups">here</a>.
This is especially useful when you sadly lose all playback statistics especially thousands of ratings on music.
Don't ask me why I know this.{% emoji ac_cry %}

#### User Components: Playlist Revive

[**Playlist revive**](https://wiki.hydrogenaud.io/index.php?title=Foobar2000:Playlist_Revive_(foo_playlist_revive)), **TODO**, and also gonna work out if there's method to export all playlists as m3u8 format...

## Management

**TODO**

### Restoring Music Info using Backups

**TODO**


## Music Archive Custom

**TODO**

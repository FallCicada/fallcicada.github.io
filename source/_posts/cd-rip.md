---
title: CD Ripping Experience Share
categories: Miscellaneous
tags:
  - Music
  - Technical
date: 2022-09-10 17:49:59
updated: 2022-09-10 22:43:58
toc: true
---

As a game soundtrack collector and one who often listen to those music on CDs, it's almost impossible to keep replacing CD from CD drive every an hour while listening.
From the perspective of convenience in either music listening, management, storing, or sharing, it is really necessary to rip music from those CDs.

This is a personal note for my CD ripping experience.
I think it is worth of a post, at least the equipments which cost me several hundreds of dollars are worth of it (laugh).

<!-- more -->

## Preparation for CD Ripping

### Equipments

To start with CD ripping, you should at least have a CD drive, undoubtedly.
My personal equipments for CD ripping is somewhat bottommost hardware, considering I am just a newbie in CD ripping:
- *Gotega* External DVD Drive, USB 3.0 Portable CD/DVD
- *Epson* Perfection V39 Scanner

During the ripping, I felt these following are also quite necessary:
- Disposable latex gloves
- Screen cleaner spray or wipes
- Normal wet wipes

These really helps prevent grease or dirt adhering to the CD, booklet, or the screen of the scanner.
Afterall, nobody likes some fingerprints to present on the scan of the CD and the booklet.
Wearing a latex glove on one hand really helps to prevent this, or just wash your hands carefully with plenty of hand soups before CD ripping and scanning.

### Software

The most important software, which rips music from CD, is EAC.
The following of this article assumes using EAC v1.6.
Installing EAC is a seemingly long and complicated procedure.
Keep in mind that you need musics with best quality, and choose the corresponding configuration during the installation helps reduce most of the problems.

After installation, go to `EAC - EAC options`, set both of the following to high:
  - `Extraction - Extraction and compression priority` 
  - `Extraction - Error recovery quality`

And check the box in
  - [x] `Tools - Automatically write status report after extraction`
  - [x] `Tools - Append checksum to status report`


<div style="padding:5px 5% 10px 5%;width:100%;overflow:hidden;">
  <img src="/img/cd_rip_eac_setting_1.png" style="width:48%;margin-right:4%;" title="EAC option - Extraction"
  ><img src="/img/cd_rip_eac_setting_2.png" style="width:48%;" title="EAC option - Tools">
</div>

For a detailed installation guide, click [here](https://github.com/neteroster/blog/blob/main/%E6%8A%80%E6%9C%AF%E5%90%91/self-cd-rip.md) (sadly this guide is only available in Chinese).

As for the scanner, simply install the driver and softward provided by its brand, because the software of scanner among different brands also differs much.


## CD Ripping

### Ripping Procedure

For CD ripping, I roughly split it into multiple steps:

1. Open EAC, insert the disc, and the music information will appear in the window.
2. If necessary, click on second icon from the right (which is on the right side of `Eject` button) to search for CD information from database.
   It is possible to switch from different databases by clicking the select box next to the CD icon.
   If you decide to manually enter the CD information after ripping (for example, when detailed information is provided in the booklet of CD), you might skip this step.
   <div style="padding:5px 30% 0px 30%;width:100%;overflow:hidden;">
     <img src="/img/cd_rip_eac_ui_1.png" style="width:100%;" title="EAC - Search for CD Information from Database">
   </div>
3. Click on `Action - Detect Gaps`, wait until gap detection finishes.
4. Click on `Action - Test & Copy Image & Create CUE Sheet`, choose whatever of compressed (flac) or uncompressed (wav) based on your preference.
   Then choose a path of saving the ripped file, wait until ripping finished.
5. Check the ripping log and listen to the audio to ensure no problem happens.
   Then you have a ripped CD!
   Remember to put your CD back to the box.
  
### After Ripping

There are, actually, some post-works to be done.
These works are often ignored and I have seen quite frequently that someone shared their CD with a CUE sheet in unknown encodings which caused inconvenience.

1. Open your CUE sheet (the file ending with `.cue` suffix) with an appropriate editor, like [VSCode](https://code.visualstudio.com/) or some other ones that supports you change the encoding of file.
2. Check the encoding of your CUE sheet.
   In VSCode, it is at the bottom of the window.
   If your CUE sheet seems to contain a lot of corrupted characters, it is very probably that you opened the file in a wrong format.
   It everything seems to be OK, jump to step 4.
3. Click on the encoding, select `Reopen with Encoding`, then select the first encoding which has a `Guessed from content` after it.
   Re-check if the CUE sheet looks OK with the new encoding.
   If problem still exists, check the following encodings, which are common in my personal experience:
   - `Simplified Chinese (GB 2312)`
   - `Japanese (Shift JIS)`
   - `Simplified Chinese (GBK)`
   - `UTF-16 LE`
   - `UTF-16 BE`
4. If the encoding of your CUE sheet is not in `UTF-8`, click on the encoding, select `Save with encoding`, then select `UTF-8` to save your file in appropriate encoding format.
   <div style="padding:5px 5% 10px 5%;width:100%;overflow:hidden;">
     <img src="/img/cd_rip_cue_encoding_vscode_1.png" style="width:43%;margin-right:3%;" title="VSCode - Check CUE File Encoding"
     ><img src="/img/cd_rip_cue_encoding_vscode_2.png" style="width:54%;" title="VSCode - Reopen CUE File with Encoding">
   </div>
5. Do this again to your log file.
6. If you wish to share the CD in online platform, remove the personal information, like anonymize your file save path, in your log file.

If you are not satisfied with the CD information found on the online databases, you can manually enter the information in your CUE sheet.
The format of CUE sheet can be found [**here**](https://en.wikipedia.org/wiki/Cue_sheet_(computing)).
My personal practice of CUE sheet formatting is to make a CUE sheet like this:

```cue Some Album DISC 1.cue
REM DATE 2022/09/10
REM DISCID xxxxxxxx
PERFORMER "Some Brand"
TITLE "Some Album DISC 1"
FILE "Some Album DISC 1.wav" WAVE
  TRACK 01 AUDIO
    TITLE "Some Song"
    PERFORMER "Some Singer"
    INDEX 01 00:00:00
  TRACK 02 AUDIO
    TITLE "Some Other Song"
    PERFORMER "Some Other Singer"
...
```

Where I mainly removed the remark of EAC version, and edit performer if it does not correspond to what appears on the booklet.
I'm also used to name the audio file to `{ALBUM_NAME} DISC {DISC_NUMBER}.wav`, even if the album only have 1 disc.

After all these long steps, you finally have a fully prepared ripped CD.
Now put it to your music player, and enjoy it!


## Scanning

To be finished.


## CD Management and Archiving

To be finished.


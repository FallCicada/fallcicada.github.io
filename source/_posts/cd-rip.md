---
title: CD Ripping Experience Share
categories: Music
tags:
  - Music
  - Technical
date: 2022-09-10 17:49:59
updated: 2022-09-11 13:03:44
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

Then, go to `EAC - Drive options`, ensure it is set to `Extraction Method - Secure mode ... (recommended)` and have the following checked
  - [x] Drive has 'Accurate Stream' feature

<div style="padding:5px 5% 10px 5%;width:100%;overflow:hidden;">
  <img src="/img/cd_rip/eac_setting_1.png" style="width:48%;margin-right:4%;" title="EAC option - Extraction"
  ><img src="/img/cd_rip/eac_setting_2.png" style="width:48%;" title="EAC option - Tools">
</div>

For a detailed installation guide, click [here](https://github.com/neteroster/blog/blob/main/%E6%8A%80%E6%9C%AF%E5%90%91/self-cd-rip.md) (sadly this guide is only available in Chinese).

As for the scanner, simply install the driver and softward provided by its brand, because the software of scanner among different brands also differs much.


## CD Ripping

### Ripping Procedure

For CD ripping, I roughly split it into multiple steps:

1. Open EAC, insert the disc, and the music information will appear in the window.
2. If necessary, click on second icon from the right (which is on the right side of `Eject` button) to search for CD information from database.
   <div style="padding:5px 30% 0px 30%;width:100%;overflow:hidden;">
     <img src="/img/cd_rip/eac_ui_1.png" style="width:100%;" title="EAC - Search for CD Information from Database">
   </div>
   It is possible to switch from different databases by clicking the select box next to the CD icon.
   If you decide to manually enter the CD information after ripping (for example, when detailed information is provided in the booklet of CD), you might skip this step.
   <div style="padding:5px 5% 0px 5%;width:100%;overflow:hidden;">
     <img src="/img/cd_rip/eac_example_step_2.png" style="width:100%;" title="EAC - Obtain CD Information from Database">
   </div>
3. Click on `Action - Detect Gaps`, wait until gap detection finishes.
   <div style="padding:5px 27.5% 0px 27.5%;width:100%;overflow:hidden;">
     <img src="/img/cd_rip/eac_example_step_3.png" style="width:100%;" title="EAC - Detect Gaps">
   </div>
4. Click on `Action - Test & Copy Image & Create CUE Sheet`, choose whatever of compressed (flac) or uncompressed (wav) based on your preference.
   Then choose a path of saving the ripped file, wait until ripping finished.
   <div style="padding:5px 5% 0px 5%;width:100%;overflow:hidden;">
     <img src="/img/cd_rip/eac_example_step_5.png" style="width:58%;margin-right:4%;" title="EAC - Ripping"><img src="/img/cd_rip/eac_example_step_6.png" style="width:38%;" title="EAC - Ripping Finish">
   </div>
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
     <img src="/img/cd_rip/cue_encoding_vscode_1.png" style="width:43%;margin-right:3%;" title="VSCode - Check CUE File Encoding"
     ><img src="/img/cd_rip/cue_encoding_vscode_2.png" style="width:54%;" title="VSCode - Reopen CUE File with Encoding">
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

### Obtain Original Scans

Scanning the an album includes scanning its cover / booklet, back / tray, CD, and possibly its obi.
Wear a glove on at least one hand, or carefully wash hands with hand soups before taking them out to prevent leaving fingerprints on them.
Take these parts out from your CD box, and scan each part with a scanner.
If necessary, take off the staples from the booklet, and staple them back after scanning, which I personally rarely do.

### Cropping Scans

After obtaining the scans (better in lossless form, like `bmp, png`, or `tiff`, differing with scanner), crop it manually to suitable sizes.
I prefer to crop the scans manually, as the auto-cropping functionality provided by the scanner, in my case, crops much part of the image off.

#### Booklet, Tray, Obi

The original scan of booklet from the scanner might look like this.
<div style="padding:5px 15% 10px 15%;width:100%;overflow:hidden;">
  <img src="/img/cd_rip/scan_example_raw.jpg" style="width:100%;" title="Raw Scan of Booklet">
</div>

I have tried several method to locate the boundary of this scan, but all of them failed as the background color and the color of the booklet are so close.
Furthermore, automatic boundary detection also leaves some extra part, or results in a slightly skewed scan, both of which are what I do not want.
Finally, to crop the scans as accurately as possible, I decide to use a noob method: manually find the coordinate of boundary points of the image.

The cropping of the back and obi parts are exactly the same as the booklet, and here I just use a page from the booklet as an example.

The most lightweighted app to find such coordinate, as I found, is the **Microsoft Paint**, lmao.
Open the raw scan file, scale up it until you can accurately pick any pixel from it, and locate the coordinate the boundary point of the booklet like this:
<div style="padding:5px 15% 10px 15%;width:100%;overflow:hidden;">
  <img src="/img/cd_rip/scan_example_find_point.png" style="width:100%;" title="Locate the Coordinate of Boundary Point of this Booklet Page">
</div>

Note down all the coordinates of the boundary points of the booklet, which will be used in the next step: crop and transformation.
<div style="padding:5px 10% 10px 10%;width:100%;overflow:hidden;">
  <img src="/img/cd_rip/scan_example_all_points.png" style="width:100%;" title="All Boundary Point of this Booklet Page">
</div>

```python data.py
# Coordinates of the 6 points, clockwise, from the top-left one.
coordinates = {
  'Album name': {
    './xxx.bmp': [...],
    './Booklet p. 01-02.bmp': [
      ( 447,  156),
      (1879,  158),
      (3313,  144),
      (3320, 1549),
      (1888, 1565),
      ( 456, 1561),
    ],
   ...
  }
}
```

I then use the following python code to crop and transform the scan.

```python crop.py
# Note: python==3.10.0, opencv-python==4.6.0.66, numpy==1.21.5, imutils==0.5.4
import cv2
import os
import numpy as np
from imutils.perspective import four_point_transform

from data import coordinates

def hconcat(img_list):
  h_min = min(img.shape[0] for img in img_list)
  img_list_resized = [
    cv2.resize(
      img, (int(img.shape[1] * h_min / img.shape[0]), h_min),
      interpolation=cv2.INTER_CUBIC
    ) for img in img_list
  ]
  return cv2.hconcat(img_list_resized)

def transform(img_path, img_points, blur_kernel_size=5, blur_radius=1):
  img_points = np.array(img_points)
  img = cv2.imread(img_path)
  # Get the name of image, and replace its suffix to png
  img_name = ".".join(img_path.split("/")[-1].split(".")[:-1]) + ".png"
  if len(img_points) == 1:
    # This is for disc crop and rotation
    pass
  else:
    # Crop and transform
    print(f"Crop and transform: {img_name}")
    assert (len(img_points) >= 4 and len(img_points) % 2 == 0)
    transformed_parts = []
    for i in range(len(img_points) // 2 - 1):
      # Transform each quadrilateral part of scan to rectangle
      indices = [i, i + 1, len(img_points) - 2 - i, len(img_points) - 1 - i]
      img_points_part = img_points[indices].reshape(4, 2)
      transformed_part = four_point_transform(img, img_points_part)
      transformed_parts.append(transformed_part)
    # Concatenate all transformed parts into one image
    transformed = hconcat(transformed_parts)
    cv2.imwrite(os.path.join(DRAFT_DIR, img_name), transformed)

for file_name, points in coordinates["Album name"].items():
  transform(file_name, points)
```

The final cropping results looks like this:
<div style="padding:5px 5% 10px 5%;width:100%;overflow:hidden;">
  <img src="/img/cd_rip/scan_example_cropped.jpg" style="width:100%;" title="Cropped Booklet">
</div>

You might noticed that the image still skews a bit, but this is due to the printing process rather than the scanning and cropping process, which actually can be seen from the raw scans.
From my personal perspective, the above procedure already produces a quite satisfying result.


#### Disc

Cropping of the disc is more complicated than cropping a rectangular booklet page.
As for now, I can only find some straightforward way to handle it.

Similarly, the first step of cropping a disc is to crop off the white background around it.
In this step, use whatever method you like, to crop a disc like this:
<div style="padding:5px 15% 10px 15%;width:100%;overflow:hidden;">
  <img src="/img/cd_rip/scan_example_raw_disc.jpg" style="width:100%;" title="Raw Scan of Disc">
</div>
<div style="padding:5px 30% 10px 30%;width:100%;overflow:hidden;">
  <img src="/img/cd_rip/scan_example_cropped_disc.jpg" style="width:100%;" title="Cropped Scan of Disc">
</div>

Then, use the built-in photo viewer of `Windows 10` or `Win 11` to open the disc image.
Press `ctrl + E` or click `Edit`, and try to rotate the scan of disc until the image is upright.
During this process, you can use the logo of brand, etc. to check if the image is upright or not.
Then, write down the rotation angle (in this case \\(23.6^{\circ}\\) clockwise).
<div style="padding:5px 10% 10px 10%;width:100%;overflow:hidden;">
  <img src="/img/cd_rip/scan_example_rotate.png" style="width:100%;" title="Rotation of Disc">
</div>

```python data.py
# Rotation degree of the disc scan. Negative value for clockwise rotation.
coordinates = {
  'Album name': {
    './xxx.bmp': [...],
    './Disc 1.bmp': [-23.6,],
   ...
  }
}
```

Use the following code to rotate the cropped disc.

```python crop.py
# The same as above
...
from scipy.ndimage import rotate

def transform(img_path, img_points):
  # The same as above
  ...
  if len(img_points) == 1:
    # Crop and rotate
    print(f"Crop and rotate: {img_name}")
    # Find the center and the radius of disc from cropped disc image
    radius = (img.shape[0] + img.shape[1]) // 4
    center = np.array(img.shape[:2]) // 2
    # Calculate the distance from each pixel to the center
    idx = np.indices(img.shape[:2]).transpose(1, 2, 0)
    dist = np.linalg.norm(idx - center, axis=2)
    # Mask out everything to white outside the disc
    masked_img = img.copy()
    masked_img[dist > radius] = (255, 255, 255)
    # Apply a Gaussian blur to the boundary of the masked out part
    # Otherwise there will exist ugly jagged edges
    blurred_img = cv2.GaussianBlur(masked_img, (5, 5), 0)
    chosen_mask = np.tile((dist > radius - 1)[..., np.newaxis], (1, 1, 3))
    # Concatenate the blurred and unblurred part of image
    img = np.where(chosen_mask, blurred_img, img)
    transformed = rotate(img, angle=img_points[0], reshape=False, cval=255)
    cv2.imwrite(os.path.join(DRAFT_DIR, img_name), transformed)
  else:
    ...
```

The final result looks like this:
<div style="padding:5px 30% 10px 30%;width:100%;overflow:hidden;">
  <img src="/img/cd_rip/scan_example_rotated_disc.jpg" style="width:100%;" title="Rotated Scan of Disc">
</div>

At least it looks satisfying enough for me!


## Album Management and Archiving

Finally, we have a fully ripped album, including all its audio files and scans!
The last issue is how can we store it conveniently.
As I am using *foobar2000* as my music player, which supports listening to one directory (recursively!), I simply put each album in a separate folder like the following structure.

```
C:\User\{USER_NAME}\Music\{FOLDER_NAME}\
|-- {ALBUM_NAME_1}
|   |-- bk
|   |   |-- (all scans)
|   |-- Disc 1 [{CATALOG_NUMBER_DISC_1}]
|   |   |-- {ALBUM_NAME} DISC 1.wav
|   |   |-- {ALBUM_NAME} DISC 1.cue
|   |   |-- cover.jpg
|   |   |-- (optional) {ALBUM_NAME} DISC 1.log
|   |   |-- (optional) back.jpg
|   |   |-- (optional) disc.jpg
|   |-- Disc 2 [{CATALOG_NUMBER_DISC_2}]
|   |   |-- {ALBUM_NAME} DISC 2.wav
|   |   |-- {ALBUM_NAME} DISC 2.cue
|   |   |-- cover.jpg
|   |   |-- (optional) {ALBUM_NAME} DISC 2.log
|   |   |-- (optional) back.jpg
|   |   |-- (optional) disc.jpg
|   |-- cover.jpg
|   |-- README.txt
|
|-- {ALBUM_NAME_2}
|   |-- ...
...
```

The images like `cover.jpg` in each `Disc` folder is used for *foobar2000*.
It will automatically detect the cover image in the same directory of the audio file, and render it when playing that audio.
The `README.txt` contains some basic information of the album, like its information page, or the source of the album especially when it is downloaded from the Internet.

To archive the album, I simply use 7-zip to archive the complete folder and place it in my HDD.

That's all about my CD ripping experience, hope you find it useful somewhere!
The details of the content of each file, as well as the configuration of *foobar2000*, will be shared in {% post_link music-record-acg %}, which is another hard task to be finished!

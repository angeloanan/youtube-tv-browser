# youtube-tv-chrome

> ⏯ | A Lightweight Browser extension that enables the YouTube for TV page

## Installation

[Download the Extension here](https://github.com/angeloanan/youtube-tv-browser/releases)

<details>
  <summary><b>Chrome installation guide</b> (Click to expand)</summary>

  0. Download the extension from the [Releases page](https://github.com/angeloanan/youtube-tv-browser/releases) or clone the repository
  1. Navigate to [chrome://extensions](chrome://extensions)
  2. Toggle the **Developer mode** toggle to the ON position
  3. Click on the **Load unpacked** button
  4. Navigate to the downloaded folder and select it
</details>
<details>
  <summary><b>Firefox installation guide</b> (Click to expand)</summary>

  Due to complications with Firefox extensions, [at the moment (until Firefox approves my extension)](https://github.com/angeloanan/youtube-tv-browser/issues/6) you can only install the extension on either Firefox Developer Edition, Firefox Nightly, or Firefox ESR.

  1. Clone or [Download](https://github.com/angeloanan/youtube-tv-browser/archive/refs/heads/master.zip) the repository & extract it
  2. Navigate to [about:addons](about:addons)
  3. Drag the `src` folder inside the repository to the **Add-ons** window
</details>

## Usage

Simply navigate to https://youtube.com/tv and enjoy your videos.

No, seriously, I've designed this extension to be an "*install-and-forget*" extension.

## Demo

![Demo](./.github/demo.gif)\
*Do you seriously need it?*

## How does this work

This extension modifies the User Agent of the request to look like its coming from an actual TV (In this case, a [2023 Samsung TV running Tizen 7.0](https://developer.samsung.com/smarttv/develop/guides/fundamentals/retrieving-platform-information.html)). It modifies the HTTP request headers


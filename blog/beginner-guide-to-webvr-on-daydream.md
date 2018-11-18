---
templateKey: blog-post
category: Coding
title: Beginner Guide to WebVR on Daydream
date: 2016-12-23T22:09:30-05:00
description: My notes from getting started with developing WebVR on Google Daydream
author: spmcbride1201
permalink: beginner-guide-to-webvr-on-daydream
coverimage: /img/posts/daydream-cav.jpg
tags:
  - tutorial
  - WebVR
---

![](/img/posts/daydream-cav.jpg)

Earlier today, I was pleased to discover that FedEx had shipped me an important package. No, this wasn't Christmas a week early (...or was it???). It was the brand-new Pixel phone and Daydream VR set that Fullstack Academy is loaning during the two months of my senior phase.

After ripping open the box, getting all the cords untied, and getting the updates installed on both the phone and the Daydream controller, I slid the handset into the headset (say that 5x fast) and materialized in a three-dimensional forest.

Fast forward thirty minutes, and I was staring at the very cool VR menu of Daydream-enabled apps. There were 360 degree panoramas in Google Photos, VR cinema mode in HBO Go (perfect for re-watching Westworld Season 1), and even a VR-ified version of the very-frightening [LAYERS OF FEAR](http://uploadvr.com/layers-fear-coming-daydream-year/).

What more could a web dev want? Well, I suppose Chrome...

To be honest, I was really surprised that Chrome didn't offer a VR mode out of box on the Pixel. I wasn't necessarily expecting a something as advanced as [Facebook's VR-first Carmel browser](https://techcrunch.com/2016/10/06/oculus-webvr/), but I was expecting an experience similar to the "VR cinema" apps with support for WebVR out-of-box.

After all, a few months ago, I put together a basic VR app using Aframe of the IBM mainframe my grandfather worked on in the 60s, and I'd love to be able to view my app on the headset.

The bottom line is that this is not currently possible out of box. However, this guide will help get you there! Isn't that a nice guide?

## Step One: Enable Developer Mode on your Pixel.

By default, Google hides the developer menu on modern Android phones about as well as my father would hide Easter eggs when I was a kid. Well, at least the developer menu doesn't stink up your house after remaining unfound for months of end. Spoiler Alert: if you navigate to settings menu, go to “About device,” and touch the “build number” seven times. I'd mention that this reminds me of some Buddhist thing where you recite the Buddha's name seven times, but that would totally mix up my religious references, so I'll leave it at that.

<img alt='Screenshot showing the build numbers field that you need to touch seven times' src='/img/posts/daydream/unlock-developer-options.jpg' style='max-width: 540px;'>

In any case, if you go back to the main settings menu, you will now see a super-secret-squirrel menu named Developer Options. Head into developer options and you can turn on developer mode. Booyah! +100xp

<img alt='Screenshot showing the new Developer Options field' src='/img/posts/daydream/developer-options.jpg' style='max-width: 540px;'>

<!--![Screenshot showing the new Developer Options field](/img/posts/daydream/developer-options.jpg)-->

## Step Two: Allow Installation of Sideloaded Apps

From the main settings menu, select Security

<img alt='Screenshot showing the Security Menu' src='/img/posts/daydream/security-settings.jpg' style='max-width: 540px;'>

And turn on the toggle to allow installation of apps from unknown sources

<img alt='Screenshot showing Unknown Sources toggle' src='/img/posts/daydream/install-from-unknown-sources.jpg' style='max-width: 540px;'>

## Step Three: Get File Manager (and optionally HTTP Server and FTP Server)

Here is an image of my current Daydream WebVR toolset:

<img alt='Screenshot showing my developer tools' src='/img/posts/daydream/current-dev-tools.png' style='max-width: 540px;'>
<!--![Screenshot showing the new Developer Options field](/img/posts/daydream/current-dev-tools.png)-->

And here's the use case for each of these tools:

* Chromium - Display and Render WebVR content. See section below.
* File Commander - Access Android's Linux file system to sideload Android Apps (apks) and create folders for transferring and serving WebVR apps. [Download](https://play.google.com/store/apps/details?id=com.mobisystems.fileman)
* Ftp server - Simple Tool for allowing your dev machine to access your Android filesystem via ftp. [Download](https://play.google.com/store/apps/details?id=com.theolivetree.ftpserver)
* Simple HTTP Server - Simple HTTP server that allows your Pixel to directly serve your WebVR apps to Chromium via localhost. [Download](https://play.google.com/store/apps/details?id=jp.ubi.common.http.server)

## Step Four: Download Latest Chromium Nightly

Chrome has recently added beta support for WebVR, but it has not yet made it out to the normal versions of Chrome. To get access to sweet sweet web apps that wrap your reality with a soft VR glow, you need to get a copy of Chrome that has the fresh bits. While Chrome Beta or Chromium in the App Store supposedly work to a limited degree, the Google WebVR team STRONGLY suggests sideloading the latest nightly release of Chromium pushed to webvr.info.

[Links to latest nightlies](https://webvr.info/get-chrome/)

[Direct link to Dec 16th build, most recent as of 12/23](https://drive.google.com/file/d/0B8dt3TGgfXfiU0RKVGFNLVh0ME0/view?usp=drive_web)

<img alt='Screenshot showing the initial File Commander Menu' src='/img/posts/daydream/file-commander-menu.jpg' style='max-width: 540px;'>
<img alt='Screenshot showing the chromium apk' src='/img/posts/daydream/select-chromium-apk.jpg' style='max-width: 540px;'>
<img alt='Screenshot of the install confirmation message for the apk' src='/img/posts/daydream/install-chromium.jpg' style='max-width: 540px;'>

## Step Five: Set Chromium Flags

Go to chrome://flags on your phone and enable the following options:

* Allow invalid certificates for resources loaded from localhost
* Enable WebVR
* Enable Chrome VR
* Enable Gamepad Extensions

<img alt='Chrome Flag to Allow Invalid Certs' src='/img/posts/daydream/allow-invalid-certs.jpg' style='max-width: 540px;'>
<img alt='Chrome Flag toEnable WebVR and Chrome VR' src='/img/posts/daydream/enable-webvr.jpg' style='max-width: 540px;'>
<img alt='Chrome Flag toEnable Gamepad Extensions' src='/img/posts/daydream/gamepad-extensions.jpg' style='max-width: 540px;'>

[For additional suggestions from the Chromium Team, read this](https://docs.google.com/document/d/1g02qHfX85vSRSOkWm9k33I0b7VuyN79md9U9t6MIa4E/edit)

## Step Six: Test WebVR content from Internet

Finally, test that you can render WebVR content by checking out this site using Chromium on your Pixel.

[WebVR Example](https://threejs.org/examples/webvr_cubes.html)

## Known Issues

1.  Google Chrome is the only currently supported WebVR browser for Android
2.  Most of the WebVR support is highly experimental and is actively being developed, which is why we need to sideload a Chromium nighly
3.  If you enter Daydream mode accessing a WebVR app not served over https, you will receive a message: `Your connection to this site is not private. To exit VR mode at any time, remove this headset and push back.` Supposedly, this message disappears after 30 seconds and loads the app, but that did not work for me.
4.  ReactVR seems to offer only serve dev builds of WebVR over http, which cannot be viewed by daydream.
5.  If you are trying to render a WebVR application off a development machine on your LAN and you have issues, consider turning off your local firewall on your development machine to check if that is interfering.

## Future Steps

1.  _Improve Write-Run-Cycle by better integrating the Daydream Headset into your development workflow_

Because off-the-shelp boilerplate from A-Frame and ReactVR seems to only offer live-reloads over http, this workflow is incompatible with the Chrome security restriction that the Daydream can only render WebVR over https.

Possible solutions for this problem include:

* Modifying the existing boilerplate to serve over https using self-signed SSL certs that you create or snag from someone else, like [https://github.com/Spaciblo/spaciblo-core/tree/master/test_certs](here)
* Installing adb port forwarding, which redirects localhost resolution on the Pixel to the range of localhost ports on the development machine
* Manually or using a script to push code to an ftp server run on the Pixel headset itself.

An ideal solution would allow remote debugging of the WebVR application running on the Pixel in Daydream mode to be able to capture performance data to ensure 60fps. For this to be accurate, screen mirroring will likely have to be disabled.

2.  _Register your hostname with Google Origin as an Endpoint with WebVR enabled_

When your app is ready for deployment, you will have to register your server with Google as a valid endpoint for WebVR.

## Further Reading

* [Oculus WebVR](https://techcrunch.com/2016/10/06/oculus-webvr/)
* [ReactVR Pre-release](https://developer.oculus.com/blog/introducing-the-react-vr-pre-release/)
* [Enabling On-device Developer Options](https://developer.android.com/studio/run/device.html#developer-device-options)
* [Get Started with Remote Debugging Android Devices](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/)

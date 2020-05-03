---
templateKey: blog-post
category: Mainframe
title: Mac 3270 Zen with Brown tn3270 and Better Touch Tool
date: 2013-07-31T09:56:00-04:00
author: spmcbride1201
slug: mac-3270-zen-with-brown-tn3270-and-better-touch-tool/
---

<img alt="macmainframe" src="/img/posts/macmainframe-300x170.png" width="300" height="170"/>

## Mac 3270? Water and Vinegar? How Mainframers began to use Macs

It may seem strange to think that users, application developers, and systems programmers of IBM mainframes may use a Mac 3270 solution for serious work. Indeed, in the 1980s and early 1990s, much of the tech world was captivated by the battle between Big Blue and Apple Computer for the future of personal computing. Big Blue was East Coast, big, bureaucratic, and specialized in big computers that seemed impersonal and perhaps <a href="https://web.archive.org/web/20190417052036/http://www.youtube.com/watch?v=tCen5fCHnAQ" target="_blank">distopic</a> (e.g. Stanley Kubrick&#8217;s H.A.L. is I.B.M. minus one letter). In contract, Apple was the scrappy start-up of California hippie types. IBM&#8217;s open hardware standards and marketing expertise led the IBM PC standard to dominate the market. However, this open standard would also eventually undermine IBM by waves of hardware commoditization by &#8220;IBM Compatibles&#8221; that would eventually allowed Microsoft to displace IBM as the PC hegemon, undermine the OS/2 operating system, and ensure the dominance of Microsoft Windows.

Fast forward two decades, and the competitive landscape appears quite different. Despite creating the dominant PC architecture, IBM sold its ThinkPad division to Lenovo in 2005. Following the return of Steve Jobs, Apple began its march back to popularity starting with the 1998 iMac, and massively accelerating following the 2001 release of the iPod, the 2007 release of the iPhone, and the 2010 release of the iPad. Although Microsoft continues to fight both Apple in the PC and mobile market and IBM in the Enterprise market, IBM and Apple now exist in entirely separate and distinct market sectors. Between IBM post-ThinkPad endpoint-agnosticism and <a title="The Macbook Air has a 56% share of the Ultrabook market" href="https://web.archive.org/web/20190417052036/http://appleinsider.com/articles/13/07/01/npd-apples-macbook-air-most-popular-thin-and-light-notebook-with-56-percent-share-of-market" target="_blank">the growing popularity of iOS and Mac OS X,</a> it should therefore be no surprise that an increasing number of mainframe professionals seek to find ways to use Apple computers, phones, and tablets to administer and run mainframe environments. In fact, <a href="https://web.archive.org/web/20190417052036/http://www.mactrast.com/2012/02/other-than-apple-ibm-may-be-the-largest-apple-deployment-in-the-world/" target="_blank">a recent study has suggested that IBMers are collectively only second to Apple is the number of employees using OS X and iOS devices</a>.

This guide seeks to help mainframe professionals maximize the use of their MacBooks when working with mainframes via 3270 terminal emulation.

## Step One: Find a good 3270 Terminal Emulator

While there are countless makes and models of 3270 terminals, I have found that most mainframers running Windows use the IBM Personal Communications Tool (called PCOMM for short). There are numerous reasons for this, including fantastic support for advanced 3270 features and built-in tools for things like FTP transfers. However, for one reason or another, IBM has not decided to port this product to OS X, making Mac use of PCOMM only possible via VMWare or Parallels virtualization and a Windows guest.

In my opinion, the thought of running an entire layer of Windows to run a 3270 terminal emulator seems absurd. I therefore suggest looking at the robust and long-standing Brown tn3270 terminal emulator. This piece of software produced by staff at Brown University allowed Macs to emulate a 3270 terminal going back all the way to the early 1980s. In short, they were Mac users long before Macs were cool. The product is currently maintained and enhanced by Peter DiCamillo. While there are certain advanced features missing from tn3270, such as support for LU names or 3270 graphics or a built-in FTP utility, these features will likely not be terribly missed by most. Even better, this software is offered free-of-charge for both commercial and non-commercial use.

To download tn3270, go to <a href="https://web.archive.org/web/20190417052036/http://www.brown.edu/cis/tn3270/" target="_blank">the tn3270 product page on the Brown CIS website</a> and click the HTTP download link As of this post, 3.3b6 is the most current version. Once you&#8217;ve downloaded the \*.dmg file, open it and you&#8217;ll see a number of items, including a tn3270 X application bundle, release notes, (highly outdated) documentation, some utilities for customizing keymaps and printing, and an optional sound and font.

<img title="brown mac 3270 dmg package contents" alt="brown mac 3270 dmg package contents" src="/img/posts/1-300x279.png" width="300" height="279" />

In my case, I ignored the other files and merely installed the application by dragging the tn 3270 x application to my local Application Folder. Once copied, the file is installed and ready for use. Open the application and click File -&gt; New Connection to see the following Dialog:

<img alt="brown mac 3270 settings page" src="/img/posts/2-300x156.png" width="300" height="156" />

Type in the name or IP address of the host and the name of the connection. You can also select SSL and other settings as needed by clicking on the other icons. Once you&#8217;ve configured the settings, click Open Connection and you should see a familiar 3270 screen open.

<img alt="brown mac 3270 default black screen" src="/img/posts/3-300x197.png" width="300" height="197"/>

## Step Two: Mac-ify the look of your 3270 through a White Background

Mac users tend to known as valuing a good-looking UI, and the built-in UNIX terminal app is no different. Under the preferences of the OS X terminal, a user can select from any number of different looks. However, the default &#8220;Basic&#8221; theme emphasized a plain white background that emphasizes the elegant simplicity of the UNIX terminal. I very much like this look, and I&#8217;ve made my tn3270 terminal emulator look similar by opening up Session -&gt; Colors and changing the background color to White. This makes the 3270 look much for Mac-ish:

<img alt="brown mac 3270 white screen" src="/img/posts/4-300x197.png" width="300" height="197"/>

Now that we have our 3270 setup in a visually-pleasing way, let&#8217;s save these settings by clicking File -&gt; Save Default Settings. In addition, let&#8217;s save our connection and display settings my clicking File &#8211;&gt; Save Settings as. This will produce a settings file for this particular connection. If you have to regularly connect to multiple different mainframes, you may want to dock the folder containing these settings folder in the OS X doc. That way you only need to click on the folder and the particular settings file to auto-configure and auto-connect to the system you need at that moment.

<img src="/img/posts/5-150x300.png" width="150" height="300" />

## Step Three: Free your Function Keys from Apple Hegemony

One annoyance of using a Macbook with 3270 terminal emulation is the need to hold down the fn key in order to press a function key. Over time, I&#8217;ve come to grips with this situation, as I enjoy being able to activate OS X controls via those keys. However, one particular problem is that, by default, OS X treats F10 as a shortcut to show Application Windows and F12 as a shortcut to shift the entire desktop to the OS X dashboard. This needs to be disabled in order to be able to use all 12 F-Keys in tn3270. To do this, select Keyboard from System Preferences, click Mission Control, and then disable the Application Windows and Dashboard options as follows:

<img src="/img/posts/6-300x271.png" width="300" height="271" />

Great! Now your F-Keys have been liberated. If you want to get to the dashboard in the future, simply use the three finger swipe to the right. Speaking of multi-touch&#8230;

## Step Four: Download Better Touch Tool and touch-enable TN3270 like a Boss

One of the greatest aspects of using a Mac is having such a fantastic touch-pad. While MacBooks aren&#8217;t touch-screen devices, they are still quite touch-centric. The two and three-finger gestures are amazing tools for power users. Thankfully, there is a fantastic 3rd party tool called Better Touch Tool which allows various applications to have profiles that map touchpad gestures to keystrokes. This is fantastic!

To download Better Touch Tool, head over to <a href="https://web.archive.org/web/20190417052036/http://download.cnet.com/BetterTouchTool/3000-18491_4-75054737.html" target="_blank">this CNET download page</a>. Unlike before, this app is delivered in a zip file. Double click the compressed volume to see the Better Touch Tool app package, and then drag this app over to your Application Folder to install this tool. Double click the app from your Application folder to start it. You&#8217;ll now have a small icon at the top of your desktop that looks like a finger on a touchpad. Click on this icon and select &#8220;Check for Regular Updates&#8221; to ensure that you&#8217;re on the latest version.

<img src="/img/posts/7-300x274.png" width="300" height="274" />

Once updated, click the app icon again and select preferences. The screen will look as follows:

<img src="/img/posts/8-300x218.png" width="300" height="218"/>

You&#8217;ll first need to add tn3270-specifc settings. Do this by clicking the small + button under the Select Application panel on the left. In the open dialog that pops up, select tn3270 and click the open button:

<img src="/img/posts/9-300x189.png" width="300" height="189"/>

Now that you&#8217;ve opened and selected tn3270, click on the button labeled &#8220;Add New Gesture

<img src="/img/posts/10-300x219.png" width="300" height="219" />

Based on my experience, I suggest adding the following gestures. These two-finger swipes will all you to use two finger swipes to navigate up, down, left, and right on a 3270 panel just like a web page in a browser. The pinch in gesture is also mapped to F3 in order to make it easier to exit out of a program. This may not map to Apple gestures, but until the 3270 supports zooming, I think that this is a good use of this gesture.

<img src="/img/posts/11.png" width="332" height="123" />

<h2>Summary</h2>

By following this guide, you Mac should now be able to 3270 with the best of them. Damn the naysayers, full speed ahead! In fact, your multi-touch settings should turn some serious heads in meetings.

<em>Do you have any other suggestions for configuring tn3270 on a Mac? Do you know of any more suggestions for mainframers transitioning to using a Mac? Let&#8217;s hear them in the comments!</em>

This post was originally hosted on the [Millennial Mainframer blog](https://web.archive.org/web/20190417052036/http://millennialmainframer.com/2013/07/mac-3270-zen-with-brown-tn3270-and-better-touch-tool/)

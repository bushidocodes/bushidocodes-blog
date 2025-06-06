---
templateKey: blog-post
category: programming
title: Linux Containers are the new POSIX
date: 2019-09-24T03:18:59-05:00
author: spmcbride1201
slug: linux-containers-are-the-new-posix/
coverimage: /img/posts/javaAndSantos.png
---

## Looking back at POSIX

When it comes to software, standards are an important tool to protect against “lock-in.” Back in the day, this was accepted as common knowledge. Academics ([ACM](https://www.acm.org/), [IEEE](https://www.ieee.org/)), industry user groups ([SHARE](<https://en.wikipedia.org/wiki/SHARE_(computing)>), [GUIDE](https://en.wikipedia.org/wiki/GUIDE_International)), and government ([NIST](https://www.nist.gov/), DOD) collaborated on standards bodies, wich led to things like [COBOL](https://www.bushido.codes/cobol-lang), [Ada](https://www.adacore.com/about-ada), and the [POSIX standard for Unix and C](https://en.wikipedia.org/wiki/POSIX).

Experts defined the standards, and government incented adoption by making compliance a prerequisite for bidding for government contracts:

- _Want to sell COBOL software? Great, are you FIPS 21-4 compliant?_
- _Want to sell FORTRAN software? Great, are you FIPS 69-1 compliant?_
- _Want to sell servers or operating systems licenses? Great, are you FIPS 151-2 compliant?_

In 2019, the idea of government dictating software standards may seems strange, but back during the Cold War, juicy government contracts mattered. As such, FIPS 151-2 effectively made the Triforce of Unix, C, and POSIX the one true way to write software. In certain circles, [K&R became dogma](https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628).

This led to a degree of convergence between Unix systems, providing a path for portability between AIX, HP-UX, Solaris, and [the countless other operating systems you've forgotten or never heard of](https://www.itl.nist.gov/div897/ctg/posix/finalreg4.htm).

We're not just talking Unix systems here either. Systems with distinct architectures and lineages felt pressure to adopt the one true Unix way to become FIPS 151-2 compliant. This led to frantic efforts to implement POSIX compatible subsystems. For example, IBM made the [z/OS mainframe operating system](https://en.wikipedia.org/wiki/Z/OS) compliant by [bolting on a subsystem called Unix Systems Services](https://en.wikipedia.org/wiki/UNIX_System_Services).

FIPS and POSIX-compliance also fed into research hype around microkernel-based operating systems that could run multiple "personalities." IBM imagined [Workspace OS, a "kernel to rule them all" that could run OS/2, POSIX UNIX, or AIX. This project ultimately failed bring a product to market after wasting \$2 Billion](https://archive.org/details/WorkplaceMicrokernelAndOSACaseStudy). Microsoft pushed for a similar vision with its NT kernel, but they were successful. While not common knowledge, NT-based systems thus were able to run multiple personalities other than Windows, including the [Microsoft POSIX subsystem](https://en.wikipedia.org/wiki/Microsoft_POSIX_subsystem).

Over time, the government relaxed some of these technical requirements, phasing out FIPS 151-2 entirely in 2000. However, by this point, POSIX subsystems had become enmeshed in operating systems. In the case of z/OS, the Unix Systems Services environment became central to TCP/IP and just about all new operating system features. In the case of Windows, the Windows personality never deeply integrated with the POSIX personality for architectural reasons, but Microsoft maintained the POSIX subsystem as late as 2012.

## Looking forward to Linux Containers

While POSIX seems to have declined in recent times, this has more to do with the de-facto standard of modern distributed systems development rising above the level of abstraction provided by POSIX, largely due to the mass adoption of Linux and Linux containers. For most software projects written in the 21st century, POSIX isn't enough.

Compared to POSIX, the new de-facto standard of Linux containers provides all sorts of advantages. Issues of [Endianness](https://en.wikipedia.org/wiki/Endianness) and ASCII versus [EBCDIC character encoding](https://en.wikipedia.org/wiki/EBCDIC) are gone. Vendor lag and partial POSIX implementions are gone. You get ELF, Linux's Extensible and Linkable Format, which standardizes the file format for executables, making recompilation unnecessary as long as the processor architecture doesn't change. You get package management, such as Aptitude or Yum. You get primitives that enable use of the de-facto [Open Container Initiative](https://www.opencontainers.org/) standard, including compatibility with the growing ecosystem of orchestration tools, such as Kubernetes.

Realizing that Windows had to provide first class Linux support to be relevant as a developer workstation, Microsoft announced the [Windows Subsystem for Linux](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux) in 2016, which sought to provide Linux userspace on top of the NT Windows personality via syscall translation. This worked but suffered from slow I/O due to the overhead of the translation layer, driving Microsoft to announce WSL2, which avoids syscall translation by embedding a lightweight utility VM running a Microsoft-managed Linux kernel into Windows 10. Bizarely, the year of the Linux Desktop arrived, albiet in a way that makes some Free Software enthusiasts cringe. Given the importance of Linux containers in modern developer workflows, [Docker for Windows now exploits this utility VM, providing a substantial speedup when running Linux containers](https://docs.docker.com/docker-for-windows/wsl-tech-preview/).

Similarly, in 2019, IBM [announced that z/OS v2.4 will provide Container Extensions, a Linux subsystem which runs Docker containers on an IBM-managed Linux kernel in a lightweight utility VM](https://www-01.ibm.com/common/ssi/ShowDoc.wss?docURL=/common/ssi/rep_ca/1/872/ENUSAP19-0011/index.html&request_locale=en). Sound familiar? With this compatibility subsystem, z/OS supports the de-facto Linux container standard, allowing developers to write code targeting z/OS without the need to learn mainframe esoterica or quirky APIs. This reduces the special snowflake syndrome down to ensuring that the source code and dependecies can compile for the s390x architecture. While this might not seem like much to full-time residents of cloud-native land, this is in fact a big deal. It provides a sane hosting environment for the middleware needed to integrate mainframe components with distributed systems and 3rd party cloud services.

Stepping back from Microsoft and IBM, this also suggests a key idea:

**Linux Containers are the new POSIX.**

Going forward, this suggests the following:

- Greater standardization on container-based orchestration, including hybrid clouds and legacy systems.
- Greater adoption of the de-facto Linux container standard by other legacy systems.
- A renewal of distributed systems research around [Code Mobility techniques](https://en.wikipedia.org/wiki/Code_mobility) and [cloud bursting](https://azure.microsoft.com/en-us/overview/what-is-cloud-bursting/).
- Increased pressure to deprecate legacy POSIX subsystems such as z/OS Unix System Services in favor of POSIX-compliant environments within Linux containers.
- The possibility that the government may "pave the cow path" and formally make Linux containers the new POSIX.

## Pro Tip for IBM

Given the fact that Linux containers do not eliminate the known pain point of ensuring that the long tail of third-party modules (NPM, crates.io, pip, Ruby gems, etc.) are all cleanly portable to the s390x architecture, I highly suggest that you put money, researchers, and developers behind the [WebAssembly](https://webassembly.org/) and [WASI](https://wasi.dev/) standards. Despite having the term “Web” in the title, these standards offer the best bet of overcoming processor architecture lock-in. For good measure, consider pairing this with [Rust](https://www.rust-lang.org/), a next-generation systems programming language focused on developer happiness and memory safety.

## Who am I?

I'm a Software Engineer with some IBM mainframe, cloud architecture, and distributed systems battle scars currently on hiatus as a Computer Science graduate student at George Washington University. If you’re interested in my opinions, please [follow me on X](https://x.com/bushidocodes) or [connect with me on LinkedIn](https://www.linkedin.com/in/bushidocodes/). If you’re an Executive Vice President muckety-muck and want to throw stacks of cash, a Distinguished Engineer title, and a juicy PhD fellowship my way, hit me up on LinkedIn.

(< •\_•)>⌐■-■

(⌐■_■)

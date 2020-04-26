---
templateKey: blog-post
category: programming
title: Still No Silver Bullet
date: 2019-10-05T03:18:59-05:00
author: spmcbride1201
slug: still-no-silver-bullet/
---

In his [classic software engineering essay, No Silver Bullet,](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf) [Fred Brooks](https://en.wikipedia.org/wiki/Fred_Brooks) argues that software complexity can be broken into two types. The first is **essential complexity** emergent from the problem domain. The second is **accidental complexity** caused by software bugs or serious flaws in architecture. In this essay, I’m going to examine:

1. How our software has gotten more complex despite better tools, algorithms, and design patterns
2. Why command and control struggles to tame this complexity
3. How software organizations have used modularity and abstraction to cope
4. How abstraction and modules beget new accidental complexity, yielding research domains such as distributed systems

## Why is software getting more complex?

From a casual perspective, one might suspect that modern software developers have it easy. Back in the day, people wrote in assembler and low-level languages. They dealt with relatively clumsy system interfaces. In contrast, modern developers have higher level languages that hide systems complexity. They’ve got debugging tools and cloud services and open-source software. Hardly any developers pay for tools anymore.

All of that is true, and if things were truly apples-for-apples, we could definitely complete 1970s era business requirements faster, cheaper, simpler, and more confidently.

Alas, we generally aren’t asked to build 1970s style systems. 1970s business problems were solved by 1970s solutions, which continue to operate silently in the background of many businesses. It’s not enough to build a better mouse trap, because the 1970s style mouse trap has organically enmeshed itself into corporate IT architectures and is surrounded by all sorts of competitive moats. The 1970s mouse trap is wrapped in an Enterprise License Agreement with the water cooler and the air conditioning system, so if the company replaces the mouse trap, they lose their discount for filtered water and cool air. Thus, anything that we build today must differentiate itself through improved features (functional requirements) or substantial (orders of magnitude) improvements in [non-functional aspects](https://en.wikipedia.org/wiki/Non-functional_requirement) that allow businesses to hurdle over the competitive moats of legacy systems. Most likely, the best approach is just to leave the legacy systems in place, target modern business problems that didn’t exist in the 1970s, and upsell an Enterprise Plus Plus tier that integrates with customers'special snowflake legacy IT architectures.

So if we can't solve 1970s problems faster, we have to tackle today's business problems. And something being today's business problem suggests that it was something that folks yesterday were unable to solve. Therefore, today’s business problems are by definition more complex. And we're talking **essential complexity**, stuff our software needs to be able to do to gain customers, make profit, please our investors.

This puts us in a tough spot. Likely, the low hanging fruit for eliminating **accidental complexity** has been plucked. We have good IDEs, debugging environments, expressive high-level languages, and the entire GitHub ecosystem of open source. Unless neural nets start developing algorithms or identifying and patching our software bugs en masse, it’s hard to imagine some sort of major advance in software productivity. Back to Fred Brook’s point, going forward there is no such thing as a “silver bullet.” Not even an A.I. based one! Further reductions in accidental complexity will likely be a heavy lift that depends on deeper systems thinking and greater focus on code quality. For many organizations, such high levels of software craftsmanship may not be viable.

## Why does complexity matter in software?

One of the classic problems of large software systems is the observation that each additional programmer added to a software project seems to be marginally less productive than the one before it. Thus as software teams grow, aggregate productivity grows slower and slower until some terrible point where hiring one additional developer drops the productivity of the entire team.

[Surely Monsieur can hire one more developer. He/she is fully trained, so the time to get them up to speed would be... wafer thin.](https://www.youtube.com/watch?v=uRpt4a6H99c)

Fred Brooks called this [the “Mythical Man-Month” paradox](https://en.wikipedia.org/wiki/The_Mythical_Man-Month).

Admittedly, throughout human history, this idea of the decreasing marginal utility of labor is not a new idea. So what makes this condition especially difficult for the software industry?

Take a millennial view, and it appears that humanity's ability to undertake large projects has generally depended on centralization and management hierarchy. For example, Roman soldiers were organized into groups of 8, which were organized into centuries of 80, which were organized into cohorts of 480, which were organized into legions of 4,800, which reported to Caesar. Individuals dealt with a superior, 8-10 peers, and perhaps 8-10 subordinates, and by the power vested in the middle management, epic shit happened. Egyptian Pharaohs engineered the Nile and built palaces for the afterlife. Henry Ford brought motorcars to the American middle class. IBM engineered and mass manufactured tabulating machines of great complexity.

In the transition from hardware to software, something changed. IBM, worldclass at computing hardware, struggled to build complex software such as the OS/360 operating system.

From my perspective, the main reason for this is that writing software systems is not an act of mass production, it is a creative act of design on a massive scale. Physical goods need to be manufactured, but software does not. Copying electronic bits is effectively free (a simple fact which has massive economic and social implications). This means that the manner of work building software is quite a bit different from the manner of work manufacturing hardware. Manufacturing physical goods is justified by scarcity, but human work in software is inherently creative and should always advance the status quo.

While the Software profession has an air of [blue-collar craftsmanship](https://www.wired.com/2017/02/programming-is-the-new-blue-collar-job/), we're essentially a creative class along the lines of the [Bauhaus movement](https://en.wikipedia.org/wiki/Bauhaus), and like many creative classes throughout the ages, we're unsuited to Caesar’s command-and-control techniques. Small nomadic tribes remain our preferred unit of organization, as collaboration with small groups of likeminded peers preserves our autonomy and enhances our creativity. Beyond a certain point, we recognize that building a shared artistic consensus across too many artists results in design guided by the lowest common denominator of several competing artistic visions.

Let’s imagine a theoretical universe where the building trade consists of only architects, and blueprints allow buildings to be materialized for free without human effort. In such a universe, one can imagine that businesses might want to increase output by finding ways to speed up the creative architectural design process. Engineering management might think that gathering a crack team of architects together might improve productivity through "synergies." So we cram Frank Lloyd Wright, Mies van der Rohe, Frank Gehry, and I.M. Pei, into a room, and a six sigma mega belt begins a motivational speech:

"Sure, when Botticelli, Perugino, Michelangelo, Ghirlandaio, and Raphael collaborated on the Sistine Chapel, it took years, but that was the 16th Century. We’ve got modern tools like Kanban boards and Slack now. Our investor, Masayoshi Son, expect something groundbreaking from this group of crack architects in a few two-week sprints."

So despite occasional comparisons to the skilled trades, for the most part, software is an inherently creative act, and as such, software development teams do not scale or take kindly to command and control. As teams grow and adopt more process-driven command and control techniques, each additional developer is marginally less productive (and likely less motivated).

Given that the increased essential complexity of modern software drives more requirements, which drives larger team sizes, which eventually neccessitates command and control, things are starting to sound hopeless.

Thankfully, there seems to be another way.

## How can software teams manage essential complexity?

Thinking back on the Roman Army, part of the reason Caesar was so powerful is that he dealt in high-level abstractions called legions. The problem with this model is that software craftsmen chafe under command and control. Archimedes is useful, but don’t expect him to listen to a Centurion any time soon. So can we keep the part we like (abstraction) and relax on the part that developers hate (command and control)? Stated differently, can we preserve creative autonomy within the confines of black box abstractions that come together to compose complex systems?

The lived experience of recent software engineering seems to prove that this is indeed possible. Given a good architecture of modular components and well-defined interfaces, we can align our software to facilitate developer's organizational preference for small autonomous tribes. The interfaces impose constraints, but the implementation within those constraints is a canvas for creative expression by software craftsmen... and doesn’t the most creative of art often find inspiration in constraints? Via tiered architectures, we can compose higher level modules out of lower level modules, eventually yielding a working system.

Thinking about this architecturally in terms of essential and accidental complexity, we are not reducing the essential complexity of the software system. We are incurring additional accidental complexity (the overhead of interfaces and abstractions) to be able to break up the essential complexity of the system into smaller bits to keep development teams optimally sized. This increases aggregate system complexity for the sake of keeping developers motivated.

For those familiar with the terms “scale up” or “scale out” in cloud computing, development teams don’t scale up well, so we architect our software to scale out the number of autonomous and loosely-coupled development teams.

A positive side effect of this approach has been the realization, once software systems have been broken into components, that many systems seem to share common requirements. This allows for a degree of consolidation via service-based or microservices-oriented architectures. Even better, since the marginal cost of manufacturing software (copying bits) is effectively free, the research and development of these software modules can often be amortized across many organizations with common requirements by adopting (and hopefully contributing back to) open-source.

## What are our ongoing challenges?

So that’s basically the state of the art of managing modern software complexity. We are using module systems, abstraction, open-source, and distributed architectures to spread out larger and larger essential complexity amongst more and more autonomous teams of developers. The challenge of this approach is that duct-taping and orchestrating these piece parts adds a good deal of accidental complexity back into our systems.

We depend on more and more third-party modules that we don’t have time to validate and we don’t have funding to contribute towards. Our systems are distributed across many microservices, and we’re looking for new tools to help manage container orchestration. We are pushing our best and brightest towards DevOps and SRE type roles to try to keep our herd of software cats running in the same direction, and we’re hoping that computer scientists come up with some sort of microservice framework or autonomous self-healing system that proves Fred Brooks wrong: that there is indeed a silver bullet that will allow us to surpass our competition.

While many of these problems seem insurmountable, we will likely continue to find new modern tools to tackle this new accidental complexity, which will allow us to build ever larger systems with ever more essential complexity, which we will spread out through new solutions, incurring new forms of accidental complexity along the way. Accidental complexity will rubber band back and forth and essential complexity will always increase until the heat death of the universe.

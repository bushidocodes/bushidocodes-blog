---
category: programming
templateKey: blog-post
title: The Ruby Programming Language
date: 2019-05-13T09:00:00-05:00
author: spmcbride1201
slug: ruby-lang/
---

I am not a Rubyist. I'm just a polyglot developer backpacking across different language ecosystems with a sense of curiosity and the software equivalent of a Rick Steves' travel guide: [Bruce A. Tate](https://twitter.com/redrapids)’s [Seven Languages in Seven Weeks](https://pragprog.com/book/btlang/seven-languages-in-seven-weeks). In the [previous post](https://www.bushido.codes/programming-language-tourism), I introduced my motivations for this project.

Our first stop is Ruby, a quirky scripting language with an object-oriented center and a thick sugary shell. It pairs nicely with scripting tasks, medium-sized web apps written as "magestic monoliths," and domain-specific languages.

If you want to keep track of my travels as I explore other languages such as Io, Prolog, Scala, Erlang, Clojure, and Haskell, [follow me on Twitter](https://twitter.com/bushidocodes).

![](/img/posts/ruby-lang/ruby.png)

## Background

When I was a cadet at [West Point](https://westpoint.edu/) from 2003-2007, much of my Computer Science coursework was taught in a semi-obscure programming language named [Ada](<https://en.wikipedia.org/wiki/Ada_(programming_language)>). While this language choice was perhaps a bit odd compared to C, C++, or Java, West Point computer science courses followed the general trend of the era to place strong emphasis on [UML](https://www.uml.org/what-is-uml.htm), [relational database normalization](https://en.wikipedia.org/wiki/Database_normalization), and [object-oriented design patterns](https://en.wikipedia.org/wiki/Software_design_pattern). As I’ve aged, I’ve gained respect for these E-as-in-Enterprise concerns, but getting slammed by the weight and burden of these concepts as a young undergraduate was discouraging. They just seemed to add so many additional frictions to the process of shipping working code.

[Yukihiro "Matz" Matsumoto's](https://twitter.com/yukihiro_matz) Ruby programming language was a key part of the backlash against the Enterprise-y ecosystem built around Java. While most languages were designed for hardware empathy, strong IDE tooling, and runtime performance, Matz's Ruby emphasized programmer productivity and happiness. He wanted to create a language that enabled developers to ship code faster, even if this code ran a bit slower in production.

![](/img/posts/ruby-lang/matz.jpg)

The net result was a simple scripting language that eliminated the cruft and formalism of C++ and Java and restored the simplicity of earlier object-oriented languages such as [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk). Over the next few years, Ruby attracted developers from other ecosystems, many of whom began building third-party modules (called [RubyGems](https://rubygems.org/)). This created a [flywheel effect](https://www.jimcollins.com/concepts/the-flywheel.html), which further accelerated when [David Heinemeier Hansson](https://twitter.com/dhh) released Ruby on Rails, an agile web framework that became popular with startups such as GitHub and Twitter.

After a decade of rapid growth and seeming dominance among venture-backed web startups, several trends seemed to take some of the wind out of Ruby's sails.

First, several successful Ruby-powered startups became extremely popular, leading them to the enviable problem of figuring out how to scale Ruby apps written as Ruby on Rails monoliths. The most famous example of this was Twitter, which rebuilt its microblogging platform using [Scala](https://www.scala-lang.org/) and their custom [Finatra microservice framework](https://twitter.github.io/finatra/) after intermittent downtime caused Twitter's "fail whale" to become a meme.

![](/img/posts/ruby-lang/fail-whale.png)

Second, famous Rubyists moved to other languages, and they brought Matz’s focus on developer productivity and happiness with them. The most significant outflow of talent was likely to the JavaScript ecosystem. A Rubyist named [Jeremy Ashkenas](https://twitter.com/jashkenas) created [CoffeeScript](https://coffeescript.org/) (adding Ruby-like sugar to JavaScript via transpilation), [Backbone](https://backbonejs.org/) (the first major client-side framework), and [Underscore](https://underscorejs.org/) (JavaScript’s missing standard-library). Another Rubyist named [Yehuda Katz](https://twitter.com/wycats) created [EmberJS](https://emberjs.com/), an influential Single Page App framework with a Rails-like philosophy. In my opinion, these two Rubyists created the foundation of the modern JavaScript renaissance. Additionally, given the outsized role that CoffeeScript played in influencing the 2015 ECMAScript specification, one can argue that Ruby has influenced JavaScript nearly as much as Scheme and Java.

![](/img/posts/ruby-lang/ashkenas-katz.jpg)

Beyond JavaScript, Ruby directly or indirectly inspired the creation of new Ruby-like languages offering improved performance and scalability characteristics, including [Crystal](https://crystal-lang.org/), [Swift](https://swift.org/), and [Elixir](https://elixir-lang.org/). Established languages have also undergone a counter-reformation of sorts by reducing boilerplate, simplifying syntax, and enabling easy interop with Ruby or Ruby-like code. For example, [Groovy](http://groovy-lang.org/) and [Groovy on Grails](https://grails.org/) brought Ruby and Ruby on Rails conventions to the JVM, and JRuby enabled the compilation of Ruby itself to Java bytecode. Similarly, it's hard not to look at more modern versions of Spring and Play and not see the influence of Ruby and Rails.

Without a doubt, Ruby is not as dominant as a decade ago. However, this is because Ruby's fun and playful spirit has transcended its community, setting the bar for modern languages and igniting the modern open-source software movement. It's no surprise that Rubyists are such a passionate bunch.

## Easiest way to explore Ruby

Out of all the languages in Seven Languages in Seven Weeks, Ruby is the most mainstream and offers numerous easy options for getting started. My personal suggestion is [repl.it](https://repl.it/), an online code editor that lets you get started without having to install anything. In fact, I've embedded several repl.it widgets in this page!

## Impressions of the Language

### Highly Consistent OOP Foundation

At first glance, Ruby looks like a very sugary procedural programming language. As with Perl for example, all sorts of things can be accomplished in powerful one-liners. Pop open the hood, and you realize that everything is an object. It’s just that syntactic sugar hides the complexity and boilerplate of these objects.
This consistency eliminates the mental overhead of thinking about "primatives" and "instances." E.g. is this value "boxed" or "unboxed" in Java? Or is this an Array or an Array-like object in JavaScript?

<iframe height="500px" width="100%" src="https://repl.it/@spmcbride1201/Rubys-Consistent-OOP-Foundation?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Natural Language-like Syntax

Ever since the early days of [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper) and [COBOL](https://en.wikipedia.org/wiki/COBOL), language designers have strived for a programming language that reads like natural human language. In this regard, Ruby does better than most. Allowing conditionals to be optionally moved to the end and adding the keyword unless as an alternative to negation via the ! operator produces more literate source code.

<iframe height="500px" width="100%" src="https://repl.it/@spmcbride1201/Natural-Language-Syntax?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Simple Collections

I recently had an assignment in my graduate algorithms course which required me to use [Java](https://github.com/bushidocodes/cs6212-graphs), and I decided to use Java 11 to get some first hand experience using functional programming via the [new streams API](https://www.geeksforgeeks.org/stream-in-java/). It is striking how many types of collections are in modern Java. Each new collection provides new capabilities, but adds the additional overhead of converting between similar-yet-slightly-different kinds of collections. Even modern JavaScript is getting like this now that developers are replacing Objects with Maps and WeakMaps.

In contrast, Ruby seems to have kept the number of abstractions to a minimum. Most apps seem to live and die by Arrays and Hashes, but Sets are available to simplify building data structures. Ruby also offers a range syntax that is a bit more sugary than the Python equivalent.

<iframe height="500px" width="100%" src="https://repl.it/@spmcbride1201/Simple-Collections?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Closures and Functional Programming

I consider the aggressive elimination of parentheses and curly-braces one of the most shocking aspects of Ruby. Using `my_think.do_something` to invoke a function without a trailing `()` looks aesthetically strange to someone with a background in the C family of languages. How would one differentiate between passing a function and passing the result of calling a function? I haven't dived deep into these mysteries, but it seems that the Ruby convention is not to pass functions, but to pass something called "Code Blocks."

```ruby
[1, 2, 3].each { |num| puts num }
```

I first thought that Code Blocks were Ruby's lambda functions with a syntax that takes some getting used to. However, after diving a bit deeper, I realized that the different flavors of closures in Ruby are a bit complicated with minute differences around keywords, parameters, and the ability to save to a variable. I imagine that this is a common pitfall for junior Rubyists.

<iframe height="600px" width="100%" src="https://repl.it/@spmcbride1201/Functional-Programming-via-Code-Blocks?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Open Classes and Duck-Typing

Classes in Ruby are considerably more flexible (and arguably more pragmatic) than those of other object-oriented languages. Rather than having to implement a standard interface with a contract, Ruby uses “duck typing,” which means if an object quacks like a duck, it is a duck. Furthermore, all classes in Ruby are “open,” which allows the base classes to be modified or extended to provide custom functionality. This flexibility turns out to be handy for writing Domain Specific Languages, which are small specialized programming languages for particular use-cases.

Let's take a look at two examples. The first example extends strings and nil to simplify filtering out values that are either empty or nill. This is valuable because empty strings are truthy (evaluate to true) in Ruby. The second example creates a simple DSL for working with Roman Numerals.

<iframe height="500px" width="100%" src="https://repl.it/@spmcbride1201/Open-Classes-Duck-Types?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Meta-programming and Mixins

One of the most complicated problems in OOP is dealing with multiple inheritance. What if a class in fact inherits state or behaviors from more than one parent class? Different languages take different approaches for this issue, including concepts like interfaces. Ruby takes a much simpler approach called a mixin. The core idea of a mixin is that you use meta-programming to “decorate” a base class with new attributes and methods. By virtue of duck-typing, all instances of classes decorated with the same quack mixin are then polymorphic.

Let's take a look at an example mixin that allows us to read data from a CSV

<iframe height="500px" width="100%" src="https://repl.it/@spmcbride1201/Meta-Programming-and-Mixins?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## A Note on Performance

The downside of Ruby’s developer friendliness is that the language is higher-level and less friendly to machines. Metaprogramming, loose types, and duck typing are not compatible with ahead-of-time (AOT) compilation and generally make high-performance Just-In-Time compilers difficult to build. Additionally, these dynamic and flexible constructs make it hard for tools to understand what the code is doing, which is why Ruby long lacked a tool like Microsoft’s IntelliSense.

However, I would not disregard Ruby for these issues alone. I share Bruce Tate’s observation that “too many people focus on enough scalability to build the next eBay when they can’t deliver any software on time.” Finding product-market fit for an MVP is crucial, and languages like Ruby might get you there faster. Why optimize prematurely for hockey-stick growth if this raises the risk that you don’t ship code fast enough? Additionally, modern JavaScript has gone through similar performance and tooling challenges, but VSCode and Google’s TurboFan JIT compiler show that higher level dynamic languages can overcome many of these performance and tooling challenges.

## Conclusion

This short tour of the Ruby programming language makes it very clear why Ruby has been so dominant and influential over the past decade. By offering a consistent OOP base and substantial sugar, Ruby became an attractive refuge for developers exhausted by Java or .NET and beginning programmers alike. Duck typing, open classes, and mixins provided powerful constructs for library authors, which accelerated the production of Ruby gems and led to the creation of GitHub and modern open-source culture.

In many ways, we all owe a debt of gratitude to Matz, DHH, and the other Ruby giants. Believe it or not, we stand atop their shoulders even if we aren't Rubyists ourselves!

## Postscript

Thank you for making it this far! I'm a novice blogger and I know that oftentimes it can be hard to get through a piece as long as this. Apologies to all Rubyists for any factual errors or mis-characterizations. As I wrote at this start of this post, this was my first direct exposure to Ruby. I hope that I have done your language and community justice. Please feel free to leave comments and continue the discussion below. Alternatively, if you have feedback for my content or writing style, please feel free to [reach out to me on Twitter](https://twitter.com/bushidocodes). I'm very much a journeyman engineer, and over the past year, I've finally been able to wrestle my imposter syndrome and dip my toe into conference speaking, community work, and blogging. I want to break out of being a dark-matter developer and I would appreciate feedback and encouragement.

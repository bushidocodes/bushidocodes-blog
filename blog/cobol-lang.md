---
category: programming
templateKey: blog-post
title: The Common Business-Oriented Language (COBOL)
date: 2019-05-17T09:00:00-05:00 
author: spmcbride1201
slug: cobol-lang/
coverimage: /img/posts/cobol-lang/GraceHopperCobol.jpg
---
I am not a professional mainframe developer. I'm just a polyglot programmer backpacking across different language ecosystems with a sense of curiosity and the software equivalent of a Rick Steves' travel guide: [Bruce A. Tate](https://twitter.com/redrapids)’s [Seven Languages in Seven Weeks](https://pragprog.com/book/btlang/seven-languages-in-seven-weeks). In previous posts, [I introduced my motivations for this project](/programming-language-tourism) and [discussed the Ruby programming language](/ruby-lang).

This week, I've decided to go off-script and investigate a language that was definitely not on the tour. 

If you want to keep track of my travels as I explore other languages such as Io, Prolog, Scala, Erlang, Clojure, Haskell, and others, [follow me on Twitter](https://twitter.com/bushidocodes).

![Grace teaching COBOL](/img/posts/cobol-lang/GraceHopperCobol.jpg)

[COBOL](https://en.wikipedia.org/wiki/COBOL) is often unfairly maligned by developers, most of whom haven't tried the language. It is the [archetype of "legacy technology,"](https://blog.codinghorror.com/cobol-everywhere-and-nowhere/) and often contrasted unfavorably with the [C programming language](https://en.wikipedia.org/wiki/C_(programming_language)). This sort of comparison is silly for several reasons. First, COBOL is a standardized version of [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper)'s [FLOW-MATIC](http://s3data.computerhistory.org/brochures/univac.flowmatic.1957.102646140.pdf), which pioneered the idea of high-level languages and compiler theory in 1955, some 18 years before the 1972 release of C. These languages are entirely different generations. Additionally, the target audiences and intended use cases for C and COBOL are quite different. C was targeted at engineers as a systems programming language suitable for building the UNIX operating system and ecosystem of utilities. COBOL was targeted at a general audience as a high-level scripting language for the automation of business processes.

The software engineering profession needs to drop the snark and reassess the critical role of COBOL in popularizing programming outside of a narrow clique of mathematicians, engineers, and researchers. The vision of [CS for All](https://obamawhitehouse.archives.gov/blog/2016/01/30/computer-science-all) was pioneered by [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper) through FLOW-MATIC and COBOL, and self-taught developers, mass secondary education of Computer Science, and the emergence of coding bootcamps as an alternative to a four-year college degree all echo Grace's democratic vision for COBOL.

At its core, COBOL is a static [weakly-typed](http://legstar.blogspot.com/2009/11/cobol-is-weakly-typed.html) high-level scripting language that is designed to be approachable to non-specialists by borrowing ideas from natural human language. It is the dominant language for commercial and government applications running on [mainframes](https://en.wikipedia.org/wiki/Mainframe_computer), and it is typically used to write small "mainframe jobs" that are architecturally similar to cloud-based [serverless](https://en.wikipedia.org/wiki/Serverless_computing) functions.

## History
In the earliest days, computers were designed by electrical engineers, used by mathematicians, and focused on scientific research and complex engineering problems such as the design of the nuclear bomb.

However, in 1952, a language designer named [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper) attended the Association for Computing Machinery conference and presented the idea of using "compiling routines" (now called compilers) to create high-level programming languages approachable to non-mathematicians. According to [the associated journal article](https://worldpowersystems.com/CA/Women-computers/Hopper%20The%20education%20of%20a%20computer.pdf), the point of compilers was to advance the goal of "replacing, as far as possible, the human brain by an electronic digital computer." While previous advances in machine code had automated the job of [human "computers"](https://www.history.com/news/human-computers-women-at-nasa), writing [machine code](https://en.wikipedia.org/wiki/Machine_code) was still so complicated that it effectively required specialists and mathematicians. By arguing for the creation of [compilers](https://en.wikipedia.org/wiki/Compiler) that could translate higher-level languages into uniform subroutines of machine code, Grace sought to democratize the creation of software by eliminating the need for such specialists.

Grace described the compilation of software as follows:

"The programmer... is supplied with a catalogue of subroutines. No longer does he need to have available formulas or tables of elementary functions. He does not even need to know the particular instruction code used by the computer. He needs only to be able to use the catalogue to supply information to the computer about his problem. The [UNIVAC](https://en.wikipedia.org/wiki/UNIVAC_I), on the basis of the information supplied by the [programmer], under the control of a [compiler], using subroutines and its own instruction code, produces a program. This program, in turn directs the UNIVAC through the computation on the input data and the desired results are produced. A major reduction in time consumed and in sources of error has been made. If the library is well-stocked, programming has been reduced to a matter of hours rather than weeks. The program is no longer subject either to errors of transcription or of untested routines."

While presented primarily as an evolutionary step forward that would help mathematicians perform scientific computation, later portions of the paper hint at future possibilities:

"More [compilers] will be devised: those handling commercial rather than mathematical programs... By considering the professional programmer (not the mathematician), as an integral part of the computer, it is evident that the memory of the programmer and all information and data to which he can refer is available to the computer, subject only to translation into suitable language."

In short, compilers and high-level languages will democratize programming, creating a body of professional programmers that aren't necessarily mathematicians. Throughout the 1950s, Grace advanced this idea by writing the first compiler and developing FLOW-MATIC, the first "business-oriented" language intended for general-purpose use outside of mathematics. To make the language approachable, she designed the language around the principles of natural language.

While these early languages enjoyed success and popularity, they were proprietary and therefore limited to running on a single vendor's computer architecture. This created "lock-in" and prevented the ability to move between vendors. As the the world's largest consumer of computers, the U.S. Department of Defense began to advocate for the creation of a general-purpose programming language controlled by a neutral standards body. This would drive computer manufacturers to build compilers against this common standard and make software source code portable across systems via recompilation, broadly benefitting consumers and reducing anti-competitive lock-in. This resulted in the 1959/1960 [Conference on Data Systems Languages (CODASYL)](https://en.wikipedia.org/wiki/CODASYL), which studied existing high-level languages and defined the standard for the first-ever Common Business-Oriented Language. It was called COBOL for short. [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper) participated in this standardization process, and the resulting standard drew primarily from her FLOW-MATIC design.

Once defined, the Department of Defense mandated that vendors competing for military contracts support COBOL, which immediately made the language a de-facto industry standard. This was later formalized when the language became an ANSI and ISO standard. 

Early versions of the language ran slowly, but compilers sped up significantly between 1962 and 1964, leading IBM and the other computer vendors to discontinue their alternative high-level languages and encourage adoption of the standard. By 1970, COBOL became the most popular programming language in the world. In 1997, [Gartner estimated that there were 200 billion lines of COBOL in existence](https://fcw.com/Articles/2009/07/13/TECH-COBOL-turns-50.aspx). 

Over the decades, COBOL has been extended via proprietary compilers and enhanced via updates to the language specification. Recent versions have included classes, new data-types, and collections. However, given the size and age of the COBOL ecosystem, most production code likely still runs the older COBOL-85 standard.

## How COBOL is used

COBOL is mostly used in the context of traditional mainframe computing, which is a big data architecture that has parallels with cloud concepts such as "serverless" or "cloud native" computing. Since this style of computing is quite specialized and unfamiliar to most modern developers, it's worth taking a moment to review this architecture to understand the primary use case for COBOL.

Traditional mainframe computing is used for non-interactive "big data" workloads. Some applications are "batch," meaning computational work is performed against a large collection of records. Given such an application might entail generating monthly invoices for all customers of a Fortune 500 company, batch takes a while to complete. Other applications are real-time and event-driven, such as [VisaNet](https://en.wikipedia.org/wiki/Transaction_Processing_Facility), the mainframe system that processes Visa credit card transactions. In this example, swiping a Visa card triggers an event that causes computation across a cluster of mainframes.

While the mainframe-specific terms are unfamiliar, the core architecture of this system resembles many modern systems running on Azure or AWS:
* Customer data is structured as records in high-speed light-weight data stores
* Computation is modularized into small pieces with common interfaces and combined together using an orchestration layer
* The orchestration layer steps through an orchestration script step-by-step, instructing modules of code to run with specific input data and environment variables, monitoring and correcting for errors, and advancing to the next step when a module runs to completion
* Each module is kept focused, lean, and simple. It resembles a simple script internally broken into functions. It executes a small focused bit of business logic based on environment variables set by the orchestration engine and returns the results directly or indirectly via persistent storage.

In mainframes, these modules are called jobs. The orchestration layer is a mainframe system controlled via a specialized [Job Control Language](https://en.wikipedia.org/wiki/Job_Control_Language). Disk and mainframe datasets are used to store intermediate and output data.

In serverless computing, these modules are serverless functions. The orchestration layer is likely a combination of an API gateway and pub/sub messages passed through a notification service. Object storage or NoSQL databases are used to store intermediate and output data.

Following this analogy, COBOL is essentially a purpose-built language for serverless functions. 

## How to run the language
If you just wish to run my code samples, I suggest clicking the links below each block to open a REPL environment pre-populated with my code. Unfortunately, REPL.it does not support COBOL, so I've had to instead use [CodingGround](https://www.tutorialspoint.com/codingground.htm), which does not support embedding into this page or the execution of interactive console programs such as my guessing game. Additionally, the PrismJS library that powers syntax highlighting on this page does not understand COBOL, so my code samples remain blocks of text. If I find solutions to either of these issues, I will update this post.

If you wish to dive further and perhaps run my COBOL examples locally, I suggest installing [GnuCOBOL](https://sourceforge.net/projects/open-cobol/). This compiler is undergoing a rewrite from C to C++ (offered in their experimental 3.0 branch), but I've stuck with the stable 2.2 release to benefit from their [excellent documentation](https://open-cobol.sourceforge.io/guides/GnuCOBOL%202.2%20NOV2017%20Programmers%20Guide%20(US%20Letter).pdf).

On my Debian-based system, I was able to install open-cobol using `sudo apt-get install open-cobol`

Then I compiled source code by running `cobc -xj -free myfile.cob`

## Impressions of the Language

Note: My code snippets are a bit non-idiomatic for COBOL to make them look a bit less jarring. It's common for COBOL to make all keywords and variables ALL-CAPS with compound words delimited by a dash. I've chosen to use lowercase and camel case to more closely match the idioms of other coding languages. Given syntax highlighting in modern editors, I don't consider the use of ALL-CAPS to be beneficial when reading code.

### Source Code as a single file

Given the fact that COBOL is mostly used to write small modular jobs that are combined together by an orchestration engine, it makes sense that COBOL optimizes for expressing a program as a single source file.

It accomplishes this by breaking the file into different sections called `divisions.` Most of these divisions are optional and contain metadata that other languages would store in separate XML, JSON, or YAML config files.

Below is a Hello World example for COBOL. The optional divisions are omitted, but I have retained the `data division` to demonstrate that COBOL requires that variables be pre-declared outside of the `procedure division` where we write our code. This strict division enforces the coding best practice of declaring variables at the top of their associated scope. Indeed, small COBOL programs typically have a single global scope. I'll break down the complex line `1, greeting pic x(12) value is "Hello World".` later, so just realize that variable declaration is strictly kept separate from our code, which lives in the `procedure division`. If we were accessing other external resources, such as files from disk, we would also define those resources in the `data division`.

```
identification division.
program-id. HelloWorld.

data division.
working-storage section.
1, greeting pic x(12) value is "Hello World".

procedure division.
display greeting.
stop run.
```
[Run at CodingGround](http://tpcg.io/xMIxIZ)

### Variables as Records

Let's breakdown the scary-looking line we disregarded earlier:

```
1, greeting pic x(12) value is "Hello World".
```


In TypeScript, this would be roughly equivalent to the following:

```js
let greeting: string = "Hello World";
```

#### Picture Clauses
In most languages, variables have a discrete type, such as a `string`, `integer`, `float`, or `boolean`. COBOL handles types quite a bit differently, so getting comfortable with COBOL's type system is likely the hardest part of learning the language.

In COBOL, every variable is a `record`, which is effectively a sequence of characters. `Records` are typed using a `picture clause`, a type pattern which provides typings for a record character-by-character. This means that each character within a record is individually typed using the following values:
* Letter (A)
* Number (9)
* Letter or Number (X)
* +/- sign (S)
* decimal point(V)

These patterns are pre-pended by the keyword `picture` (or `pic` for short)

![](https://media.giphy.com/media/AANqYGD9LVsw8/giphy.gif)

Is your mind blown? That's okay! We'll go through examples to make sure this is clear. The concept is simple, but it takes some getting used to.

* `pic 9` defines a number with one digit. It does not have a character indicating a sign or a decimal, so it is an integer between 0 - 9.

* `pic s9999v9999` is a signed decimal with +/- in the first character, four whole number digits, a decimal point, and four fractional digits. It stores float values between -9999.9999 and 9999.9999.

* `pic x(10)` is a string of ten characters containing a mix of letters and numbers. This is a shorthand notation equivalent to `pic xxxxxxxxxx`.

* `pic a(5)` is a string of five English letters (A-Z and spaces). This is a shorthand notation equivalent to `pic aaaaa`.

So the picture clause acts as the type for our record. It allows us to declare variables like the following TypeScript example, but we still have to learn a few more concepts to be able to initialize the variable with a value.

```js
let greeting: string;
```

#### Figurative Constants: Initializing Records

When declaring variables (records) in memory, we can initialize the variable with either literals or special keywords called `figurative constants`.

For our Hello World Example, this is fairly straightforward, but the use of words like `value is` might seem verbose and strange if you're used to just using an `=`.

`pic x(12) value is "Hello World"` defines a string with twelve characters equal to "Hello World ". 

There's one problem though. Notice the trailing space due to the fact that the literal "Hello World" is only 11 characters. Records have a fixed length. When we assign values to records, they are padded or truncated to fit as best as they can.

For numbers, it is important to make sure the literal you're using to declare the variable matches the pattern set by the `picture clause`.

`pic v99 value .25.` declares a float that can store .00 to .99 and initializes it as .25

Finally, COBOL provides several convenience `figurative constants` for common activities such as zeroing out a variable.

`pic 99 value zeros` declares a two-digit number and initializes it as 00

In the case of an optimization algorithm, we likely would want to set a variable to the largest possible number and update it when we find a lower result. We could do this with the following:

`pic 9999 value high-value` declares a signed float and initializes it as 9999

#### Level Numbers and Complex Structures 

So we've almost covered the basics of COBOL types. One more aspect to go!

If you refer to the statement  `1, greeting pic x(12) value is "Hello World".`, you should now understand all of the parts other than the `1,` at the beginning of the statement. 

This is a `level number` and it is used to express hierarchy among `records`. Hierarchical records are used to build more complex data structures, similar to structs in C, objects/Maps in JavaScript, or Hashes in Python.

All top level variables / `records` have the level number 01. Anything from 02 to 49 indicates a child element that is part of a preceeding record with a lower level number. It is a best practice to indent `records` to make this structure more obvious and align `picture clauses` across all levels of the hierarchy.

For example, imagine that we were building a special data structure for storing the personnel records of servicemen and servicewomen in the U.S. military, such as Admiral Grace Hopper. We'd have stuff like name, rank, and social-security number. Let's just start with name and social-security number for now.

This might look something like the following:

```
01 ServiceRecord.
   02 SSN                        pic 9(9).
   02 Name.
      03 FirstName               pic a(20).
      03 Filler                  pic a(1) value space.
      03 LastName                pic a(20).
```

Because we can access the Group ID Name directly, we add a one character filler between the FirstName and LastName so the value is something like "Sean McBride" instead of "SeanMcBride".

This is roughly equivalent to the following TypeScript interface.

```js
export interface NameObject {
   givenName: string;
   familyName: String;
}
export interface ServiceRecord {
    ssn: string;
    name: NameObject;
}
```

So let's add rank to this military service record. There are three types of rank, commissioned officer, warrant officer, and enlisted. Additionally, there are grades for each of these ranks (E1-E9, W1-W5, and O1-O10). However, there are also special grades for officers that used to be enlisted, such as (O2E). We can satisfy these constraints with the following:

```
01 ServiceRecord.
   02 SSN                        pic 9(9).
   02 Name.
      03 GivenName               pic a(20).
      03 Filler                  pic a(1) value space.
      03 FamilyName              pic a(20).
   02 Rank.
      03 RankType                pic a(1)
      03 Grade                   pic x(2)
```

This is roughly equivalent to the following TypeScript interface.

```js
enum RankType {O, W, E}
enum Grade {1, 1E, 2, 2E 3, 3E, 4, 5, 6, 7, 8, 9, 10}
export interface RankObject {
   rankType: RankType;
   grade: Grade;
}
export interface NameObject {
   givenName: string;
   familyName: String;
}
export interface ServiceRecord {
    ssn: string;
    name: NameObject;
    rank: RankObject
}
```

It's likely that we'll want to use if statements to check if someone is an officer, warrant, or enlisted in our program. To do this cleanly, we can use the special `level number` 88, which is reserved for `conditional names`. These are effectively boolean values that get precomputed whenever a record is initialized or updated. These resolve to true if the record matches one of the values listed after the `conditional name`. 

```
01 ServiceRecord.
   02 SSN                        pic 9(9).
   02 Name.
      03 GivenName               pic a(20).
      03 FamilyName              pic a(20).
   02 Rank.
      03 RankType                pic a(1)
         88 ValidRankType        value 'O' 'E' 'W'.
         88 Enlisted             value 'E'.
         88 WarrantOfficer       value 'W'.
         88 CommissionedOfficer  value 'W'.
      03 Grade                   pic x(2)
         88 ValidGrade           value '1' '2' '3' '4' '5' '6' '7' '8' '9' '10' '1E' '2E' '3E'.
```

Using this approach, we get a boolean ValidRankType that indicates if the rank type fits is valid and Enlisted, WarrantOfficer, and CommissionedOfficer booleans that we can test against.

It's customary to salute commissioned officers and warrant officers. The logic for this might look something like this:

```
if ValidRankType and (CommissionedOfficer or WarrantOfficer)
   perform salute
```
![](https://media.giphy.com/media/umXZ6MNman8TC/giphy.gif)

#### Why so hard?
So you might be wondering why COBOL makes all of this data type stuff so complicated. In my opinion, this type system optimizes for frequent reads and writes of records to and from persistent storage. Rather than constantly serializing and deserializing in-memory data types native to the language, the series of characters are the source of truth and typed on a character-by-character basis. Considering that the UNIVAC systems Grace used to develop FLOW-MATIC could only store 12,000 characters in memory (for reference, this blog post is more than twice that), COBOL programs could not fit in memory, so records had to be continuously read from and written to magnetic tape. Often a single system would run four or more magnetic tape systems in parallel.

![](https://media.giphy.com/media/y1rQER2na8q8E/giphy.gif)

Additionally, because 1960s era long-term persistent storage was punched cards that stored fewer than 100 characters, COBOL records tended to be quite terse. Given that many programs shared common record formats, it was considered risky to change picture clauses. This caused terse record formats to outlive punched cards, allowing the 1960s practice of using two-digit years to cause the Y2K crisis decades later.

Note: You might have noticed that I characterized COBOL as a weakly-typed language. This is not a universal point of view, but I consider it appropriate because COBOL allows for implicit conversion between an alphanumeric variable like a `pic x(3)` and a numeric like a `pic 9(3)`. Without proper error and exception handling, this conversion can cause runtime crashes similar to weakly-typed languages.

### English-like Syntax
As mentioned in the history section, one of [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper)'s key design goals for FLOW-MATIC and COBOL was a high-level syntax that was broadly approachable to non-mathematicians. With little prior-work to draw from, Grace effectively design from first principles. Given that most scientific languages were derived from mathematical theories, such as lambda calculus, Grace decided to derive her general-purpose business-oriented language from the humanities, specifically the structure and syntax of English prose.

This design principle informs the COBOL syntax.

As mentioned before, a COBOL file is broken into different divisions, many of whom contain metadata about the program. The sections with the metadata are at the top similar to a cover page. The main content of the program is in the `procedure division`.

The `procedure division` is broken into `sections`, which are labeled with a header. These sections are like "open sub-routines" and can be invoked using the `perform` keyword followed by the header.

`Sections` contain `paragraphs`, which are blocks of code.

`Paragraphs` contain `sentences`, which are effectively statements terminated by a period.

`Sentences` contain one or more `phrases.` Within phrases, the verbs used to tell the computer what to do, such as `perform`, `display`, and `accept`, are called `commands`, and the subsequent elements are called `clauses`.

Here is an example guessing game written in COBOL. I am invoking sections as "open sub-routines" using the perform command. Within the GetGuess section, I am using an inline perform as a while loop to prompt the user until the input matches one of the values listed for validGuess. The loop terminates with an `end-perform`.

```
identification division.
program-id. GuessingGame.
author. Sean McBride.

data division.
working-storage section.

01 actualNumber            pic  9 value  5.
01 userGuess               pic  9 value  0.
   88 validGuess           value '1' '2' '3' '4' '5' '6' '7' '8' '9'.
01 numberOfGuesses         pic 99 value 00.

procedure division.

StartRun.
    perform GetGuess until userGuess is equal to actualNumber.
    display "Got it in " numberOfGuesses " guesses".
    stop run.

GetGuess.
    move zero to userGuess.
    perform until validGuess
       display "Guess a number between 1 and 9"
       accept userGuess
       if not validGuess display "This was not a number between 1 and 9"
    end-perform.
    add 1 to numberOfGuesses.
    if validGuess and userGuess is greater than actualNumber display "Too High!".
    if validGuess and userGuess is less than actualNumber display "Too Low!".
```

As shown by this program, COBOL is very similar to English. It optimizes for readability similar to domain specific languages such as testing assertion libraries. The cost of all this verbosity is 300+ keywords, including optional "noise words" that only serve to make the COBOL sentences grammatically correct English. For example `is` is a noise word. The clause `userGuess is greater than actualNumber` is eqivalent to `userGuess greater than actualNumber`. Later versions of COBOL introduced terser mathematical syntax, so `userGuess > actualNumber` is also allowed. Similarly, the sentence `add 1 TO numberOfGuesses.` could also have been written using a mathematical expression via `compute numberOfGuesses = numberOfGuesses + 1.`

## Conclusions

While COBOL's English-like syntax may seem heavy and burdensome to modern UNIX developers accustomed to terse commands and man pages, the syntax often reads like clear pseudo-code. Writing the guessing game, I felt drawn to refactor my sentences to read as naturally as possible, much like the process of editing this blog post. The fact that Grace Hopper created this syntax from first principles in 1955 is remarkable and a testament to her intuition about the power of natural language. Like the famous Steve Jobs quote, Grace Hopper combined technology with the liberal arts to create something remarkable. 

Due to these characteristics, COBOL achieved its goal of democratizing programming, which in turn fueled the "Go-Go" tech boom of the 1960s. Trade schools similar to modern coding bootcamps popped up around the world, teaching COBOL in just three or four months. In the United States, many of these students attending were veterans using their GI Bill to pursue an alternative to a four-year college degree. Graduate-level math was no longer a prerequisite to becoming a professional programmer.

For this reason, we are in Grace's debt.

```
identification division.
program-id. GraceHopper.
author. Sean McBride.

procedure division.
display "                     __..````..__                      ".
display "                 ._--```   ,.   ```--_.                 ".
display "               //``      << `)      ``\\               ".
display "              ..    ..--../  \..--..   ..              ".
display "              ||   /``-\__    __/-``\  ||              ".
display "        .---  ||  *   ____\__/____  *  ||   ---.       ".
display "      /`      ||    `==============`   ||       `\     ".
display "    ./        ||    |==============|   ||         \.   ".
display " ,  |   ,=====||    |     NAVY     |   ||=====,    |  ,".
display " /\,,, //\\\\\||     \     **     /    ||//////\\ ,,,/\".
display "|/////---,,\\\||      \,.______,./     ||///,,---\\\\\\|".
display "|//////////;..__     ++_        _++    __..;\\\\\\\\\\\|".
display "|///////////////``\      `----`     /``\\\\\\\\\\\\\\\\|".
display "|///////////////////````..____..````\\\\\\\\\\\\\\\\\\\|".
display "|///////////////.../////////\\\\\\\\...\\\\\\\\\\\\\\\\|".
display "|/////////..--``                       ``--..\\\\\\\\\\|".
display ".////../``                                    ``\..\\\\.".
display "\///``                                            ``\\\/".
display " \                                                    / ".
display "                                                        ".
display "       -----------------,      ,-----------------       ".
display "     /\\\,.``````````````\____/ `````````````.,///\     ".
display "     (\\/                \.--./                \//)     ".
display "      /                  /    \                  \      ".
display "       \\               //    \\               //       ".
display "        \\             //      \\             //        ".
display "         \\           //        \\           //         ".
display "          `,=========`            `=========,`          ".
display "                                                        ".
display "                                                        ".
```
[Run at CodingGround](http://tpcg.io/H3mR9V)


References for additional study of COBOL:
* [GnuCOBOL Compiler](https://sourceforge.net/projects/open-cobol/)
* [GnuCOBOL Programmer's Guide](https://open-cobol.sourceforge.io/guides/GnuCOBOL%202.2%20NOV2017%20Programmers%20Guide%20(US%20Letter).pdf)
* [My code examples](https://github.com/bushidocodes/cobol-lang)
* [Good COBOL Tutorials by Michael Coughlan](http://www.csis.ul.ie/cobol/course/COBOLIntro.htm#intro)
* [Good COBOL Book by Michael Coughlan](https://www.amazon.com/Beginning-COBOL-Programmers-Michael-Coughlan/dp/1430262532)
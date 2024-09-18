---
category: Coding
templateKey: blog-post
title: Regular Expressions Reference
date: 2016-11-06T22:11:59-05:00
author: spmcbride1201
slug: regex-reference/
coverimage: /img/posts/wazup.jpg
---

![](/img/posts/wazup.jpg)

## Why this reference?

After the first week of my junior phase at [Fullstack Academy](https://www.fullstackacademy.com/), it's clear to me that Regular Expressions is a concept that I need to master quickly. In the past, I've usually performed string manipulation through verbose and brute-force if/else logic. This approach does not work cleaning in succint functional styles of writing JavaScript. This content is derived from notes I took during the CodeSchool course I link at the bottom of this page and experimentation that I performed on [RegEx101.com](https://regex101.com/). While these materials are primarily intended to serve as a personal reference, I've posed them to my blog in case they might help others.

## Regular Expression Literals

A regular expression literal is a string of characters.

For example, if you wanted to match the word "boat," you could use the following regex

`/boat/` //true for "boat"

A single regex can evaluate about several alterative regular expression literals using the OR `|` operator

`/boat|ship/` //true for "ship" or "boat"

The OR `|` operator can be used on only part of a regular expression literal using parantheses

`/steam(boat|ship)/`

Sometimes, a regular expression literal may have an unknown number of characters, like [when you're just watching the game and having a Bud, and your friend calls.](https://www.youtube.com/watch?v=KolWWgiWG88)

/waz+up!/ //true for "wazup!" "wazzzup!" "wazzzzzzzzup!"

A regular expression literal can match multiple word by including white space in the literal.

This can be done with a space

`/Starship Enterprise/`

Or with a special control metacharacter `\s\` that matches spaces, tables, and newlines

`/Starship\sEnterprise/`

## Anchors

In addition to matching a "boat" or "ship," a Regex evaluates to true if it is a valid substring of a string. This is often called "a partial match."

`/boat|ship/` true for "battleship" or "rowboat" or "boatswain" or "shipping"

Often this is an undesired behavior.

To explicitly only match full matches and ignore partial matches, you can use anchor characters:

- `^` limits true to strings that start with an exact match of the regex without any preceeding text
- `$` limits true to strings that have no text following the match of the regex
- `\b` limits true to words within strings that have no characters immediately preceeding or following the match of the regex

`/^boat$|^ship$/` //true for "boat or "ship" but false for "battleship" or "rowboat" or "boatswain" or "shipping"

`/\bship\b/` //true for "ship" or "I boarded the ship" but false for "battleship" or "shipping"

`/\b(ship|boat)\b/` //true for "ship" or "boat" or "I boarded the ship" "small boat" but false for "battleship" or "shipping" or "rowboat" or "boatswain"

## Character Set

This matches a _single character_ against a permissable range of characters in a regex.

`[a-z]` //Any lowercase letter from a to z.

A character set followed by a + operator matches any number of consecutive characters that are witin the permissable range fo the character set.

`/[a-z]+/` //Any number of consecutive lowercase letters from a to z

Multiple ranges can be placed in a single character set

`/[a-zA-Z]/` //Any uppercase or lowercase letter from a to z.

`/[a-zA-Z0-9]/` //Any uppercase or lowercase letter from a to z or number from 0 to 9.

The above example can be reduced to the `\w` metacharacter that matches all alphanumeric values

`/\w/` //Any uppercase or lowercase letter from a to z or number from 0 to 9.

And things like whitespace can also be added to a character set to match uppercase or lowercase letters or spaces.

`/\w\s/` //true for uppercase or lowercase letters from a to z, numbers from 0 to 9, or whitespace.

Inside of a character set, the `^` also assumes a different meaning. Instead of acting as an achor, it acts as a NOT operator

`/^[^m]$/` //true for any single character other than lowercase m

## Modifiers

Special modifier characters can be placed after the trailing slash of a regex to affect how they are evaluated.

For example, the last regex matching both lowercase and uppercase letters can be simplified with the casing modifier `i` that makes the evaluation of the regex case insensitive.

`//[a-z]+/i`

_Note that modifiers are language specific, so double check the syntax for these using your language_

## Special Characters and Metacharacters

- `\s` matches whitespace characters (spaces, tabs, newlines)
- `\w` matches word-like characters (alphanumeric)
- `\d` matches any number
- `.` matches any character other than newline
- `*` matches the preceeding pattern zero or more times
- `+` matches the preceeding pattern one or more times
- `?` makes the preceeding pattern optional

Many of the special characters have a shorthand NOT notation that uses the capitalized version of the normal special character

- `\D` matches anything but a number, shorthand for `[^\d]`
- `\S` matches anything but whitespace, shorthand `[^\s]`
- `\W` matches anything but an alpha-numeric character, shorthand `[^\w]`

_If you want to literally match a character that is used as a special or metacharacter, you can escape the character with a backslash._

`/.com/` //true for ".com" or "zcom" or "!com"

`/\.com/` //only true for ".com"

## Mixing literals, character sets

`/Ford\s\w+/i` //true for "Ford Fiesta" or "Ford Focus" or "Ford Explorer" or "Ford F150" (this would strugged with F-150 because a "-" is not a word-like character)

`/Ford\s[\w-]+/` //true for "Ford F-150" as well as the above

`/\w+@\w+\.(com|net|org|edu)/i` //true for valid e-mail ending in .com, .net, .org, or .edu

## String length

Earlier, we saw that the `+` symbol matches a pattern against (1-n) characters until reaching a non-matching character.

We can also explicitly identify the number of characters to match using `{n}` where n is an integer of the number of repeating characters that need to meet the pattern for the regex to evaluate to true.

`/[a-z]{2}/` //true for two lowercase letters in a row

We can also specify a range of permissable lengths using `{min,max}`, where `min` is the minimum number of characters that must match in a row and `max` is the maximum number of characters that must match in a row to evaluate to true.

`/[a-z]{1,3}/` // true for one to three lowercase letters in a row.

In a range, `min` and `max` are optional values

`/[a-z]{3,}/` // true for three or more lowercase letters in a row.
`/[a-z]{,3}/` // true for three or less lowercase letters in a row.

## Global Modifier / Multi-Line

Normally, a regex will match once on the first match in a string. The `g` global modifier will ensure that the regex matches as many times as possible.

`/ship/g`

Additionally, in a multi-line situation, the `^` and `$` anchor characters search for a strict match regardless of newline control characters. Often in lists of values, we need to be able to test for matches on a line-by-line basis. This is accomoplished by the `m` global modifier, which evaluates the anchor characters in a multiline environment (line-by-line).

For example, you might have a multiline string that lists different files and file extensions

```
Files:\n
app.css\n
app.js\n
index.html\n
jquery.min.js
```

In this situation, we could use a regex to match all of the \*.js files

`/\w+.js/mig`

```
Files:\n
app.css\n
app.js\n //matched
index.html\n
jquery.min.js //matched
```

Most operating systems represent NEWLINE using the `\n` control character. However, this is not universal.

## Match Groups

Wrapping a portion of a regex with paranthesis creates a match group that is returned at the evaluation of the regex. Match groups can even be nested inside of other match groups.

Matches common ways of writing US phone numbers and returns the area code, first three digits, and last four digits as seperate control groups.

```
/\+?1?\+?\s?-?\(?(\d{3})\)?\s?-?\s?(\d{3})\s?-?(\d{4})/gm
```

If you are using capture groups, you need to mark all uses of paratheses that are used to logically group operands like OR. This is done by appending ?: at the start of the inner string of the paranthesis.

```
/(^(?:http://|https://)?(?:www\.)?\w+\.(?:gov|com|net|edu)$)/
```

## Additional Resources for JavaScript

- [CodeSchool's Breaking the Ice with Regular Expressions Course](https://www.codeschool.com/courses/breaking-the-ice-with-regular-expressions)
- [Cyrilex: Interactive Regular Expressions Tester and Visualizer](https://extendsclass.com/regex-tester.html)
- [Eloquent JavaScript, Chapter 9: Regular Expressions](https://eloquentjavascript.net/09_regexp.html)
- [JavaScript RegExp on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [RegEx 101](https://regex101.com/)

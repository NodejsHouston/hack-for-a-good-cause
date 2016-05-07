<!--
Web Dev: (Simo)
  - Server / Client - AKA - History of web technologies (HTTP, server, client, other)
  - Old School vs New School (SPAs)
  - Frameworks, Libraries and APIs; oh my
  - Technical Components
    - HTML
    - CSS
    - JavaScript
-->

# Web Development

_Fighting for the User_


## Building Blocks of the Web

### [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction)

_HyperText  Markup Language_

> "It's really just semantics..."

It uses [Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) to express the content.

Elements can [wrap](http://codepen.io/matthewsimo/pen/PNVZPR/) others or be "[self closing](http://codepen.io/matthewsimo/pen/grqPPv/)"

Elements have _attributes_. [Attributes](http://codepen.io/matthewsimo/pen/PNVZze?editors=1000) give an element more information and are usually made up of two parts; a _name_ and a _value_.

Doctypes; a special 'tag' that _must_ be included on the first line that instructs the browser which specification that page of HTML follows.

There are a bunch, don't bother really.. Just use `<!DOCTYPE html>` and be happy :)

### [CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started)

_Cascading Style Sheets_

Browsers use CSS to know how they should _display_ the HTML. CSS describes how the HTML should look.

In CSS, you write "[rules](http://codepen.io/matthewsimo/pen/yOZeVd?editors=1100)" that the browser should follow when presenting the content to users.

A _rule_ consists of a `selector` and a `declaration`. The declaration can be an arbitrary number of `properties` and `values`.

It's called _Cascading_ because styles literally [cascade](http://codepen.io/matthewsimo/pen/ZWwQeE).

CSS is really cool, powerful and fun. But it's also a total pain in the ass. There are lot's of details to know and sometimes browsers disagree with how something should be presented. Things are _way_ better now, but just be warned, CSS given enough time will make you swear at least once.

### [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)

_In no way related to Java_

> "Cross-platform, object-oriented dynamically typed scripting language."

Written in 10 days back in 1995 by Brendan Eich at Netscape.

AKA ECMAScript, standard maintained by TC39. Basically a room a bearded wizards deciding on what features should be added that won't entirely break the internet.

We'll learn more details later. Key take aways. It's a powerful language that you can do a lot in. It's literally everywhere; browser, servers, robots.

## Servers & Clients

Clients - another computer interested in some file or data.
Servers - a computer with a bunch of files or data people might want.

The _Client-Server model_ is a distributed application structure that partitions tasks between the providers of resources and the service requesters.


## Old School vs. New School

The web was initially all about sharing documents. It enabled users to access files on a server somewhere else that could be running an entirely different operating system or architecture.

Because of this fact, initially our web applications followed the same paradigm. Each click of an anchor tag would request an entirely seperate resource. We did this for a long time.

As our computers and infrastructure became better, we started to build more complex applications.

There is an ongoing trend to have "Single Page Applications" (AKA SPAs); which entails of loading a single HTML page that sends with it an entire JavaScript application that then handles everything. It will make use of APIs to retrieve or manipulate application data.

By not repeatedly loading an entirely new document you're able to create a much more rich and responsive experience. There are tradeoffs and you should evaluate your particular application needs.


## Libraries, Frameworks, &amp; APIs - oh my


### Libraries vs. Frameworks

A lot of these terms are fuzzy and are cause for much debate that is really just a giant waste of time.

But, just to touch on them, so there is some sort of exposer - here is my take.

Library - A piece of code that provides a very particular feature or piece of functionality. A good example is [moment.js](http://momentjs.com/).
Framework - A bunch of code that provides a lot of features and functionality while also making decisions for you on how your application should be structures, written or otherwise be built. I'd throw things like [Ember](http://emberjs.com/) or [Angular](https://angularjs.org/) in this category.

### APIs

_Application Programming Interface_

You can think of this as exposing certain features or components of your application to the outside world.

Let's imagine you build an application that manages calendar events. If you wanted another application to be able to create calendar events for users, you would provide an API that application could "consume".

There are many approaches to this particular problem. Right now, the winning methodology on the web is to communicate via `JSON` over a `RESTful` interface.

`REST` stands for "Representational state transfer"; the nice thing here is there are the same HTTP verbs  we're familiar with. (GET, POST, PUT, DELETE)




---
sidebar_position: 13
---

import Speaker from '@site/src/components/Speaker';

# Pair programming with AI

<Speaker
  name='Josh Puetz'
  position="Software Engineer - Donut"
  imageUrl='https://sessionize.com/image/e41b-400o400o2-7y95Y1ivfcG7kGrdSjx6GU.jpg'
/>

[Schedule Entry](https://railsconf2023.sessionize.com/session/452275)

## Attendees
* Reed

| Relvancy    | Interesting |
| ----------- | ----------- |
| 9           | 3           |

## Notes

### ChatGPT

Large Language Model (LLM)
Tokens
* Cat
* Dog
* Awake
* asleep
Relationship between tokens
* Cat
* Objects: (cat) -> (dog)
* Language: (cat) -> (katze)
* Concepts: (cat is awake) -> (cat is sleeping)
* More complicated concepts: (cat is immature) -> (cat is mature)

Atom model is like a heatmap of relationship between position of electron and proton
LLM is like the atom model for probability space of relationships between tokens
Generative Pre-trained Transformer (GPT)
A generative model is a function that can take a structured relationship of tokens and output a structured relationship of tokens.
Exchanges with GhatGPT:

Me: I just got a new dog!

Me: I just got a new dog!
ChatGPT: Congratulations!
Me: what’s a good name?

Entire conversation is appended to each interaction.

What is it good for?
* Planning
* Code generation
* Code explanation

Explaining code: FizzBuzz
* Gave line-by-line explanation

Refactoring code: FizzBuzz in one line
* Wrote a long line that went off the screen

Writing tests: wrote a passable RSpec test.
Limitations:
* Incorrect code - no glaring errors
* Unoptimized code - not really efficient
* Expensive

### Github Copilot

Tokens are language syntax. Makes code suggestions. It can suggest an entire class if you prompt it with class Post. Doesn’t write great tests on its own. It needs some prompting.
Writing comments is hit-or-miss.
Limitations are similar to ChatGPT.
* Smaller suggestion scope than ChatGPT.
* Copilot generally only tries to complete the line you are writing.
* Limited IDEs
* Limited languages
* GitHub lock-in
* Users accepted on average 26% of all completions shown by Copilot

### Ethical and Legal Concerns

Where do they get training data?
* Commoncrawl.org data
* WebText2
* Books1 and Books2 book data sets
* Wikipedia
* 159 GB of Python code from 54 million GitHub repos
* You (and your input)

Training data sources are opaque. StackOverflow banned submissions. Bias.
Duty to disclose. Liability. IP. Licensing.
Best Practices
* Review code for errors
* Understand how the code works
* Be aware of legal and ethical concerns
* Disclose your usage
* Opt out of usage

References:
* https://www.jonstokes.com/p/chatgpt-explained-a-guide-for-normies
* https://martinfowler.com/articles/2023-chatgpt-xu-hao.html
* https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/

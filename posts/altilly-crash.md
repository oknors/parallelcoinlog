---
title: Altilly crash
pubdate: 2021-12-27
---

After Cryptopia crashed, we reached out to Altilly, a dutch based exchange, who were offering to list coins that had lost their trading venue. Altilly has recently halted trading and taken down the website, and are reporting that there appeared to be a breach in the server security that attacked the firmware, and the attacker gained administrative access. And then they had problems connecting to it.

As you maybe can imagine, it's been a bit of a blow to morale in the project.

But as they say, necessity is the mother of invention, and so I personally have been sitting and thinking a lot about what to do. Exploring options like running a DEX bridge so the coin can be exchanged. After wading through a forest of the existing options I am not greatly confident in this.

It's my opinion that we have our priorities upside down. We need the product, of course, which I am in late stages of alpha developing, yes, pretty much alone. But equally important as a product is that people know about it.

What we need is engagement. So, while I am maybe not the best marketing writer, I have plenty of things of a somewhat more technical nature that I can talk about regularly. I had been, up to now, keeping a lot of that in the dev room of the parallelcoin discord: https://discord.gg/UBtpFXgcwy and what I will do today is take those as source material and write a post here every day so you all don't forget we are still alive here and about to pop out a release.

If you are good at writing persuasive text, or clever memes, and interested in seeing this project succeed, just drop us a message and we will discuss. I am the most authoritative on the technical/design side of the servers and wallet application, I would be very happy to successfully convey the full concept so that it can be worked into some marketing strategy. In the meantime, I will also try to get some of the other team to engage.

We do have a somewhat difficult issue in that I and trax0r are the only two in the team with good english, the others are mostly serbians whose second languages are german or russian or something like this rather than english. Getting more english speaking people working the social networks with us would help a lot.

We think we have a pretty sweet debut into the marketplace coming soon, and some decent, but not gimmicky features coming that should be interesting to people - CPU mining, most especially. I know that many attempts have been made at various times, such as the Cryptonight version 2 hash function, to make a truly asic resistant proof of work function, but the rise in computational complexity of these functions does not even start to approach what is required to prevent the production of the coins to be tied to a very small market of specialist hardware. I expect Monero's work function has again been accelerated into silicon, though I haven't checked if this is the case.

The reason why I am sure that will never happen to ParallelCoin's new DivHash function is that this function depends on Algorithm D, aka Long Division. Nobody makes faster dividers than the 7mm silicon in current generation AMD and Intel processors. Nobody who makes ASICs can even dream of coming close to the throughput of desktop/laptop CPU dividers.

The long division in the hash function does not serve in the stead of standard bit twiddling as used in regular hash functions, it is not for security. It is to prevent the development of silicon that can do it faster than a CPU. Taking a given CPU design and stripping it back to provide only minimal logic and retaining the divider, perhaps putting two on the die where would normally be one, these are potentially viable ways of building a special chip for the task, but the chances that the cost of developing such a thing would be profitable are pretty low compared to what users will likely discover are the best chips to work with.

Proof of work costs are not just in the time, in the frequency of valid solutions, they are also in power. So, despite having half the bits in its dividers, ARM processors may end up being better because of their long division units being highly power efficient, compensating sufficiently for the reduction of output with a reduction of power requirements.

So, anyhow, stay tuned for more technical-oriented articles from me especially about the various things that are going into the new wallet and server software. Hopefully less salty and more comical contributors will show up. There was some memes being made, there should be lots of memes. We are building a payment network but we are courting the marketplace, as no amount of superior or interesting technical features replaces the enthusiasm of fans.

What we do have, however, is a story. Quite the story indeed. Since I managed to accumulate some 390 readers for my other blog The Stalker Chronicles, over the last 4 years, I suppose there could be a worse writer than me... but the main thing is to be seen.

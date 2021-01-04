---
title: Proof of work
pubdate: 2020-12-27
---

It is not at all a simplification to say that proof of work cryptocurrency mining is pretty much basically the same as people rolling dice over and over until they get some specific, uncommon pattern, for dice it could be to roll more than 20 snake eyes of a given number in a row, at a given difficulty (which is directly proportional to the number of players).

Of course the precise details are not quite so simple as this but this is the principle behind it. The details are in the proof of having done this, which for cryptocurrency mining, means the hash of the block header is lower than the current target (bigger hashes are far more frequent).

This is a mathematical phenomena known as a 'poisson point process'. What this means is that block solutions have a bell-curve type distribution compared to the block target. They can be early, late, or on time, in proportion with the height of the curve.

It is impossible to predict, so it provides a very robust mechanism for limiting the rate of blocks discovered by the network, which then controls the amount of currency issued on average over a long term.

In the first picture what you can see is a series of sine waves generated from this desmos page: https://www.desmos.com/calculator/yhznlzkq8w - there is 9, with 5 different colors, each one based on the first 9 prime numbers, 2, 3, 5, 7, 11, 13, 17, 19, 23.

This base number is multiplied by 53, which produces a long term average of 35.36 seconds per block.

The blue curve at the top shows the probability of block discovery at any given moment over the first hour or so of the operation of the new protocol.

Second picture shows a more birds' eye view where you can see more clearly how this probability curve never repeats. It does repeat, in about 250 years. This graph shows the same data at the wider zoom: https://www.desmos.com/calculator/zzmr6iimky

So, having illustrated the basic principles, I will explain the rationale for it.

As far as I know, all proof of work, Nakamoto consensus based chains like Bitcoin and our ParallelCoin have not diverged from the standard of some number of seconds between blocks. Bitcoin is 600 (10 minutes) Litecoin is 300, as is ParallelCoin Classic (as in, the first generation launched in early 2014), some are shorter, 15 seconds, 30 seconds, and so on.

The naive logic behind this is that on a long enough timeline, the probability is that the number of tokens issued will average out to that target value, and thus limit the supply of tokens to a prescribed target, within some margin of variance naturally created by such a random process.

What we are doing with ParallelCoin flips this on its head.

In World War 2, it was discovered by the air force guys running the B52 bombers that the mechanically powered calculators they used appeared not to function well on the ground compared to while in flight. This was found to be caused by the vibrations of the aircraft's engines, and a new concept in mathematics was discovered: Dithering

Dithering is where you intentionally slightly randomise something in order to give it more precision without increasing the precision (and complexity) of the phenomena. This technique is used every day in so many technologies now, though this is not so well known generally. Modern IPS TFT LCD displays, as found in the majority of current mobile phones in production, apply dithering transformations to improve the colour resolution. It's something you are more likely to notice when you are sleep deprived, the screen can be visibly seen to be in constant motion, even when the image is static, little dots appear like the noise of an old analog television.

The theory is that since block times are not predictable outside of their natural bell-shaped propability distribution, why make the schedule regular either? It only has to be deterministic. For this, ParallelCoin Plan 9 protocol simply overlays the 9 first prime numbers, whose pattern is predictable, but does not repeat for what amounts to about 250 years with the average block time target of 35.36 seconds.

As the curve fairly clearly illustrates, the targets fluctuate, sometimes the curve is near the top (improbable) and sometimes the curve dwells near the bottom (likely). In practice this can be seen in the intervals generated while running a testnet.

At first, before the chain has data to derive the difficulty factor for adjusting to reach that average 35.36 seconds long term average, it will be quite fast. From observation of the testnets, somewhere between 40-60 blocks before it will pick values close enough to hit the target of 100 blocks per hour.

It always overshoots and undershoots when hash power changes, compensating for a string of fast blocks with a string of long blocks later of equal proportion, and vice versa. There is no way around this, as the computer cannot see the future, it can only see history, and because all nodes share history, they all come to the same conclusion.

The response to the changes in the ParallelCoin Classic protocol was hard limited at 30% per block, which combined with the ever escalating amount of ASICs that can mine bitcoin and litecoin (the two algorithms in PCC), it pushes up 30% every time there is an increase beyond a certain threshold, but cannot adjust back more than 30% so if over the long term, the mass of hashpower continues to grow, the chain will get slower and slower. At times this has been extreme, with 6-12 hours sometimes between blocks.

This has been pretty bad for its adoption, of course, for the first year the most frequently asked question in the discord was 'my wallet is stuck', and the reason is the interface was built for bitcoin, which very very rarely has more than 2 hours between blocks, so when the number goes over 2 hours, the wallet reports that the chain is stuck. And it is stuck.

In distributed systems jargon, this is called a 'Liveness Failure'. It means that the database is unable to progress with processing transactions for a time. This is a problem that is mild in severity, however, to how it can happen with blockchains like Cosmos, Polkadot and other Practical Byzantine Fault Tolerant database replication protocol based blockchains, they have a small but not zero possibility of failing to finalise a block and becoming permanently stuck, known in the colloquial as 'The Stoppening'.

When I came into this project, I was not a bitcoiner, I wasn't sure that any of the existing protocols were practical replacements for centralised distributed database systems, or semi-decentralised ones like the networks that connect branches of money exchange/payment clearance systems like Western Union or Visa. I simply knew that everything up to now was usable, but not even remotely capable of serving as many customers. The PBFT based chains are much faster and have much higher throughput, but at a peak of around 2500 transactions per second, most blockchains could never scale to the 25000+ transactions per second performed by Visa.

Before I digress too much, this is why I have set the target at 100 per hour. In theory, this means that parallelcoin should be able to manage at least 15x as many transactions at peak capacity.

The shorter block time also means a larger number of miners have more chance of earning regular income especially in the bottom 25% of hash power capacity (solo and small farms).

Further, in order to match the reward with the time for each parallel block interval, shorter blocks have exactly proportional rewards compared to the longer blocks. In theory, once the network hashpower passes a certain threshold, miners will be able to specialise in the higher or lower reward blocks, with their proportionally lower and higher frequency, allowing the profitable mining of this token in a much larger pool, and thus more decentralised.

Today I am covering the subject of the difficulty adjustment and block interval timing. I will discuss other of the innovative features I have built into the ParallelCoin Plan 9 Protocol, the work function, and the zero-configuration multicast mining protocol, the plans for adding finality in order to mesh with PBFT and PoS/DPoS/LPoS based chains, and the use of the chain for notarising data posted on IPFS that secures the various planned social network communication systems that we want to build after the hard fork.

And for those with good skills in pedagogy (teaching), you are most welcome to expand upon my explanations, as I am not a professional mathematician or cryptographer, I am a programmer, and those are two areas of mathematics I have self-taught myself to be able to build this system.

It came to my attention yesterday finally that almost nobody except me understands what I have done. Even the project founder is not entirely clear on it. Before we are going to get any attention, we need undertanding, so, to whoever you are reading this, thankyou for bearing with me in my sometimes rambly, long texts, not quite academic, but definitely not naive or misinformative. Not intentionally. My stubborn curiosity makes me unfit for modern, Prussian based education systems. My knowledge is proven by my code so I don't care about diplomas that so many people make forgeries of, on top of the excessive issuance of universities. I may not be able to derive or integrate polynomials off the top of my head, but a few hours reading a math text in front of my code editor I can apply what I learn immediately... which is my super power 😃

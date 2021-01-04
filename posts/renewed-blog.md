---
title: What is the biggest problem with the cryptocurrency market?
pubdate: 2021-01-02
---
Loki here, lead blockchain developer

Exchange hacks? Can anyone suggest anything more irritating or devastating? I personally have seen at least 3000+ euros go *poof* into these things.

I have a solution, which I am calling Supervised Custody Accounts, exactly to stop exchanges becoming lucrative targets as banks are.

Here's my solution:

1. Wallets are just interfaces for querying a viewpoint based on control of secret keys.

2. Exchanges are custodians. They acquire full control of your funds. If they lose them, or steal them, you are up against you give me that juris-my-fuckin-diction crap, you can cram it up your ass, when it comes to getting anything back. Just forget it.

3. Exchanges, as a category of businesses, dealing in cryptocurrency, have very very bad reputation. They are quite certifiably, unqualifiably described as 'Untrusted'.

4. For untrusted parties, you can create a special type of account using standard Bitcoin style multisignature, where the rules of the game are:
   a. Only the custodian can initiate transactions, other than an expiration time (block height) set at the beginning of the contract, at which time the funds will bounce back to where they came from.
   b. If the custodian attempts a withdrawal to a given address, before this transaction is valid, you, the user, have to co-sign it. If this transaction remains un-co-signed for some period of time, it returns back to where it came from automatically.

   The only thing aside from defining the rules of the game is implementing interfaces that make this easy. For this, there is two items:

1. Multi-account wallet interface that speaks only SCA. It accepts whatever arbitrary identifier key for queries from the exchange, who can easily then write queries to move the coins that they deposited to this special account.

2. User wallet interface that watches for this type of transaction related to the user's account keys, where the user will countersign the transaction.
   Last thing, the account also requires consolidation, so when you buy new tokens, the seller (via the exchange) uses the other user's SCA to finalise the change of account. Whatever the exchange's database says, is fine, for day to day operations, but this governs the payment and change of ownership with the guarantees of a proof of work blockchain, which is required before a user can withdraw the new deposited funds, even if the exchange's ledger calls it final.
   How far an exchange can stretch finalization is their business, this puts the power squarely in the holder's hands and the adoption of this by exchanges is a very nice gold plating, in these times.

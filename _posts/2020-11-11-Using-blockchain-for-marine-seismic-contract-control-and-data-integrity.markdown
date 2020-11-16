---
layout: post
comments: false
title:  "Using blockchain for marine seismic contract control and data integrity"
date:   2020-11-12 11:26:32 +0100
tags: marine blockchain seismic
categories: jekyll update
---
# Introduction
Marine seismic acquisition collects data which are then used by their clients, offshore oil and gas producers, to assess the location and volume of hydrocarbon reserves in the subsurface. The relationship with the client is generally transactional and of a limited period of 3-12 months. The clients are numerous but maintain control of the procurement process through tenders leading to intense price competition. The contracts are relatively simple and based on a limited number of models; the one used in this paper will be a “dollars per shot” model. Others can be more complex but could still fit the methods described below. The model selected activates every time a seismic shot is fired in a specific location within certain parameters. The seismic survey operator can then charge the client a dollar rate per shot once the shot is approved. The costs are aggregated over a month and invoiced; generally on 30 day payment terms. 

This paper will look at how blockchain technology and smart contracts could speed up the process of data acceptance and payment. It will show how the innovative use of blockchain in the industry could provide some differentiation in a competitive industry.  It will also show how the solution proposed could be used, when looking through the lens of a value network, to create a platform that will set industry standards. A patent application has been filed related to this paper.  

# Blockchain
Blockchain is a “distributed database of records or public ledger of all transactions or digital events that have been executed and shared among participating parties” (Crosby et al, 2018). It is distinct from operators using blockchain technology such as BitCoin and specifically distinct from smart contracts. Blockchain was introduced as a concept by Nakamoto (2008) as an integral part of bitcoin where it serves as the public ledger recording all transactions on the cryptocurrency network. The basic principle of blockchain methodology is that the distributed ledger acts in the same way as a witness to a contract would. Because of the large number of witnesses in the network it is difficult for anyone to create a false entry in the ledger. 

# Smart Contracts
Smart contracts are contracts that operate as a layer on top of a blockchain. They enable transactions between untrusted parties. Specifically “smart contracts [are] self-executing agreements based on blockchain technology [which] have the capacity to create trust in what [is termed] no-trust contracting environments” (Eenmaa-Dimitrieva and Schmidt-Kessen, 2019).

For example smart contracts have been suggested as a solution to royalty payments in the music industry. Each digital track would have a smart contract enabled within it so that when the file is played a payment is made in a digital currency by the listener to the distributor, license holder, artist and other stakeholders in the correct proportions immediately (O'Dair et al. 2016). This shows how blockchain adds to the efficiency of the market by enabling cash flow and reducing administrative costs.

Another example is in the healthcare industry where blockchain and smart contracts are used, in combination with medical sensors, connected to the network, to trigger certain services or send notifications to relevant parties. This system is non-monetary but facilitates more secure communications. This is especially important if patients are not in hospital and being treated or monitored at home. Without blockchain and smart contracts data would have to be sent insecurely and could be disrupted (Griggs et al, 2018). This is a clear example of the data security and continuity benefits of using blockchain and smart contracts. 

The recommendation in this paper will take both these sets of advantages and put them to work for marine seismic acquisition.

# Status Quo
For this paper the focus will be a on a simple pay per shot contract as described previously. There are other contractual possibilities but this is the simplest to describe. The following process is simplified and does not consider the full range of quality control processes but the key elements are in place:



# A Need For Change?
The process described above is quite manual and involves the transfer of files and metadata between different internal and external stakeholders, several different file formats and operating systems. This generally done with a combination of email, FTP and physical drives and data tapes. The weaknesses in the links are often exposed. There is potential for data to be mishandled in the process of issuing the preplot in the initial phases. This is because the files often are sent over email and other media that lacks proper version control. The files are small (a few Mb) and could be added directly to the blockchain to ensure version control. 

At each of these steps there is a delay while data and procedures are verified and cross checked. Again this is quite a manual process in collaboration with the onboard personal and client representatives. This can create situations where contract terms are interpreted slightly differently by each side or misunderstood. The pre-approved procedures, confirmed at contract signing, could be signed off by individuals on the blockchain to verify they have completed quality control against an auditable process. The process could even be automated further by processing the metadata of file to confirm acceptance. For example if the data were within a set of certain parameters it could be signed off automatically by the smart contract.

As data processing techniques improve clients often return to historical data to reassess it. This often raise questions about data that is in storage and records are inadequate to answer specific questions from the client. By introducing blockchain the verification process could be stored indefinitely and would be easier to access. This would provide added value to the client because the data integrity verifiable even in the long term.

The introduction of blockchain, despite hype around the technology, could prove to be a leadership position and a significant differentiator. Further the industry is increasingly accepting of digital tools and it is likely that client organizations are considering options for blockchain and other digital tools to improve their processes. This has been seen at DNV-GL with the introduction of Veracity and Mærsk with TradeLens.

# A New Process
As discussed above there are significant opportunities to increase efficiency of operation and cash flow, increase differentiation and increase the confidence in the final data. A new process is now defined:


A solution would be to implement the steps above as part of a blockchain. By using blockchain technology there would be a clearer and auditable data trail. The chain could include links to other databases and checksums to monitor changes to external files. It is not a requirement to keep the large files that are the result of these processes in the blockchain itself. This would cause excessive time and processing. 

The output data from the offshore acquisition would not need to be put on the blockchain but a link to the data location and a checksum or similar could be placed in the blockchain. This concept is referred to by Crosby (2016) as sharding. The reason for doing this is to prevent “bloating” of the chain. Bloating occurs because files stored on the chain would have to be replicated by every ledger in the network and it would cause the network to quickly become overloaded in cross referencing large files between each individual ledger to ensure consistency. 

Once data is in the blockchain a survey would be executed using a smart contract. In the case of a shot rate the completed shots in the project management database, such as Multiseis, could be loaded into the smart contract using an API. Multiseis already has a range of APIs that could be interfaced to enable this (Multiseis, 2019). Each time the shot is accepted by the client the smart contract would aggregate and then pay out at the set time. This would decrease the handling time and administration on the client side and increase time to cash flow on the customer side. It could remove the need for onboard QC as the process would be very transparent and if the QC steps are performed, as audited then trust could be increased dramatically. Adding a layer to the data flow and making this process a blockchain would enable transparency and quality control. 

Further benefits would be the knowledge that the items referenced in the blockchain are the latest versions. This should also include other metadata such as the coordinate reference system, an item that frequently causes confusion at an operational level.

# Conclusions
The solution presented could have significant impact on the industry and further implementation could be outside of the company and possibly becoming an industry standard. The industry bodies for data standards and regulation such as EAGE or IOGP. The blockchain idea could be taken up by them and licensed to their members. This would use an existing network to spread the idea and facilitate development. Further the idea could be licensed and extended to third party contractors so that payment time across the network is reduced and further efficiency savings realized. 

The ideas around blockchain are developing fast. This is an opportunity for the industry to take the initiative and develop a system that improves payments across the ecosystem. It could be extended to third parties contractors so that payment time across the network is reduced lowering costs, enabling faster transactions and facilitating automatic reconciliation of contracts. 

As mentioned there are several models for payment for the data collected. One very different model is MultiClient. This is when the seismic operator is not contracted by the client but conducts the operation on their own risk and then sells the data to client directly. This type of contract requires significant levels of trust in the acquisition organisation by the company buying the data. In this situation using blockchain would provide increased trust in the data collected as the whole process could be verified accurately post-acquisition.

There are obviously security concerns, summarised by Li (2017), but the size of the network in this case is limited and the specific nature of the use case itself mitigates many of the known security issues.  Another risk is “to adopt it in the wake of enthusiasm, without objectively judging its actual added value is rather high” (Gatteschi et al, 2018). However the potential to assume a dominant market position, as in the case of Maersk and IBM in the shipping industry (Maersk 2019), is too great to be ignored.

# References
Crosby, M., Pattanayak, P., Verma, S., & Kalyanaraman, V. (2016). Blockchain technology: Beyond bitcoin. Applied Innovation, 2(6-10), 71.

Eenmaa-Dimitrieva, & Schmidt-Kessen. (2019). Creating markets in no-trust environments: The law and economics of smart contracts. Computer Law & Security Review: The International Journal of Technology Law and Practice, 35(1), 69-88.

Gatteschi, V., Lamberti, F., Demartini, C., Pranteda, C., & Santamaría, V. (2018). Blockchain and smart contracts for insurance: Is the technology mature enough? Future Internet, 10(2), 20. 

Griggs, K., Ossipova, N., Kohlios, O., Baccarini, C., Howson, P., & Hayajneh, A. (2018). Healthcare Blockchain System Using Smart Contracts for Secure Automated Remote Patient Monitoring. Journal of Medical Systems, 42(7), 1-7. 

Macrinici, Cartofeanu, & Gao. (2018). Smart contract applications within blockchain technology: A systematic mapping study. Telematics and Informatics, 35(8), 2337-2354. 

Multiseis. https://www.multiseis.com/. Accessed 01.08.2019.

Li, Jiang, Chen, Luo, and Wen. "A Survey on the Security of Blockchain Systems." Future Generation Computer Systems (2017): Future Generation Computer Systems.

Maersk, (2019). Trade Lens: Press Release. https://www.maersk.com/news/articles/2019/07/02/hapag-lloyd-and-ocean-network-express-join-tradelens

Nakamoto, S. (2008). Bitcoin: A peer-to-peer electronic cash system. https://bitcoin.org/bitcoin.pdf


O'Dair, M., Beaven, Z., Neilson, D., Osborne, R., & Pacifico, P. (2016). Music on the Blockchain. 

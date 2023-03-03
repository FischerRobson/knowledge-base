# Kafka

Created by Linkedin, open-source mainly maintened by Confluent, IBM and Cloudera.

Distribuited, resilient archtecture, fault tolerant.

Horizontal scalability:
  - can scale to 100s of broker;
  - can scale to milions of messages per second;

High performance.

Use cases:
- Messaging system;
- Activity tracking;
- Gather metrics from many different locations;
- Application logs gathering;
- Stream processing;
- De-coupling system dependencies;
- Micro-services pub/sub;

![clipboard.png](inkdrop://file:wEJTXq37-)

If you have 4 Source systems and 6 Target systems, you need to create 24 integrations,
each one with its own dificulties: 
 - Protocol
 - Data format
 - Data schema
 - Increase system load

With Kafka:

![clipboard.png](inkdrop://file:eB1caECIn)

## Topics
A particular stream of data, like a table in a database, you can have as many topics as you want, a topic is identified by its name,
any kind of message format, the sequence of messages is called DATA STREAM. You cannot query topics, instead, use Producers to send data 
and Consumers to read data

## Partitions
Topics are split in partitions, ordered in each partition.

Topics are immutable, once data is written to a partition, it cannot be changed.

Data is kept only for a limited time (default is one week), offset only have a meaning for a specific partition and are not re-used even if previous 
messages have been deleted. Order is guaranteed only within a partition and not across, data is assigned randomly to a partition.

![clipboard.png](inkdrop://file:Hglb_63Jr)
## Producers
Writes data to topics, and know to which partitin to write to.
In case of broker failures, producers will automatically recover.
Producers can choose to send a key with the message (string, number, binary), if key is null, data is sent round robin,
if key is not null, then all messages for that key will always got to the same partition (typically sent if you need 
message ordering for a specif field).

## Message

![clipboard.png](inkdrop://file:ufGHIXd3B)

## Serializer
Turn data into bytes, Kafka only accepts bytes as an input from producers and send bytes out as an output to consumers:

![clipboard.png](inkdrop://file:yj0xERFE-)

## Consumers
Consumes data from a topic - pull model, automatically knows which broker to read from, in case of failure, consumers know 
how to recover, data is read in order from low to high offset within each partition.


![clipboard.png](inkdrop://file:Vu9gVeiD1)

## Deserialization

Transform bytes in objects/data, used in key and value of the message;

![clipboard.png](inkdrop://file:h_RziX6kR)

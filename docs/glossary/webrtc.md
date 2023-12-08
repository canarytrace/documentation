---
sidebar_position: 2
description: Description of the WebRTC metrics
title: WebRTC metrics
tags:
  - webRTC
  - glossary
---

:::info Web performance

This page describe WebRTC metrics and their meaning. WebRTC metrics are part of the [RUM Client](../rum/rumClient#webrtc) metrics.

:::

### Video

| Metric | Description | Recommendation |
| ------ | ----------- | -------------- |
| `inbound-rtp.packetsLost` | Number of packets lost since the start of the stream. | Ideally zero. |
| `inbound-rtp.jitter` | Measurement of packet delivery time variation, which can affect video quality. | Up to 30ms. |
| `inbound-rtp.frameHeight` | Height (in pixels) of the last decoded video. | |
| `inbound-rtp.frameWidth` | Width (in pixels) of the last decoded video. | |
| `inbound-rtp.framesPerSecond` | Number of frames per second (FPS) of the last decoded video. | 30 and above. |
| `inbound-rtp.codecId` | Codec identifier used for video compression in encoding or decoding media. | |
| `inbound-rtp.bytesReceived` | Total number of bytes received since the beginning of transmission. | Consistent and high = indicates smooth data transmission. |
| `outbound-rtp.frameHeight` | Height (in pixels) of the last encoded video. | |
| `outbound-rtp.frameWidth` | Width (in pixels) of the last encoded video. | |
| `outbound-rtp.framesEncoded` | Total number of frames that have been encoded for sending. | A consistently high `framesEncoded` value means that video encoding is proceeding smoothly and without delay. A low or significantly fluctuating value may indicate problems with video encoding, which could be caused by high CPU load, poor connection, or issues with the quality of the source video. |
| `outbound-rtp.framesPerSecond` | Number of frames per second (FPS) of the last encoded video for sending. | Consistently high, 30 and above. |
| `outbound-rtp.codecId` | Codec identifier used for video compression in encoding or decoding media. | |
| `outbound-rtp.bytesSent` | Total number of bytes sent since the beginning of transmission. | Consistently high. Low or significantly fluctuating values may indicate data sending issues. |
| `outbound-rtp.packetsSent` | Total number of packets sent since the beginning of transmission. | Consistently high. Low or significantly fluctuating values may indicate data sending issues. |
| `outbound-rtp.qpSum` | Sum of Quantization Parameters (QP) for all encoded frames since the last report. | A consistently high `qpSum` may indicate that the video is heavily compressed and may have lower quality. A low value may indicate higher quality video but may also require more bandwidth for sending. |
| `outbound-rtp.qualityLimitationDurations.bandwidth` | Total time (in milliseconds) during which the quality of the sent video was limited due to lack of bandwidth. | A high `qualityLimitationDurations.bandwidth` value means that bandwidth was often limited and could restrict the quality of the sent video. |
| `outbound-rtp.qualityLimitationDurations.cpu` | Total time (in milliseconds) during which the quality of the sent video was limited due to high CPU load. | A high `qualityLimitationDurations.cpu` value means that CPU load was often high and could restrict the quality of the sent video. |
| `outbound-rtp.qualityLimitationDurations.none` | Total time (in milliseconds) during which the quality of the sent video was not limited by any factors. | A high `qualityLimitationDurations.none` value means that video transmission was smooth and without quality limitations. |
| `outbound-rtp.qualityLimitationDurations.other` | Total time (in milliseconds) during which the quality of the sent video was limited by factors other than bandwidth or CPU load. | A high `qualityLimitationDurations.other` value means there were other factors limiting the quality of the sent video. |
| `remote-inbound-rtp.codecId` | Codec identifier used for video compression in encoding or decoding media. | |
| `remote-inbound-rtp.jitter` | Degree of jitter (variability in delay) of received RTP packets. | A low `jitter` value means that the delay of received packets is consistent and the network is stable. |
| `remote-inbound-rtp.packetsLost` | Total number of RTP packets lost since the beginning of transmission. | A low `packetsLost` value means that the network is reliable and packet loss is minimal. |
| `remote-inbound-rtp.roundTripTime` | Indicates the time (in seconds) it takes for a packet to travel from the sender to the receiver and back. | A low `roundTripTime` value means that the network is reliable and packet loss is minimal. |



### Audio

| Metric | Description | Recommendation |
| ------ | ----------- | -------------- |
| `inbound-rtp.jitter` | Measure of jitter (variability in delay) of received RTP packets. | A low `jitter` value indicates that the delay of received packets is consistent, and the network is stable. |
| `inbound-rtp.packetsLost` | Total number of RTP packets lost since the start of the transmission. | A low `packetsLost` value indicates that the network is reliable, and packet loss is minimal. |
| `inbound-rtp.concealedSamples` | Number of audio samples that were concealed due to packet loss. | A low `concealedSamples` value indicates minimal packet loss and good audio quality. |
| `inbound-rtp.concealmentEvents` | Number of concealment events that occurred due to packet loss. | A low `concealmentEvents` value indicates minimal packet loss and good audio or video quality. |
| `inbound-rtp.jitterBufferDelay` | Total time (in seconds) all audio and video samples spent in the jitter buffer. | A low `jitterBufferDelay` value means minimal delay caused by the jitter buffer. |
| `inbound-rtp.totalAudioEnergy` | Total energy of all received audio samples. Provides useful information about the loudness of received sound. | A low value may indicate that the received sound is quiet or that there was a loss of audio data. |
| `inbound-rtp.totalSamplesDuration` | Total time (in seconds) of all received audio samples. Provides useful information about the duration of received sound. | If the value is lower than the expected transmission time, it may indicate a loss of audio data. |
| `outbound-rtp.bytesSent` | Total number of bytes sent since the beginning of the transmission. Provides useful information about the amount of data sent over the network. | If the value is lower than the expected number of bytes, it may indicate issues with data transmission. |
| `outbound-rtp.packetsSent` | Total number of RTP packets sent since the beginning of the transmission. Provides useful information about the amount of data sent over the network. | If the value is lower than the expected number of packets, it may indicate issues with data transmission. |
| `outbound-rtp.nackCount` | Number of NACK messages sent since the beginning of the transmission. NACK (Negative Acknowledgement) messages are used in RTP (Real-time Transport Protocol) to signal packet loss. Provides useful information about the reliability of the network. | A high value may indicate a high rate of packet loss, which can cause issues with the quality of the transmission. |
| `outbound-rtp.retransmittedBytesSent` | Number of bytes that have been re-sent since the beginning of the transmission. Provides useful information about the amount of data re-sent over the network. | A high value may indicate a high rate of packet loss, which can cause issues with the quality of the transmission. |
| `outbound-rtp.retransmittedPacketsSent` | Total number of RTP packets that have been re-sent since the beginning of the transmission. Provides useful information about the number of packets re-sent over the network. | A high value may indicate a high rate of packet loss, which can cause issues with the quality of the transmission. |
| `outbound-rtp.totalPacketSendDelay` | Total delay (in seconds) of all sent packets since the beginning of the transmission. Provides useful information about the overall delay in sending packets. | A high value may indicate significant delay in sending packets, which can cause issues with the quality of the transmission. |
| `outbound-rtp.active` | A property in the WebRTC statistics report indicating whether an RTP stream is currently being sent. | If the value is false, it means that the RTP stream is not currently being sent. |
| `remote-inbound-rtp.jitter` | Measure of jitter (variability in delay) of received RTP packets. Provides useful information about the quality of the received stream. | A high jitter rate may indicate significant delay in receiving packets, which can cause issues with the quality of the transmission. |
| `remote-inbound-rtp.packetsLost` | Total number of lost RTP packets. Provides useful information about the reliability of the received stream. | A high number of lost packets may indicate issues with the quality of the transmission. |
| `remote-inbound-rtp.fractionLost` | Proportion of lost RTP packets compared to the total number of expected packets. Provides useful information about the reliability of the received stream. | A high proportion of lost packets may indicate issues with the quality of the transmission. |
| `remote-inbound-rtp.roundTripTime` | Time required for an RTP packet to travel from the sender to the receiver and back. Provides useful information about network latency. | A high round-trip time value may indicate significant
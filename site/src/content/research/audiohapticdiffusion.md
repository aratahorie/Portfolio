---
title: "AudioHapticDiffusion"
subtitle: "Synchronized Audio-Haptic Generation via Shared Latent Space"
date: "2026.07"
category: "Research"
image: "/images/research/audiohapticdiffusion.png"
citations:
  - "Kotani, A., & Horie, A. (2026). AudioHapticDiffusion: Synchronized Audio-Haptic Generation via Shared Latent Space. In: EuroHaptics 2026. LNCS, vol 16593, pp. 151–160. Springer. https://doi.org/10.1007/978-3-032-32230-2_12 (Co-first author)"
collaborators:
  - "commissure Inc."
links:
  - label: "Springer"
    url: "https://doi.org/10.1007/978-3-032-32230-2_12"
  - label: "PDF"
    url: "/papers/audiohapticdiffusion.pdf"
---

This study proposes a dual-branch latent diffusion model that simultaneously generates sound effects and a single-channel vibrotactile waveform (for wideband actuators in handheld/wearable devices) from text prompts. By sharing the latent space of a pretrained audio generation model, the method inherently ensures temporal synchronization between audio and vibration.

The audio branch uses a frozen diffusion model while the vibration branch employs a Transformer-CNN decoder, further refined with Direct Preference Optimization (DPO). Evaluation with participants demonstrated that the proposed method achieves performance equal to or better than rule-based audio-to-vibration transformations (e.g., low-pass filtering, envelope modulation), with notably lower distraction scores.

export interface ProjectContent {
  description: string;
  descriptionJa?: string;
  citations: string[];
  awards?: string[];
  collaborators?: string[];
  links?: { label: string; url: string }[];
}

export const projectContent: Record<string, ProjectContent> = {
  "embodycraft": {
    description: "We explore how haptic embodied experiences, combined with traditional craft practice, can create new forms of reflective learning. By integrating wearable haptic devices into the pottery-throwing process, we investigate how augmented tactile feedback enables practitioners to develop deeper body awareness and refine their craft skills.",
    citations: [
      "ACM Conference on Human Factors in Computing Systems 2025, LBW presentation",
      "IEEE World Haptics Conference 2025, Presentation & Demonstration",
    ],
    awards: ["The 29th VRSJ Conference, Young Researcher Award"],
    collaborators: ["Keio Media Design (Embodied Media)", "NITech Haptics Lab", "ikutouen, Inc.", "commissure Inc."],
    links: [
      { label: "CHI 2025 LBW", url: "https://dl.acm.org/doi/10.1145/3706599.3720241" },
    ],
  },
  "boiling-mind": {
    description: "In dance performances, choreography, music and lighting are combined to convey meaning to the audience. However, this communication typically relies on visual and auditory stimuli alone. Through co-design activities with 5 professional contemporary dancers, we crafted an interdisciplinary combination of choreography and haptics. In total, 128 audience members watched one of three live performances while wearing custom-made haptic wristbands. We explore how the introduction of haptics deepens their embodied sensations and helps to create a sense of resonance with the dancers.",
    citations: [
      'Ximing Shen, Xuan Li, Youichi Kamiyama, Danny Hynds, Giulia Barbareschi, RAY LC, Sohei Wakisaka, Arata Horie, and Kouta Minamizawa. 2025. "It\'s Like Being On Stage": Conveying Dancers\' Expressiveness Through A Haptic-Installed Contemporary Dance Performance. In Proceedings of CHI \'25. ACM.',
    ],
    awards: ["CHI 2025 Best Paper Award"],
    links: [
      { label: "ACM DL", url: "https://dl.acm.org/doi/abs/10.1145/3706598.3713321" },
    ],
  },
  "feel-tech-wear": {
    description: "FEEL TECH Wear is a system that facilitates haptic interactions while keeping most of the palm free, by presenting directional force through rotational skin-stretch distribution feedback to the wrist and providing texture sensation through vibration feedback to the fingertips. The hardware consists of four channels of rotational skin-stretch tactors at the wrist and vibration tactors at the thumb and index finger. Three applications have been realized: haptic feedback for virtual objects, haptic augmentation for real objects, and haptic guidance towards objects.",
    citations: [
      "Umehara, R., Taguchi, H., Horie, A., Kamiyama, Y., Sakamoto, S., Ishikawa, H., & Minamizawa, K. (2024). FEELTECH Wear: Enhancing Mixed Reality Experience with Wrist to Finger Haptic Attribution. In SIGGRAPH 2024 Emerging Technologies.",
    ],
    awards: ["SIGGRAPH 2024 Emerging Technologies Official Selection for Laval Virtual"],
    collaborators: ["Keio Media Design", "NTT DOCOMO, INC.", "commissure, inc.", "SPLINE DESIGN HUB, Corp."],
    links: [
      { label: "ACM DL", url: "https://dl.acm.org/doi/abs/10.1145/3641517.3664395" },
    ],
  },
  "rotational-skin-stretch": {
    description: "This study aims to develop a compact, palm-free wearable system for mixed-reality environments. We propose a novel wearable system that presents the direction of force through a rotational skin-stretch distribution to the wrist by utilizing four independently controlled rotating tactors. Two control rules, local and global, are proposed to dictate the stimulus distribution. Experiments confirmed that the system could present perceived intensity and directional stimuli.",
    citations: [
      "Rodan Umehara, Horie, A., & Minamizawa, K. (2024). Rotational Skin-stretch Distribution Creates Directional Force Sensation on the Wrist. In EuroHaptics 2024. Springer.",
    ],
    awards: ["Best Demo Award"],
    links: [],
  },
  "fmg-skin-stretch": {
    description: "We propose a wearable system integrating force myography (FMG) and skin stretch toward force skill learning. The system integrates body motion estimation by FMG and skin stretch haptic feedback to provide feedback cues from the current force output to the target force output. After evaluating the performance of the system in terms of sensing and haptic presentation, an initial user study was conducted to assess the feasibility of force guidance in practice.",
    citations: [
      'A. Horie, Y. Zheng and M. Inami, "A Wearable System Integrating Force Myography and Skin Stretch Feedback toward Force Skill Learning," 2023 IEEE World Haptics Conference (WHC), Delft, Netherlands, 2023, pp. 190-196.',
    ],
    links: [
      { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/abstract/document/10224440" },
    ],
  },
  "dynamic-derm": {
    description: "The body surface is an essential interface that dynamically reflects states inside and outside the body. We propose dynamically intervening in the shape of the body surface. Dynamic Derm is a prototype that dynamically deforms clothes by pushing them up from inside, where each module can present two degrees of freedom in translation. We designed several presentation scenarios and conducted a qualitative evaluation.",
    citations: [
      "Ryo Murata, Arata Horie, and Masahiko Inami. 2023. Dynamic Derm: Body Surface Deformation Display for Real-World Embodied Interactions. In Proceedings of AHs '23. ACM, 267–277.",
    ],
    links: [
      { label: "ACM DL", url: "https://dl.acm.org/doi/10.1145/3582700.3582723" },
    ],
  },
  "seeing-is-feeling": {
    description: "We propose a new haptic display that enables mutual understanding of haptic sensation between the wearer and an observer. In addition to presenting haptic sensations by inducing skin deformation, we have achieved creating a mutual understanding of the sensations with the observer by making the haptic stimulus evident. The system is composed of a part that provides haptic stimulus while creating visible skin deformation, and a mechanical structure that visually exaggerates the deformation.",
    citations: [
      "Arata Horie, Ryo Murata, Zendai Kashino, and Masahiko Inami. 2022. Seeing is Feeling: A Novel Haptic Display for Wearer-Observer Mutual Haptic Understanding. In SIGGRAPH Asia 2022 Emerging Technologies. ACM, Article 8.",
    ],
    links: [
      { label: "ACM DL", url: "https://dl.acm.org/doi/10.1145/3550471.3558400" },
    ],
  },
  "chainy": {
    description: "Chainy allows you to feel a haptic sensation according to the environment information brimming around us. Multiple rotating tactors are embedded in the backrest and seat, which rotate in tandem like a crowd, deforming a large area of the human skin surface and presenting a two-dimensional time-varying distribution of force. Based on the basic research of the University of Tokyo's INAMI JIZAI-BODY PROJECT, fuRo has developed a technology that can be implemented in society.",
    descriptionJa: "千葉工業大学 未来ロボット技術研究センター（fuRo）は、東京大学 先端科学技術研究センター堀江新特任助教らがJST ERATO 稲見自在化身体プロジェクトにおいて開発した椅子型触覚提示実験装置「TorsionCrowds」の基盤技術を用いて、独自の機構で軽量型の展示用装置「Chainy」を開発しました。",
    citations: [],
    collaborators: ["fuRo (千葉工業大学 未来ロボット技術研究センター)"],
    links: [
      { label: "fuRo Project Page", url: "https://www.furo.org/ja/works/chainy/index.html" },
    ],
  },
  "thermoblinds": {
    description: "We present ThermoBlinds, a non-contact, highly responsive thermal feedback device for thermal interactions. It provides responsive feedback by rapidly adjusting infrared irradiance with a shutter mechanism. By providing thermal feedback in accordance with the user's gaze, it is possible to create a visual media experience with a high resolution thermal sensation.",
    citations: [
      "Sosuke Ichihashi, Arata Horie, Masaharu Hirose, Zendai Kashino, Shigeo Yoshida, Sohei Wakisaka, and Masahiko Inami. 2022. ThermoBlinds: Non-Contact, Highly Responsive Thermal Feedback for Thermal Interaction. In SIGGRAPH 2022 Emerging Technologies. ACM, Article 10.",
    ],
    links: [
      { label: "ACM DL", url: "https://dl.acm.org/doi/abs/10.1145/3532721.3535569" },
    ],
  },
  "2d-phantom": {
    description: "This study reports on one of the first attempts to achieve a sense of tactile motion in two-dimensions using an array of stationary rotational skin stretch elements presenting a moving phantom sensation. We propose an algorithm with two independent control parameters for generating the moving phantom sensation. Our results showed that both control parameters had a significant effect on the continuity of the stimulus in all directions.",
    citations: [
      "Horie, A., Kashino, Z., Shimobayashi, H., & Inami, M. (2021). Two-Dimensional Moving Phantom Sensation Created by Rotational Skin Stretch Distribution. In 2021 IEEE World Haptics Conference (WHC) (pp. 139-144). IEEE.",
    ],
    awards: ["Best Paper Award Nominated"],
    links: [
      { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/abstract/document/9517252" },
    ],
  },
  "encounteredlimbs": {
    description: "We present a novel, wearable approach to presenting a user with encountered-type haptic feedback. We realize this feedback using a wearable robotic limb that holds a plate where the user might interact with their environment. By making the feedback system wearable, we enable the presentation of stiff feedback while maintaining the spatial freedom and unbounded workspace of natural hand interaction. A technical evaluation showed that the system provides a stiffness over 25 N/m and slant angle errors under 3°.",
    citations: [
      'A. Horie, M. Y. Saraiji, Z. Kashino and M. Inami, "EncounteredLimbs: A Room-scale Encountered-type Haptic Presentation using Wearable Robotic Arms," 2021 IEEE VR, pp. 260-269.',
    ],
    links: [
      { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/abstract/document/9417696" },
    ],
  },
  "dualvib": {
    description: "We present DualVib, a compact handheld device that simulates the haptic sensation of manipulating dynamic mass. Unlike other devices that require actual displacement of weight, DualVib uses four vibration actuators to simultaneously deliver pseudo-force feedback and texture feedback. Our user study found that DualVib allowed users to more effectively distinguish dynamic masses compared to either feedback alone.",
    citations: [
      'Tanaka, Yudai, Arata Horie, and Xiang\'Anthony Chen. "DualVib: Simulating Haptic Sensation of Dynamic Mass by Combining Pseudo-Force and Texture Feedback." 26th ACM VRST. 2020.',
    ],
    links: [
      { label: "ACM DL", url: "https://doi.org/10.1145/3385956.3418964" },
    ],
  },
  "torsioncrowds": {
    description: "We propose TorsionCrowds, a novel tactile display that presents force stimulus distribution over a large area of the body. The system consists of multi-channel twist skin deformation modules and passive mechanisms for fitting to the human body curve. By stimulating elements arrangement based on perceptual experiments, the user can perceive continuous force distribution in a large area of the body sharply with a high dynamic range of intensity.",
    citations: [
      "Horie, A., Shimobayashi, H., & Inami, M. (2020). TorsionCrowds: Multi-Points Twist Stimulation Display for Large Part of the Body. In SIGGRAPH 2020 Emerging Technologies.",
      "堀江 新, 下林 秀輝, 齊藤 寛人, 稲見 昌彦. 回転の皮膚せん断変形に基づく分布型触覚ディスプレイの設計. 日本バーチャルリアリティ学会論文誌, 25(4), 402-411.",
    ],
    awards: ["Asia Digital Art Award: Excellence Award"],
    links: [
      { label: "ACM DL", url: "https://dl.acm.org/doi/abs/10.1145/3388534.3407303" },
      { label: "JVRSJ", url: "https://doi.org/10.18974/tvrsj.25.4_402" },
    ],
  },
  "2dof-bssd": {
    description: "We propose a buttock skin stretch device that adopts a two-degree-of-freedom horizontal movement mechanism. We have confirmed that an acceleration sensation of self-motion can be induced by a buttock skin stretch device with one degree of freedom. This extends the direction of skin deformation to include forward and backward directions. We evaluated the range of motion, position accuracy, and driving speed.",
    citations: [
      "Horie A., et al. (2019) Enhancing Haptic Experience in a Seat with Two-DoF Buttock Skin Stretch. In: Haptic Interaction. AsiaHaptics 2018. LNEE, vol 535. Springer.",
    ],
    awards: ["Best Demonstration Award Gold Winner"],
    links: [],
  },
  "bssd": {
    description: "This study presents a new concept of buttock skin stretch to induce the perception of shear force while sitting. We developed a single degree-of-freedom skin stretch device to deform the buttock skin in the lateral direction. We investigated the relationship between contactor displacement and perceived shear force, and the bias effect to perceived acceleration of self-motion induced by vection illusion.",
    citations: [
      "Horie A., et al. (2018) Buttock Skin Stretch: Inducing Shear Force Perception and Acceleration Illusion on Self-motion Perception. In: EuroHaptics 2018. LNCS, vol 10894. Springer.",
    ],
    awards: [
      "ROBOMECH表彰（学術研究分野）",
      "日本バーチャルリアリティ学会学術奨励賞（技術展示部門）",
    ],
    links: [],
  },
  "dual-vib-friction": {
    description: "We synthesized asymmetric vibration capable of presenting direction via pseudo force sense and Stick-Slip vibration capable of reflecting the difference of friction conditions such as sliding speed. Experimental results showed that it is possible to present both sliding direction and sliding speed by adding asymmetric vibration to Stick-Slip vibration.",
    descriptionJa: "接触面における滑り現象を再現するため、方向を提示可能な非対称振動とStick-Slip振動を合成しました。実験結果により、非対称振動をStick-Slip振動に加えることで、滑り方向と滑り速度の両方を提示可能であることが示されました。",
    citations: [
      "堀江新, 永野光, 昆陽雅司, 田所諭. 高周波振動と非対称振動の複合出力による滑り方向・滑り速度の提示. VRSJ 2017.",
    ],
    awards: ["SICE-SI 優秀講演賞", "計測自動制御学会 学術奨励賞"],
    links: [],
  },
};

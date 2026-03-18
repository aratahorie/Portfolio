#!/bin/bash
# Image Migration Script
# Maps WordPress media to project thumbnails
# Run from the Portfolio root directory

UPLOADS="wordpress-data/wp-content/uploads"
DEST="site/public/images/research"

mkdir -p "$DEST"

cp "$UPLOADS/2025/07/R0005191.jpeg"                                              "$DEST/embodycraft.jpg"
cp "$UPLOADS/2025/07/6830df0c381e2aeb1ca8f9cf_Screenshot-2025-05-24-at-2.00.26-1.png" "$DEST/boiling-mind.png"
cp "$UPLOADS/2024/07/PIZ_4016.jpg"                                               "$DEST/feel-tech-wear.jpg"
cp "$UPLOADS/2024/07/RSSD.png"                                                   "$DEST/rotational-skin-stretch.png"
cp "$UPLOADS/2024/03/EntireSystem.png"                                           "$DEST/fmg-skin-stretch.png"
cp "$UPLOADS/2023/03/スクリーンショット-2023-04-01-12.09.46.png"                    "$DEST/dynamic-derm.png"
cp "$UPLOADS/2022/11/210709RFR09171-retouch.jpg"                                 "$DEST/seeing-is-feeling.jpg"
cp "$UPLOADS/2022/11/20221007_RFS2477-0_29_24_06_1.jpg"                          "$DEST/chainy.jpg"
cp "$UPLOADS/2022/09/20210630-DSC06854.jpg"                                      "$DEST/thermoblinds.jpg"
cp "$UPLOADS/2021/07/スクリーンショット-2021-07-03-15.54.48.png"                    "$DEST/2d-phantom.png"
cp "$UPLOADS/2021/04/IMG_3422.jpg"                                               "$DEST/encounteredlimbs.jpg"
cp "$UPLOADS/2020/11/スクリーンショット-2020-11-07-20.39.54.png"                    "$DEST/dualvib.png"
cp "$UPLOADS/2020/08/representative.jpg"                                         "$DEST/torsioncrowds.jpg"
cp "$UPLOADS/2020/08/20181127-111252.jpg"                                        "$DEST/2dof-bssd.jpg"
cp "$UPLOADS/2019/07/apparatus.jpg"                                              "$DEST/bssd.jpg"
cp "$UPLOADS/2019/07/fig1_device.png"                                            "$DEST/dual-vib-friction.png"

echo "✓ Copied 16 project images to $DEST"
ls -la "$DEST"

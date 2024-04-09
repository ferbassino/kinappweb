import React, { useEffect, useState } from "react";

// axial
// cervical
const cervical =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/cervical/cervical.jpg";
const cervicalFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/cervical/cervical_flexion.jpg";
const cervicalNeutral =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/cervical/cervical_neutral.jpg";
const cervicalExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/cervical/cervical_extension.jpg";
const rightBending =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/cervical/right_bending.jpg";
const leftBending =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/cervical/left_bending.jpg";
const leftRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/cervical/left_rotation.jpg";
const rightRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/cervical/right_rotation.jpg";
// trunc
const trunc =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/tronco/trunc.jpg";
const truncExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/tronco/trunc_extension.jpg";
const truncFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/tronco/trunc_flexion.jpg";
const truncFrontal =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/tronco/trunc_frontal.jpg";
const truncLeftBending =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/tronco/trunc_left_bending.jpg";
const truncRightBending =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/tronco/trunc_right_bending.jpg";
const truncLeftRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/tronco/trunc_left_rotation.jpg";
const truncRightRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/tronco/trunc_right_rotation.jpg";
const truncRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/tronco/trunc_rotation.jpg";
const truncSagital =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/tronco/trunc_sagital.jpg";

// MMSS
// shoulder
const neutralRightShoulder =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/neutral_right_shoulder.jpg";
const neutralRightShoulderRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/neutral_right_shoulder_rotation.jpg";
const rightShoulderFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/right_shoulder_flexion.jpg";
const rightShoulderExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/right_shoulder_extension.jpg";
const rightShoulderAbduction =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/right_shoulder_abduction.jpg";
const rightShoulderAdduction =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/right_shoulder_adduction.jpg";
const rightShoulderMedialRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/right_shoulder_medial_rotation.jpg";
const rightShoulderLateralRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/right_shoulder_lateral_rotation.jpg";

const neutralLeftShoulder =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/neutral_left_shoulder.jpg";
const neutralLeftShoulderRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/neutral_left_shoulder_rotation.jpg";
const leftShoulderFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/left_shoulder_flexion.jpg";
const leftShoulderExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/left_shoulder_extension.jpg";
const leftShoulderAbduction =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/left_shoulder_abduction.jpg";
const leftShoulderAdduction =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/left_shoulder_adduction.jpg";
const leftShoulderMedialRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/left_shoulder_medial_rotation.jpg";
const leftShoulderLateralRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/left_shoulder_lateral_rotation.jpg";

const leftShoulder =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/left_shoulder.jpg";
const rightShoulder =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/shoulder/right_shoulder.jpg";

const rightForearm =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/forearm/right_forearm.jpg";
const leftForearm =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/forearm/left_forearm.jpg";

const neutralRightForearm =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/forearm/neutral_right_forearm.jpg";
const neutralLeftForearm =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/forearm/neutral_left_forearm.jpg";
const rightForearmPronation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/forearm/right_forearm_pronation.jpg";
const rightForearmSupination =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/forearm/right_forearm_supination.jpg";
const leftForearmPronation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/forearm/left_forearm_pronation.jpg";
const leftForearmSupination =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/forearm/left_forearm_supination.jpg";

// elbow
const rightElbow =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/elbow/right_elbow.jpg";
const leftElbow =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/elbow/left_elbow.jpg";
const leftElbowExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/elbow/left_elbow_extension.jpg";
const leftElbowFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/elbow/left_elbow_flexion.jpg";
const neutralLeftElbowFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/elbow/neutral_left_elbow_flexion.jpg";
const neutralLeftElbowExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/elbow/neutral_left_elbow_extension.jpg";
const neutralRightElbowFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/elbow/neutral_right_elbow_flexion.jpg";
const neutralRightElbowExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/elbow/neutral_right_elbow_extension.jpg";
const rightElbowExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/elbow/right_elbow_extension.jpg";
const rightElbowFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/elbow/right_elbow_flexion.jpg";

// wrist
const rightWrist =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/right_wrist.jpg";
const leftWrist =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/left_wrist.jpg";
const neutralRightWristFrontal =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/neutral_right_wrist_frontal.jpg";
const neutralLeftWristFontal =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/neutral_left_wrist_frontal.jpg";
const neutralRightWristSagital =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/neutral_right_wrist_sagital.jpg";
const neutralLeftWristSagital =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/neutral_left_wrist_sagital.jpg";

const leftWristAbduction =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/left_wrist_abduction.jpg";
const leftWristAdduction =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/left_wrist_adduction.jpg";
const leftWristExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/left_wrist_extension.jpg";
const leftWristFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/left_wrist_flexion.jpg";
const rightWristAbduction =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/right_wrist_abduction.jpg";
const rightWristAdduction =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/right_wrist_adduction.jpg";
const rightWristExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/right_wrist_extension.jpg";
const rightWristFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/wrist/right_wrist_flexion.jpg";

// MMII
// hip

const leftHipFrontalLocation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/left_hip_frontal_location.jpg";
const rightHipFrontalLocation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/right_hip_frontal_location.jpg";

const leftHipLocation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/left_hip_location.jpg";
const rightHipLocation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/right_hip_location.jpg";

const leftHipAbduction =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/left_hip_abduction.jpg";
const leftHipAdduction =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/left_hip_adduction.jpg";

const leftHipExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/left_hip_extension.jpg";
const leftHipFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/left_hip_flexion.jpg";

const leftHipFrontal =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/left_hip_frontal.jpg";

const leftHipInternalRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/left_hip_internal_rotation.jpg";
const leftHipLateralRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/left_hip_lateral_rotation.jpg";
const leftHipRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/left_hip_rotation.jpg";
const leftHipSagitalExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/left_hip_sagital_extension.jpg";
const leftHipSagitalFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/left_hip_sagital_flexion.jpg";

// -----------------------

const rightHipAbduction =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/right_hip_abduction.jpg";
const rightHipAdduction =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/right_hip_adduction.jpg";

const rightHipExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/right_hip_extension.jpg";
const rightHipFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/right_hip_flexion.jpg";

const rightHipFrontal =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/right_hip_frontal.jpg";

const rightHipInternalRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/right_hip_internal_rotation.jpg";

const rightHipLateralRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/right_hip_lateral_rotation.jpg";
const rightHipRotation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/right_hip_rotation.jpg";
const rightHipSagitalExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/right_hip_sagital_extension.jpg";
const rightHipSagitalFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/hip/right_hip_sagital_flexion.jpg";

// knee
const rightKneeLocation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/knee/right_knee_location.jpg";
const leftKneeLocation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/knee/left_knee_location.jpg";

const leftKneeExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/knee/left_knee_extension.jpg";
const leftKneeFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/knee/left_knee_flexion.jpg";
const leftKneeNeutralFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/knee/left_knee_neutral_flexion.jpg";
const leftKneeNeutralExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/knee/left_knee_neutral_extension.jpg";

const rightKneeExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/knee/right_knee_extension.jpg";
const rightKneeFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/knee/right_knee_flexion.jpg";
const rightKneeNeutralFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/knee/right_knee_neutral_flexion.jpg";
const rightKneeNeutralExtension =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/knee/right_knee_neutral_extension.jpg";

// ankle
const rightAnkleCloseChainLocation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/right_ankle_close_chain_location.jpg";
const leftAnkleCloseChainLocation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/left_ankle_close_chain_location.jpg";
const rightAnkleLocation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/right_ankle_location.jpg";
const leftAnkleLocation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/left_ankle_location.jpg";

const rightAnkleCloseChainDorsiflexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/right_ankle_close_chain_dorsiflexion.jpg";
const leftAnkleCloseChainDorsiflexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/left_ankle_close_chain_dorsiflexion.jpg";
const leftAnkleCloseChain =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/left_ankle_close_chain.jpg";
const rightAnkleCloseChain =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/right_ankle_close_chain.jpg";
const rightAnkleDorsiflexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/right_ankle_dorsiflexion.jpg";
const leftAnkleDorsiflexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/left_ankle_dorsiflexion.jpg";
const leftAnkle =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/left_ankle.jpg";
const rightAnkle =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/right_ankle.jpg";
const rightAnklePlantarFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/right_ankle_plantarflexion.jpg";
const leftAnklePlantarFlexion =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/ankle/left_ankle_plantarflexion.jpg";

// foot
const rightFoot =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/foot/right_foot.jpg";
const rightFootSupination =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/foot/right_foot_supination.jpg";
const rightFootPronation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/foot/right_foot_pronation.jpg";
const leftFoot =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/foot/left_foot.jpg";
const leftFootSupination =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/foot/left_foot_supination.jpg";
const leftFootPronation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/foot/left_foot_pronation.jpg";
const leftFootLocation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/foot/left_foot_location.jpg";
const rightFootLocation =
  "https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/apendicular/foot/right_foot_location.jpg";

const RefImages = ({ segment, side, movement }) => {
  const [locationImage, setLocationImage] = useState();
  const [neutralImage, setNeutralImage] = useState();
  const [movImage, setMovImage] = useState();

  // ********** neutral position and location **************

  useEffect(() => {
    // spine
    if (segment === "cervical") {
      setLocationImage(cervical);
      setNeutralImage(cervicalNeutral);
    }
    if (segment === "trunc" && movement === "flexion") {
      setLocationImage(trunc);
      setNeutralImage(truncSagital);
    }
    if (segment === "trunc" && movement === "extension") {
      setLocationImage(trunc);
      setNeutralImage(truncSagital);
    }

    if (segment === "trunc" && movement === "right bending") {
      setLocationImage(trunc);
      setNeutralImage(truncFrontal);
    }
    if (segment === "trunc" && movement === "left bending") {
      setLocationImage(trunc);
      setNeutralImage(truncFrontal);
    }

    if (segment === "trunc" && movement === "right rotation") {
      setLocationImage(trunc);
      setNeutralImage(truncRotation);
    }
    if (segment === "trunc" && movement === "left rotation") {
      setLocationImage(trunc);
      setNeutralImage(truncRotation);
    }

    // shoulder

    if (segment === "shoulder" && side === "right") {
      setLocationImage(rightShoulder);
      setNeutralImage(neutralRightShoulder);
    }
    if (segment === "shoulder" && side === "left") {
      setLocationImage(leftShoulder);
      setNeutralImage(neutralLeftShoulder);
    }
    if (
      segment === "shoulder" &&
      side === "right" &&
      movement === "medial rotation"
    ) {
      setLocationImage(rightShoulder);
      setNeutralImage(neutralRightShoulderRotation);
    }
    if (
      segment === "shoulder" &&
      side === "right" &&
      movement === "lateral rotation"
    ) {
      setLocationImage(rightShoulder);
      setNeutralImage(neutralRightShoulderRotation);
    }
    if (
      segment === "shoulder" &&
      side === "left" &&
      movement === "medial rotation"
    ) {
      setLocationImage(rightShoulder);
      setNeutralImage(neutralLeftShoulderRotation);
    }
    if (
      segment === "shoulder" &&
      side === "left" &&
      movement === "lateral rotation"
    ) {
      setLocationImage(rightShoulder);
      setNeutralImage(neutralLeftShoulderRotation);
    }

    // elbow
    if (segment === "elbow" && side === "right" && movement === "flexion") {
      setLocationImage(rightElbow);
      setNeutralImage(neutralRightElbowFlexion);
    }
    if (segment === "elbow" && side === "right" && movement === "extension") {
      setLocationImage(rightElbow);
      setNeutralImage(neutralRightElbowExtension);
    }
    if (segment === "elbow" && side === "left" && movement === "flexion") {
      setLocationImage(leftElbow);
      setNeutralImage(neutralLeftElbowFlexion);
    }
    if (segment === "elbow" && side === "left" && movement === "extension") {
      setLocationImage(leftElbow);
      setNeutralImage(neutralLeftElbowExtension);
    }

    // forearm
    if (segment === "forearm" && side === "right" && movement === "pronation") {
      setLocationImage(rightForearm);
      setNeutralImage(neutralRightForearm);
    }
    if (
      segment === "forearm" &&
      side === "right" &&
      movement === "supination"
    ) {
      setLocationImage(rightForearm);
      setNeutralImage(neutralRightForearm);
    }
    if (segment === "forearm" && side === "left" && movement === "pronation") {
      setLocationImage(leftForearm);
      setNeutralImage(neutralLeftForearm);
    }
    if (segment === "forearm" && side === "left" && movement === "supination") {
      setLocationImage(leftForearm);
      setNeutralImage(neutralLeftForearm);
    }
    // wrist
    if (segment === "wrist" && side === "right" && movement === "flexion") {
      setLocationImage(rightWrist);
      setNeutralImage(neutralRightWristSagital);
    }
    if (segment === "wrist" && side === "left" && movement === "flexion") {
      setLocationImage(leftWrist);
      setNeutralImage(neutralLeftWristSagital);
    }
    if (segment === "wrist" && side === "right" && movement === "extension") {
      setLocationImage(rightWrist);
      setNeutralImage(neutralRightWristSagital);
    }
    if (segment === "wrist" && side === "left" && movement === "extension") {
      setLocationImage(leftWrist);
      setNeutralImage(neutralLeftWristSagital);
    }

    if (segment === "wrist" && side === "right" && movement === "adduction") {
      setLocationImage(rightWrist);
      setNeutralImage(neutralRightWristFrontal);
    }
    if (segment === "wrist" && side === "left" && movement === "adduction") {
      setLocationImage(leftWrist);
      setNeutralImage(neutralLeftWristFontal);
    }

    if (segment === "wrist" && side === "right" && movement === "abduction") {
      setLocationImage(rightWrist);
      setNeutralImage(neutralRightWristFrontal);
    }
    if (segment === "wrist" && side === "left" && movement === "abduction") {
      setLocationImage(leftWrist);
      setNeutralImage(neutralLeftWristFontal);
    }
    // MMII
    // hip
    if (segment === "hip" && side === "left" && movement === "flexion") {
      setLocationImage(leftHipLocation);
      setNeutralImage(leftHipSagitalFlexion);
    }
    if (segment === "hip" && side === "left" && movement === "extension") {
      setLocationImage(leftHipLocation);
      setNeutralImage(leftHipSagitalExtension);
    }

    if (segment === "hip" && side === "left" && movement === "abduction") {
      setLocationImage(leftHipFrontalLocation);
      setNeutralImage(leftHipFrontal);
    }
    if (segment === "hip" && side === "left" && movement === "adduction") {
      setLocationImage(leftHipFrontalLocation);
      setNeutralImage(leftHipFrontal);
    }
    if (
      segment === "hip" &&
      side === "left" &&
      movement === "lateral rotation"
    ) {
      setLocationImage(leftHipLocation);
      setNeutralImage(leftHipRotation);
    }
    if (
      segment === "hip" &&
      side === "left" &&
      movement === "medial rotation"
    ) {
      setLocationImage(leftHipLocation);
      setNeutralImage(leftHipRotation);
    }

    if (segment === "hip" && side === "right" && movement === "flexion") {
      setLocationImage(rightHipLocation);
      setNeutralImage(rightHipSagitalFlexion);
    }
    if (segment === "hip" && side === "right" && movement === "extension") {
      setLocationImage(rightHipLocation);
      setNeutralImage(rightHipSagitalExtension);
    }

    if (segment === "hip" && side === "right" && movement === "abduction") {
      setLocationImage(rightHipFrontalLocation);
      setNeutralImage(rightHipFrontal);
    }
    if (segment === "hip" && side === "right" && movement === "adduction") {
      setLocationImage(rightHipFrontalLocation);
      setNeutralImage(rightHipFrontal);
    }
    if (
      segment === "hip" &&
      side === "right" &&
      movement === "lateral rotation"
    ) {
      setLocationImage(rightHipLocation);
      setNeutralImage(rightHipRotation);
    }
    if (
      segment === "hip" &&
      side === "right" &&
      movement === "medial rotation"
    ) {
      setLocationImage(rightHipLocation);
      setNeutralImage(rightHipRotation);
    }
    // knee
    if (segment === "knee" && side === "right" && movement === "flexion") {
      setLocationImage(rightKneeLocation);
      setNeutralImage(rightKneeNeutralFlexion);
    }
    if (segment === "knee" && side === "right" && movement === "extension") {
      setLocationImage(rightKneeLocation);
      setNeutralImage(rightKneeNeutralExtension);
    }
    if (segment === "knee" && side === "left" && movement === "flexion") {
      setLocationImage(leftKneeLocation);
      setNeutralImage(leftKneeNeutralFlexion);
    }
    if (segment === "knee" && side === "left" && movement === "extension") {
      setLocationImage(leftKneeLocation);
      setNeutralImage(leftKneeNeutralExtension);
    }

    // ankle
    if (segment === "ankle" && side === "left" && movement === "dorsiflexion") {
      setLocationImage(leftAnkleLocation);
      setNeutralImage(leftAnkle);
    }
    if (
      segment === "ankle" &&
      side === "left" &&
      movement === "plantarflexion"
    ) {
      setLocationImage(leftAnkleLocation);
      setNeutralImage(leftAnkle);
    }
    if (
      segment === "ankle" &&
      side === "right" &&
      movement === "dorsiflexion"
    ) {
      setLocationImage(rightAnkleLocation);
      setNeutralImage(rightAnkle);
    }
    if (
      segment === "ankle" &&
      side === "right" &&
      movement === "plantarflexion"
    ) {
      setLocationImage(rightAnkleLocation);
      setNeutralImage(rightAnkle);
    }
    if (
      segment === "ankle" &&
      side === "right" &&
      movement === "closed chain dorsiflexion"
    ) {
      setLocationImage(rightAnkleCloseChainLocation);
      setNeutralImage(rightAnkleCloseChain);
    }
    if (
      segment === "ankle" &&
      side === "left" &&
      movement === "closed chain dorsiflexion"
    ) {
      setLocationImage(leftAnkleCloseChainLocation);
      setNeutralImage(leftAnkleCloseChain);
    }
    // foot
    if (segment === "foot" && side === "left" && movement === "pronation") {
      setLocationImage(leftFootLocation);
      setNeutralImage(leftFoot);
    }
    if (segment === "foot" && side === "left" && movement === "supination") {
      setLocationImage(leftFootLocation);
      setNeutralImage(leftFoot);
    }
    if (segment === "foot" && side === "right" && movement === "pronation") {
      setLocationImage(rightFootLocation);
      setNeutralImage(rightFoot);
    }
    if (segment === "foot" && side === "right" && movement === "supination") {
      setLocationImage(rightFootLocation);
      setNeutralImage(rightFoot);
    }
  }, [segment, movement]);

  //************* movements ************
  useEffect(() => {
    // cervical
    if (segment === "cervical" && movement === "flexion") {
      setMovImage(cervicalFlexion);
    }
    if (segment === "cervical" && movement === "extension") {
      setMovImage(cervicalExtension);
    }
    if (segment === "cervical" && movement === "right bending") {
      setMovImage(rightBending);
    }
    if (segment === "cervical" && movement === "left bending") {
      setMovImage(leftBending);
    }
    if (segment === "cervical" && movement === "right rotation") {
      setMovImage(rightRotation);
    }
    if (segment === "cervical" && movement === "left rotation") {
      setMovImage(leftRotation);
    }

    // trunc
    if (segment === "trunc" && movement === "flexion") {
      setMovImage(truncFlexion);
    }
    if (segment === "trunc" && movement === "extension") {
      setMovImage(truncExtension);
    }

    if (segment === "trunc" && movement === "left bending") {
      setMovImage(truncLeftBending);
    }
    if (segment === "trunc" && movement === "right bending") {
      setMovImage(truncRightBending);
    }

    if (segment === "trunc" && movement === "right rotation") {
      setMovImage(truncRightRotation);
    }
    if (segment === "trunc" && movement === "left rotation") {
      setMovImage(truncLeftRotation);
    }

    // right shoulder
    if (segment === "shoulder" && side === "right" && movement === "flexion") {
      setMovImage(rightShoulderFlexion);
    }
    if (
      segment === "shoulder" &&
      side === "right" &&
      movement === "extension"
    ) {
      setMovImage(rightShoulderExtension);
    }
    if (
      segment === "shoulder" &&
      side === "right" &&
      movement === "abduction"
    ) {
      setMovImage(rightShoulderAbduction);
    }
    if (
      segment === "shoulder" &&
      side === "right" &&
      movement === "adduction"
    ) {
      setMovImage(rightShoulderAdduction);
    }
    if (
      segment === "shoulder" &&
      side === "right" &&
      movement === "medial rotation"
    ) {
      setMovImage(rightShoulderMedialRotation);
    }
    if (
      segment === "shoulder" &&
      side === "right" &&
      movement === "lateral rotation"
    ) {
      setMovImage(rightShoulderLateralRotation);
    }

    // left shoulder
    if (segment === "shoulder" && side === "left" && movement === "flexion") {
      setMovImage(leftShoulderFlexion);
    }
    if (segment === "shoulder" && side === "left" && movement === "extension") {
      setMovImage(leftShoulderExtension);
    }
    if (segment === "shoulder" && side === "left" && movement === "abduction") {
      setMovImage(leftShoulderAbduction);
    }
    if (segment === "shoulder" && side === "left" && movement === "adduction") {
      setMovImage(leftShoulderAdduction);
    }
    if (
      segment === "shoulder" &&
      side === "left" &&
      movement === "medial rotation"
    ) {
      setMovImage(leftShoulderMedialRotation);
    }
    if (
      segment === "shoulder" &&
      side === "left" &&
      movement === "lateral rotation"
    ) {
      setMovImage(leftShoulderLateralRotation);
    }
    // elbow
    if (segment === "elbow" && side === "right" && movement === "flexion") {
      setMovImage(rightElbowFlexion);
    }
    if (segment === "elbow" && side === "right" && movement === "extension") {
      setMovImage(rightElbowExtension);
    }
    if (segment === "elbow" && side === "left" && movement === "flexion") {
      setMovImage(leftElbowFlexion);
    }
    if (segment === "elbow" && side === "left" && movement === "extension") {
      setMovImage(leftElbowExtension);
    }

    // right forearm
    if (segment === "forearm" && side === "right" && movement === "pronation") {
      setMovImage(rightForearmPronation);
    }
    if (
      segment === "forearm" &&
      side === "right" &&
      movement === "supination"
    ) {
      setMovImage(rightForearmSupination);
    }
    if (segment === "forearm" && side === "left" && movement === "pronation") {
      setMovImage(leftForearmPronation);
    }
    if (segment === "forearm" && side === "left" && movement === "supination") {
      setMovImage(leftForearmSupination);
    }
    // wrist
    if (segment === "wrist" && side === "right" && movement === "flexion") {
      setMovImage(rightWristFlexion);
    }
    if (segment === "wrist" && side === "right" && movement === "extension") {
      setMovImage(rightWristExtension);
    }

    if (segment === "wrist" && side === "left" && movement === "flexion") {
      setMovImage(leftWristFlexion);
    }
    if (segment === "wrist" && side === "left" && movement === "extension") {
      setMovImage(leftWristExtension);
    }

    if (segment === "wrist" && side === "right" && movement === "adduction") {
      setMovImage(rightWristAdduction);
    }
    if (segment === "wrist" && side === "right" && movement === "abduction") {
      setMovImage(rightWristAbduction);
    }
    if (segment === "wrist" && side === "left" && movement === "adduction") {
      setMovImage(leftWristAdduction);
    }
    if (segment === "wrist" && side === "left" && movement === "abduction") {
      setMovImage(leftWristAbduction);
    }

    // MMII
    // hip
    if (segment === "hip" && side === "left" && movement === "flexion") {
      setMovImage(leftHipFlexion);
    }
    if (segment === "hip" && side === "left" && movement === "extension") {
      setMovImage(leftHipExtension);
    }
    if (segment === "hip" && side === "left" && movement === "abduction") {
      setMovImage(leftHipAbduction);
    }
    if (segment === "hip" && side === "left" && movement === "adduction") {
      setMovImage(leftHipAdduction);
    }
    if (
      segment === "hip" &&
      side === "left" &&
      movement === "lateral rotation"
    ) {
      setMovImage(leftHipLateralRotation);
    }
    if (
      segment === "hip" &&
      side === "left" &&
      movement === "medial rotation"
    ) {
      setMovImage(leftHipInternalRotation);
    }

    if (segment === "hip" && side === "right" && movement === "flexion") {
      setMovImage(rightHipFlexion);
    }
    if (segment === "hip" && side === "right" && movement === "extension") {
      setMovImage(rightHipExtension);
    }
    if (segment === "hip" && side === "right" && movement === "abduction") {
      setMovImage(rightHipAbduction);
    }
    if (segment === "hip" && side === "right" && movement === "adduction") {
      setMovImage(rightHipAdduction);
    }
    if (
      segment === "hip" &&
      side === "right" &&
      movement === "lateral rotation"
    ) {
      setMovImage(rightHipLateralRotation);
    }
    if (
      segment === "hip" &&
      side === "right" &&
      movement === "medial rotation"
    ) {
      setMovImage(rightHipInternalRotation);
    }
    // knee
    if (segment === "knee" && side === "right" && movement === "flexion") {
      setMovImage(rightKneeFlexion);
    }
    if (segment === "knee" && side === "right" && movement === "extension") {
      setMovImage(rightKneeExtension);
    }

    if (segment === "knee" && side === "left" && movement === "flexion") {
      setMovImage(leftKneeFlexion);
    }
    if (segment === "knee" && side === "left" && movement === "extension") {
      setMovImage(leftKneeExtension);
    }
    // ankle
    if (segment === "ankle" && side === "left" && movement === "dorsiflexion") {
      setMovImage(leftAnkleDorsiflexion);
    }
    if (
      segment === "ankle" &&
      side === "left" &&
      movement === "plantarflexion"
    ) {
      setMovImage(leftAnklePlantarFlexion);
    }
    if (
      segment === "ankle" &&
      side === "right" &&
      movement === "dorsiflexion"
    ) {
      setMovImage(rightAnkleDorsiflexion);
    }
    if (
      segment === "ankle" &&
      side === "right" &&
      movement === "plantarflexion"
    ) {
      setMovImage(rightAnklePlantarFlexion);
    }

    if (
      segment === "ankle" &&
      side === "right" &&
      movement === "closed chain dorsiflexion"
    ) {
      setMovImage(rightAnkleCloseChainDorsiflexion);
    }
    if (
      segment === "ankle" &&
      side === "left" &&
      movement === "closed chain dorsiflexion"
    ) {
      setMovImage(leftAnkleCloseChainDorsiflexion);
    }
    // foot
    if (segment === "foot" && side === "left" && movement === "pronation") {
      setMovImage(leftFootPronation);
    }
    if (segment === "foot" && side === "left" && movement === "supination") {
      setMovImage(leftFootSupination);
    }
    if (segment === "foot" && side === "right" && movement === "pronation") {
      setMovImage(rightFootPronation);
    }
    if (segment === "foot" && side === "right" && movement === "supination") {
      setMovImage(rightFootSupination);
    }
  }, [movement, segment]);
  return (
    <>
      <tr>
        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
          Imaggenes de referencia
        </th>
        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
      </tr>

      <tr>
        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
          Ubicación del dispositivo
        </td>
        <td>
          <img
            className="h-20 rounded  object-cover object-center mb-3"
            alt="content"
            src={locationImage}
          />
        </td>
      </tr>
      <tr>
        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
          Posición inicial
        </td>
        <td>
          <img
            className="h-20 rounded  object-cover object-center mb-3"
            alt="content"
            src={neutralImage}
          />
        </td>
      </tr>
      <tr>
        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
          Posición final
        </td>
        <td>
          <img
            className="h-20 rounded  object-cover object-center mb-3"
            alt="content"
            src={movImage}
          />
        </td>
      </tr>
    </>
  );
};

export default RefImages;

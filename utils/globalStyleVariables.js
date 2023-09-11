import { generateShadow } from "react-native-shadow-generator";

export const colors = {
  white: "#ffffff",
  whiteTranslucent: "rgba(255,255,255,0.9)",
  white2: "#FCFCFD",
  white3: "#F7F7F7",
  white4: "#f7f7fa",

  gray1: "#78849e",
  gray2: "#f0f0f0",
  gray3: "#f5f5f5",
  gray4: "#c0c0c0",
  gray5: "#ebe8e8",
  gray6: "#f4f4f6",
  gray7: "rgba(120,132,158, 0.56)",
  gray8: "#A5ADBB",
  gray9: "#959dad",
  gray10: "#e3e9ef",
  gray11: "#707070",
  gray12: "rgba(42, 46, 67, 0.4)",
  gray13: "#F4F4F4",
  gray14: "#F9F9FB",
  gray15: "#ACACAC",
  gray16: "#f7f7f7",
  gray17: "rgba(58, 67, 80, 0.38)",
  gray18: "rgba(149, 157, 173, 0.4)",
  gray19: "rgba(120, 132, 158, 0.1)",
  gray20: "#C8C9CB",
  gray21: "#E6E7E8",
  gray22: "rgba(245, 245, 245, 0.7)",

  blue1: "#454f63",
  blue2: "#22215b",
  blue3: "#383d4a",
  blue4: "#3c3c58",
  blue5: "#2a2e43",
  blue6: "#1c1c36",
  blue7: "#353A50",
  blue8: "#2C83FA",
  blue9: "#34344F",
  blue10: "#3497FD",
  blue11: "rgba(61, 63, 66, 0.75)",
  blue12: "#6D97F1",

  green1: "rgba(23, 200, 175,0.4)",
  green2: "#3AE13A",
  green3: "#00B59C",
  green5: "#17c8af",
  green6: "#A8B308",
  green7: "#2FB042",
  green8: "#1AA41C",
  green10: "#59C260",
  green9: "#008A76",

  red1: "#ff4f67",
  red2: "#FF5E99",
  red3: "#F75426",

  yellow: "#FFB900",
  yellow2: "#FC9A51",

  orange1: "#fb9e58",
  orange2: "#FF913E",
  orange3: "#FB963C",
  orange4: "#FDBB5C",
  orange5: "#FFA015",
  orange6a: "#FF911E",
  orange6: "#FC9A51",
  orange7: "#FC9B52",
  orange8: "rgba(255, 160, 21, 0.7)",

  black1: "#383B41",
  black2: "#4B5466",
  black5: "#000000",
  blackTransparent: "rgba(0, 0, 0, 0.6)",
  blackTransparent2: "rgba(0, 0, 0, 0.3)",

  whiteGradient: { start: "#ffffff", end: "#f7f7fa" },
  orangeGradient1: { start: "#fb9e58", end: "#FF913E" },
  orangeGradient2: { start: "#FDBB5C", end: "#FFA015" },
  blueGradient: { start: "#78849E", end: "#3C424F" },
  blueGradient2: { start: "#3c3c58", end: "#1c1c36" },
  blueGradient3: { start: "#5DF5FF", middle: "#55CFFF", end: "#4EAEFF" },
  blueGradient3: { start: "#68DAE0", end: "#2071FF" },
  redGradient1: { start: "#FF4593", middle: "#E73784", end: "#E43683" },
  redGradient2: { start: "#DD6464", end: "#FF3E3E" },
  yellowGradient1: { start: "#FFD746", middle: "#FFAF49", end: "#FF984C" },
  greenGradient1: { start: "#18EA6C", middle: "#4CBB0D", end: "#17C8AF" },
};

export const borderRadius = {
  br3: 3,
  br4: 4,
  br5: 5,
  br6: 6,
  br7: 7,
  br8: 8,
  br10: 10,
  br11: 11,
  br12: 12,
  br13: 13,
  br15: 15,
  br17: 17,
  br18: 18,
  br20: 20,
  brfull: 10000,
};

export const fontSize = {
  font8: 8,
  font10: 10,
  font11: 11,
  font12: 12,
  font13: 13,
  font14: 14,
  font15: 15,
  font16: 16,
  font18: 18,
  font20: 20,
  font21: 21,
  font22: 22,
  font24: 24,
  font25: 25,
  font28: 28,
  font29: 29,
  font30: 30,
  font32: 32,
  font34: 34,
  font40: 40,
  font49: 49,
  font60: 60,
  font71: 71,
};

export const fontFamily = {
  gibsonLight: "GibsonLight",
  gibsonRegular: "GibsonRegular",
  gibsonSemiBold: "GibsonSemiBold",
  gibsonBold: "GibsonBold",
  poppinsLight: "PoppinsLight",
  poppinsRegular: "PoppinsRegular",
  poppinsMedium: "PoppinsMedium",
  poppinsSemiBold: "PoppinsSemiBold",
  poppinsBold: "PoppinsBold",
};

export const zIndex = {
  z10: 10,
  z11: 11,
};

export const miscStyleVar = {
  liveClass: {
    portrait: { broadcastViewHeight: 220 },
    landscape: { chatSidebarWidth: 260 },
  },
  button: {
    primary: {
      mini: { width: 80, height: 44 },
      default: { width: 130, height: 44 },
    },
    secondary: {
      default: { width: 130, height: 28 },
      warning: { width: 130, height: 36 },
    },
  },
};

/**
 * @example
 * style = {
 * ...elevation.e2
 * }
 */
export const elevation = {
  e0: generateShadow(0),
  e2: generateShadow(2),
  e3: generateShadow(3),
  e4: generateShadow(4),
  e5: generateShadow(5),
  e6: generateShadow(6),
  e10: generateShadow(10),
  e12: generateShadow(12),
  e24: generateShadow(24),

  /**
   * This one should be used for loader wrapper only,
   * It will allow Loader wrapper to dodge every element and sit on top of the screen
   *
   * If any element has more elevation than loader wrapper then loader will come beneath that element,
   * making the loader wrapper useless.
   */
  e30: generateShadow(30),
};

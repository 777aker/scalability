// Colors from https://flatuicolors.com
export const COLORS = {
  // aussie palette
  beekeeper: 0xf6e58d, // #f6e58d
  turbo: 0xf9ca24, // #f9ca24
  spiced_nectarine: 0xffbe76, // #ffbe76
  quince_jelly: 0xf0932b, // #f0932b
  pink_glamour: 0xff7979, // #ff7979
  carmine_pink: 0xeb4d4b, // #eb4d4b
  june_bud: 0xbadc58, // #badc58
  pure_apple: 0x6ab04c, // #6ab04c
  coastal_breeze: 0xdff9fb, // #dff9fb
  hint_of_ice_pack: 0xc7ecee, // #c7ecee
  middle_blue: 0x7ed6df, // #7ed6df
  greenland_green: 0x22a6b3, // #22a6b3
  heliotrope: 0xe056fd, // #e056fd
  steel_pink: 0xbe2edd, // #be2edd
  exodus_fruit: 0x686de0, // #686de0
  blurple: 0x4834d4, // #4834d4
  deep_koamaru: 0x30336b, // #30336b
  deep_cove: 0x130f40, // #130f40
  soaring_eagle: 0x95afc0, // #95afc0
  wizard_grey: 0x535c68, // #535c68
  // dutch palette
  sunflower: 0xf1c40f, // #f1c40f
  radiant_yellow: 0xf79f1f, // #f79f1f
  energos: 0xc4e538, // #c4e538
  android_green: 0xa3cb38, // #a3cb38
  blue_martina: 0x12cbc4, // #12cbc4
  mediterranean_sea: 0x1289a7, // #1289a7
  lavendar_rose: 0xfda7df, // #fda7df
  lavendar_tea: 0xd980fa, // #d980fa
  bara_red: 0xed4c67, // #ed4c67
  puffins_bill: 0xee5a24, // #ee5a24
  red_pigment: 0xea2027, // #ea2027
  pixelated_grass: 0x009432, // #009432
  turkish_aqua: 0x009432, // #009432
  merchant_marine_blue: 0x0652dd, // #0652dd
  twenty_thousand_leagues_under_the_sea: 0x1b1464, // #1b1464
  forgotten_purple: 0x9980fa, // #9980fa
  circumorbital_ring: 0x5758bb, // #5758bb
  hollyhock: 0x833471, // #833471
  magenta_purple: 0x6f1e51, // #6f1e51
  // not going to use v1 palette for this
  //   // v1 palette
  //   turquoise: 0x1abc9c, // #1abc9c
  //   green_sea: 0x16a085, // #16a085
  //   emerald: 0x2ecc71, // #2ecc71
  //   nephritis: 0x27ae60, // #27ae60
  //   peter_river: 0x3498db, // #3498db
  //   belize_hole: 0x2980b9, // #2980b9
  //   amethyst: 0x9b59b6, // #9b59b6
  //   wisteria: 0x8e44ad, // #8e44ad
  //   wet_asphalt: 0x34495e, // #34495e
  //   midnight_blue: 0x2c3e50, // #2c3e50
  //   sunflower: 0xf1c40f, // #f1c40f
  //   orange: 0xf39c12, // #f39c12
  //   carrot: 0xe67e22, // #e67e22
  //   pumpkin: 0xd35400, // #d35400
  //   alizarin: 0xe74c3c, // #e74c3c
  //   pomegranate: 0xc0392b, // #c0392b
  //   clouds: 0xecf0f1, // #ecf0f1
  //   silver: 0xbdc3c7, // #bdc3c7
  //   concrete: 0x95a5a6, // #95a5a6
  //   asbestos: 0x7f8c8d, // #7f8c8d
};

// Class for creating and using points
export class Point {
  /**
   * Class for creating and using points
   * @param {int} x - x position
   * @param {int} y - y position
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Function for calculating distance
   * @param {Point} p1 - first point
   * @param {Point} p2 - second point
   */
  distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  }
}

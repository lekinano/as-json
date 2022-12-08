import { wasi_console } from "@assemblyscript/wasi-shim/assembly/wasi_console";
import { u128 } from "as-bignum/assembly";
import {
  JSON
} from ".";

// @ts-ignore
@json
class Stats {
  wins!: u128
  loss!: u128
}
// @ts-ignore
@json
class Vec3 {
  x!: f32;
  y!: f32;
  z!: f32;
}

const vec: Vec3 = {
  x: 3.4,
  y: 1.2,
  z: 8.3
}

// @ts-ignore
@json
class Player {
  firstName!: string;
  lastName!: string;
  lastActive!: i32[];
  createdAt!: Date;
  age!: i32;
  pos!: Vec3 | null;
  isVerified!: boolean;
  stats!: Stats
}

const player: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  createdAt: Date.fromString("2021-12-08T00:59:26.230Z"),
  age: 23,
  pos: {
    x: 3.4,
    y: 1.2,
    z: 8.3
  },
  isVerified: true,
  stats: {
    wins: u128.fromString("443"),
    loss: u128.fromString("693")
  }
};

const serializedPlayer = JSON.stringify<Player>(player);
wasi_console.log("Serialized Player: " + serializedPlayer);
const deserializedPlayer = JSON.parse<Player>(serializedPlayer);
wasi_console.log("Deserialized Player: " + JSON.stringify(deserializedPlayer));

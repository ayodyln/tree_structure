// sum.test.js
import { expect, test } from "vitest"
import main from "../src/index.js"
import database from "../src/array.js"

test("Checking for correct Tree Structure Output", () => {
  expect(main(database, null)).toStrictEqual({
    "Laura Smith": {
      "Abigail Jones": {
        "Ali Richards": {
          "William Johnson": {},
          "Sophia Johnson": {
            "Alexander Thompson": {},
            "Sebastian Thompson": {},
            "Joseph Thompson": {
              "Aiden Johnson": {},
              "Samuel Johnson": {},
            },
            "Daniel Thompson": {},
          },
          "Grace Johnson": {
            "Logan Johnson": {},
            "Jackson Johnson": {},
          },
        },
        "Zach Richards": {
          "Matthew Johnson": {},
          "David Johnson": {},
          "Joseph Johnson": {},
        },
      },
      "Jacob Jones": {
        "William Jones": {
          "Sophia Smith": {
            "Ethan Johnson": {},
            "Olivia Johnson": {
              "James Thompson": {},
              "Lucas Thompson": {},
              "Benjamin Thompson": {},
              "Henry Thompson": {},
            },
            "Emily Johnson": {},
            "Daniel Johnson": {},
            "Michael Johnson": {},
          },
        },
      },
    },
  })
})

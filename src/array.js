const database = [
  { name: "Laura Smith", parent: null },
  { name: "Abigail Jones", parent: "Laura Smith" },
  { name: "Jacob Jones", parent: "Laura Smith" },
  { name: "Ali Richards", parent: "Abigail Jones" },
  { name: "Zach Richards", parent: "Abigail Jones" },
  { name: "William Jones", parent: "Jacob Jones" },
  { name: "Sophia Smith", parent: "William Jones" },
  { name: "Ethan Johnson", parent: "Sophia Smith" },
  { name: "Olivia Johnson", parent: "Sophia Smith" },
  { name: "James Thompson", parent: "Olivia Johnson" },
  { name: "Lucas Thompson", parent: "Olivia Johnson" },
  { name: "Benjamin Thompson", parent: "Olivia Johnson" },
  { name: "Henry Thompson", parent: "Olivia Johnson" },
  { name: "Alexander Thompson", parent: "Sophia Johnson" },
  { name: "Sebastian Thompson", parent: "Sophia Johnson" },
  { name: "Joseph Thompson", parent: "Sophia Johnson" },
  { name: "Daniel Thompson", parent: "Sophia Johnson" },
  { name: "Emily Johnson", parent: "Sophia Smith" },
  { name: "Logan Johnson", parent: "Grace Johnson" },
  { name: "Jackson Johnson", parent: "Grace Johnson" },
  { name: "Aiden Johnson", parent: "Joseph Thompson" },
  { name: "Samuel Johnson", parent: "Joseph Thompson" },
  { name: "Matthew Johnson", parent: "Zach Richards" },
  { name: "David Johnson", parent: "Zach Richards" },
  { name: "Joseph Johnson", parent: "Zach Richards" },
  { name: "Daniel Johnson", parent: "Sophia Smith" },
  { name: "Michael Johnson", parent: "Sophia Smith" },
  { name: "William Johnson", parent: "Ali Richards" },
  { name: "Sophia Johnson", parent: "Ali Richards" },
  { name: "Grace Johnson", parent: "Ali Richards" },
]

export default database

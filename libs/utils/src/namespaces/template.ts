export const templatesList = [
  "Ethan",
  "Daniel",
  "James",
  "ditto",
  "gengar",
  "glalie",
  "Aiden",
  "leafish",
  "Marcus",
  "Gabriel",
  "Liam",
  "Noah",
] as const;

export type Template = (typeof templatesList)[number];

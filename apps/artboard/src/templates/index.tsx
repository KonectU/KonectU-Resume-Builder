import { Template } from "@Konect U -resume/utils";

import { Ethan } from "./Ethan";
import { Daniel } from "./Daniel";
import { James } from "./James";
import { Ditto } from "./ditto";
import { Gengar } from "./gengar";
import { Glalie } from "./glalie";//Glalie
import { Aiden } from "./Aiden";
import { Leafish } from "./leafish";
import { Marcus } from "./Marcus";
import { Gabriel } from "./Gabriel";
import { Liam } from "./Liam";
import { Noah } from "./Noah";

export const getTemplate = (template: Template) => {
  switch (template) {
    case "Ethan": {
      return Ethan;
    }
    case "Daniel": {
      return Daniel;
    }
    case "James": {
      return James;
    }
    case "ditto": {
      return Ditto;
    }
    case "gengar": {
      return Gengar;
    }
    case "glalie": {
      return Glalie;
    }
    case "Aiden": {
      return Aiden;
    }
    case "leafish": {
      return Leafish;
    }
    case "Marcus": {
      return Marcus;
    }
    case "Gabriel": {
      return Gabriel;
    }
    case "Liam": {
      return Liam;
    }
    case "Noah": {
      return Noah;
    }
    default: {
      return Gabriel;
    }
  }
};

import { ResumeData, resumeDataSchema } from "@Konect U -resume/schema";
import { Json } from "@Konect U -resume/utils";
import { Schema } from "zod";

import { Parser } from "../interfaces/parser";

export class Konect U ResumeParser implements Parser<Json, ResumeData> {
  schema: Schema;

  constructor() {
    this.schema = resumeDataSchema;
  }

  readFile(file: File): Promise<Json> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // eslint-disable-next-line unicorn/prefer-add-event-listener
      reader.onload = () => {
        try {
          const result = JSON.parse(reader.result as string) as Json;
          resolve(result);
        } catch {
          reject(new Error("Failed to parse JSON"));
        }
      };

      // eslint-disable-next-line unicorn/prefer-add-event-listener
      reader.onerror = () => {
        reject(new Error("Failed to read the file"));
      };

      // eslint-disable-next-line unicorn/prefer-blob-reading-methods
      reader.readAsText(file);
    });
  }

  validate(data: Json) {
    return this.schema.parse(data) as ResumeData;
  }

  convert(data: ResumeData) {
    return data;
  }
}

import { Entry } from './entry'

export class Entries {
  constructor(private entries: Entry[], private limit: number) {}
  toJson() {
    return {
      rows: this.entries.map((entry) => entry.toJson),
      limit: this.limit
    }
  }
}

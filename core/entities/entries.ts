import { Entry } from './entry'

export class Entries {
  constructor(private rows: Entry[], private limit: number) {}
  toJson() {
    return {
      rows: this.rows.map((entry) => entry.toJson()),
      limit: this.limit
    }
  }
}

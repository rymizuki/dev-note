import * as dateFormat from 'date-format'
export class Entry {
  constructor(
    private id: string,
    private subject: string,
    private body: string,
    private created_at: string,
    private updated_at: string
  ) {}
  toJson() {
    return {
      id: this.id,
      subject: this.subject,
      body: this.body,
      headline: this.body.replace(/\n/g, ' ').replace(/#+/g, ''),
      created_at: dateFormat('yyyy/MM/dd hh:mm', new Date(this.created_at)),
      updated_at: this.updated_at
    }
  }
}

import * as contentful from 'contentful'
import { Entries } from '../entities/entries'
import { Entry } from '../entities/entry'

export class EntriesRepository {
  constructor(private client: contentful.ContentfulClientApi) {}

  async find(): Promise<Entries> {
    const response = await this.client.getEntries()
    const entries = new Entries(
      response.items.map((contentfulEntry) => {
        const { subject, body } = contentfulEntry.fields as {
          subject: string
          body: string
        }
        return new Entry(
          contentfulEntry.sys.id,
          subject,
          body,
          contentfulEntry.sys.createdAt,
          contentfulEntry.sys.updatedAt
        )
      }),
      response.limit
    )

    return entries
  }

  async findOne(id: string): Promise<Entry> {
    const response = await this.client.getEntry(id)
    const { subject, body } = response.fields as {
      subject: string
      body: string
    }
    const entry = new Entry(
      response.sys.id,
      subject,
      body,
      response.sys.createdAt,
      response.sys.updatedAt
    )
    return entry
  }
}

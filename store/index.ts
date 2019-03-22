import { EntriesRepository } from '../core/repositories/entries'

export const state = () => ({
  entries: null,
  current: null
})

export const getters = {
  getEntries(state) {
    return () => state.entries
  },
  getEntry(state) {
    return () => state.current
  }
}

export const mutations = {
  fetchEntriesResolve(state, entries) {
    state.entries = entries
  },
  fetchEntry(state) {
    state.current = null
  },
  fetchEntryResolve(state, entry) {
    state.current = entry
  }
}

import { createClient } from '~/plugins/contentful'
export const actions = {
  async fetchEntries({ commit }) {
    const entries = await new EntriesRepository(createClient()).find()
    commit('fetchEntriesResolve', entries.toJson())
  },
  async fetchEntry({ commit }, id: string) {
    commit('fetchEntry')
    const entry = await new EntriesRepository(createClient()).findOne(id)
    commit('fetchEntryResolve', entry.toJson())
  }
}

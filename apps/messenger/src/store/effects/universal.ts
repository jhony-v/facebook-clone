export const sidebarStorage = {
  key: "app:sidebar",
  update(sidebarOpened: boolean) {
    localStorage.setItem(this.key, String(sidebarOpened))
  },
  get() {
    const value = localStorage.getItem(this.key)
    return typeof value !== undefined ? JSON.parse(value) : true
  },
}

export const token = {
  key: "session",
  get() {
    const value = localStorage.getItem(this.key)
    return typeof value !== undefined ? JSON.parse(value) : undefined
  },
}

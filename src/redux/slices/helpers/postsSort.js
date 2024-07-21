export const postsSorting = {
    sortById: (array) => {
        return array.sort((a, b) => a.id < b.id ? 1 : -1)
    }
}
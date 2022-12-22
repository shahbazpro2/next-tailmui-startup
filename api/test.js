const { default: responseApi } = require("./responseApi")

export const testApi = (id = 1) => {
    return responseApi(`https://jsonplaceholder.typicode.com/todos/${id}`, 'get')
}
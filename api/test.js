import { responseApi } from 'use-hook-api'

export const testApi = (id = 1) => {
    return responseApi(`https://jsonplaceholder.typicode.com/todos/${id}`, 'get')
}

export const test1Api = () => {
    return responseApi(`https://jsonplaceholder.typicode.com/todos/${2}`, 'get')
}

export const test2Api = () => {
    return responseApi(`http://localhost:3000/api/hello/`, 'get')
}
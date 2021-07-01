export const getCard = (id, products) => {
    const arr = []
    id.forEach(item => {
        arr.push(products.find(elem => elem.id === item))
    })
    

    return arr
}

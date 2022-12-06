const products=[
    {
        id: '1',
        title: 'Cuaderno 1',
        category : 'cuaderno',
        price: '$1.500',
        description: 'Lalalal descripcion 1'
    },
    {
        id: '2',
        title: 'Cuaderno 2',
        category : 'agenda',
        price: '$1.800',
        description: 'Lalalal descripcion 2'
    },

    {
        id: '3',
        title: 'Cuaderno 3',
        category : 'libreta',
        price: '$2.200',
        description: 'Lalalal descripcion 3'
    },

    {
        id: '4',
        title: 'Cuaderno 4',
        category : 'cuaderno',
        price: '$1.450',
        description: 'Lalalal descripcion 4'
    }


] 

export const getProducts = () => {
return new Promise((resolve) => {
    setTimeout (() =>{
        resolve (products)
    }, 1000 )
})
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout (() =>{
            resolve (products.find(product => product.id === id))
        }, 500 )
    })
    }


export const getProductsByCategory = (categoryId) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
          }, 500)
        })
      }
      
/*export const getNoteById = (id) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(notes.find(note => note.id === id))
          }, 500)
        })
      }*/
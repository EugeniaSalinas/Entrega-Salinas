const products=[
    {
        id: '1',
        title: 'Cuaderno liso',
        img: './images/cuaderno1.jpg',
        category : 'Categoría cuaderno',
        price: '$1.500',
        stock: '3',
        description: 'Cuaderno tamaño A4, con tapa de madera e interior de hojas lisas. Cuenta con 100 hojas para completar de la forma que se desee'
    },
    {
        id: '2',
        title: 'Agenda 2023',
        img: './images/agenda.jpg',
        category : 'Categoría agenda',
        price: '$1.800',
        stock: '5',
        description: 'Agenda tamaño A4, con tapa de madera personalizable e interior de hojas lisas. Cuenta con 100 hojas para completar de la forma que se desee'
    },

    {
        id: '3',
        title: 'Libreta',
        img: './images/libreta.jpg',
        category : 'Categoría libreta',
        price: '$1.200',
        stock: '1',
        description: 'Libreta tamaño A5, con tapa de madera personalizable e interior de hojas lisas. Cuenta con 100 hojas para completar de la forma que se desee'
    },

    {
        id: '4',
        title: 'Bitácora de viaje',
        img: './images/cuaderno2.jpg',
        category : 'Categoría cuaderno',
        price: '$2.200',
        stock: '3',
        description: 'Cuaderno tamaño A4, se trata de un cuaderno bitácora para poder plasmar lo vivido en un viaje. Cuenta con con tapa de madera e interior de hojas 80 lisas completar de la forma que se desee'
    }


] 

export const getProducts = () => {
return new Promise((resolve) => {
    setTimeout (() =>{
        resolve (products)
    }, 100 )
})
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout (() =>{
            resolve (products.find(product => product.id === id))
        }, 100 )
    })
    }


export const getProductsByCategory = (categoryId) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
          }, 100)
        })
      }
      
/*export const getNoteById = (id) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(notes.find(note => note.id === id))
          }, 500)
        })
      }*/
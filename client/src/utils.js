

export const rowsToObject = (rows) => {
    let categorias = []
    
    /* rows.forEach(element => {
        if(!(element.nombrecategoria in categorias)){
            categorias.push({
                nombre: element.nombrecategoria,
                id: element.id_categoria,
                imagen: element.imagen
            })
        }
    }); */

    rows.forEach(element => {
        var esta = false;
        categorias.forEach(el => {
            if(element.nombrecategoria === el.nombre)
                esta = true;
        })
        if(!esta){
            categorias.push({
                nombre: element.nombrecategoria,
                id: element.id_categoria,
                imagen: element.imagen
            })
        }
    })

    /* console.log("hola")
    console.log(categorias) */
    let products = []

    categorias.forEach((element) => {
        products.push({
            id: element.id,
            title: element.nombre,
            routeName: element.nombre.toLowerCase(),
            imagen: element.imagenCategoria,
            items: []
        })
    })

    rows.forEach(i => {
        products.forEach((j,idx) => {
            if(i.id_categoria === j.id){
                products[idx].items.push({
                    id: i.id,
                    nombre: i.nombre,
                    precio: i.precio,
                    descrip: i.descrip,
                    disponible: i.disponible,
                    imagen: i.imagen
                })
            }//imagen: i.imagen fix
        })
    })

    return products;
}
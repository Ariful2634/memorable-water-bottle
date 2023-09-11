const getStore = ()=>{
    const storeCart = localStorage.getItem('cart')
    if(storeCart){
        return JSON.parse(storeCart)
    }
    return []
}

const addString = (cart)=>{
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify)
}

const addToLS= (id) =>{
    const cart = getStore();
    cart.push(id);
    addString(cart)
}

export {addToLS}


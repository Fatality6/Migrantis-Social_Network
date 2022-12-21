export const updateObjectInArray = (item, objPropName, itemId, newObjPeops) => {
    return item.map(u => {
        if ( u[objPropName] === itemId ) {
            return { ...u, ...newObjPeops }
        }
        return u
    })
 }
    


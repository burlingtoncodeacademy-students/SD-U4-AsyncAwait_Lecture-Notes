export function returnData() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve('Data from Promise')
            } else {
                reject('Rejected!!!')
            }
        }, 3000)
    })

}
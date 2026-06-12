const getStoreBook = () => {

    const storeBookSTR = localStorage.getItem('readList')
    if (storeBookSTR) {
        const storeBookData = JSON.parse(storeBookSTR)
        return storeBookData
    }
    else { return [] }

}

const addTOStroedDB = (id) => {
    const storeBookData = getStoreBook()

    if (storeBookData.includes(id)) {
        console.log('helo')
        alert('vi ai id already aca ')
    }
    else {
        storeBookData.push(id)
        const data = JSON.stringify(storeBookData)
        localStorage.setItem("readList", data)
        console.log(storeBookData)
    }

}
export { addTOStroedDB, getStoreBook }
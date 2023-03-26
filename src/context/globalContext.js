
import React, { useContext, useEffect, useState } from "react";



const GlobalContext = React.createContext()

const getLocalStorage = () => {
    let data = localStorage.getItem('data')
    let favData = localStorage.getItem('favdata')

    if(data) {
        return JSON.parse(localStorage.getItem('data'));
    }else if (favData){
        return JSON.parse(localStorage.getItem('favdata'));
    }
    else {
        return [];
    }
}

export const GlobalProvider = ({children}) => {

    const [data, setData] = useState(getLocalStorage());
    const [edit, setEdit] = useState(false);
    const [editData, setEditData] = useState()
    const [fav, setFav] = useState(false)
    const [favaroitData, setFavaroitData] = useState(getLocalStorage())
    const [active, setActive] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')



    const addData = (newData) => {

        console.log('newData', newData)

        if (edit) {
           setData(
            data.map((item) => {
                if (item.id === editData.id) {
                    console.log('item', item)
                    return {...item ,  name: newData}
                }
                return item;
            })
           )
        }else {
            const dataWithId = { id: new Date().getTime().toString(), name: newData}
            setData([...data, dataWithId])
        }

        setEdit(false)
    }

    console.log(data)

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
    localStorage.setItem('favdata', JSON.stringify(favaroitData))
  }, [data, favaroitData])

//   console.log(data)

const handleSubmission = () => {
    setActive(!active)
  }


const handleFavaroit = (selectedItem) => {
    setFav(!fav)

    if (!fav) {
        setFavaroitData([...favaroitData, selectedItem])
    }else {
        const updatedFavItem = favaroitData.filter((element) => {
            return element.id !== selectedItem.id
          }) 
          setFavaroitData(updatedFavItem)
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }



    return (
        <GlobalContext.Provider value={{
            addData,
            data,
            setData,
            setEditData,
            editData,
            edit,
            setEdit,
            handleFavaroit,
            fav,
            favaroitData,
            handleSubmission,
            active,
            handleSearch,
            searchTerm
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
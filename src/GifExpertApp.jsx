import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory=(newCategory)=>{

    if(categories.includes(newCategory)) return;
    // categories.push('Valorant');
    // console.log(newCategory)
    setCategories([newCategory,...categories ])
    // setCategories(cat =>[...categories, 'Valorant'])
  }
  console.log(categories)
  return (
    <>
       {/* {titulo} */}
      <h1>GifExpertApp</h1>
      {/* { input} */}
      <AddCategory 
      // setCategories={setCategories} 
        onNewCategory={onAddCategory}
      />
        {/* {Listado de categorias} */}

        {categories.map((category)=>(
          <GifGrid key={category} category={category}/>
        ))}
     
        {/* {GIF DE ITEM} */}
    </>
  )
}

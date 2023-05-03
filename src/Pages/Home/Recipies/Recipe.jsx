import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Recipe = ({ singleRecipe }) => {
    console.log(singleRecipe);
    const [isDisabled, setIsDisabled] = useState(false);

    const notify = () => {
        toast("🥰💗Wow added to favourite!🤩😍");
        setIsDisabled(true);

    }

    return (
        <div className=''>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
                <figure><img src={singleRecipe.image_url} alt="Album" className="h-72 w-72 object-cover" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{singleRecipe.recipe_name}</h2>
                    <p>Ingredients: </p>
                    {
                        singleRecipe.ingredients.map((ingredient, i) => <li key={i}> {ingredient}</li>)
                    }
                    <div>
                        <p>Cooking Method: {singleRecipe.cooking_method}</p>
                    </div>
                    <div><p>{singleRecipe.rating}</p></div>
                    <div className="card-actions justify-end">
                        <button onClick={notify} disabled={isDisabled} className="btn btn-primary">Favourite</button>
                        <ToastContainer position="top-center" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
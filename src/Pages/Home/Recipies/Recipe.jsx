import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'




const Recipe = ({ singleRecipe }) => {
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
                    <div className='lg:flex justify-between'>
                        <h2 className="card-title underline mb-14">{singleRecipe.recipe_name}</h2>
                        <div className=''>
                            <p className='font-bold'>Ingredients: </p>
                            {
                                singleRecipe.ingredients.map((ingredient, i) => <li key={i}> {ingredient}</li>)
                            }
                        </div>
                    </div>
                    <div>
                        <p className='font-bold'>Cooking Method: {singleRecipe.cooking_method}</p>
                    </div>
                    <div className='flex items-center'>
                        <Rating placeholderRating={singleRecipe.rating} style={{ maxWidth: 100 }} value={singleRecipe.rating} readOnly />
                        <p className='ml-2 text-error font-bold'>{singleRecipe.rating}</p></div>
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
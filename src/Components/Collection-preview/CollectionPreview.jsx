import React from "react";
import './CollectionPreview.scss';
import CollectionItem from '../Collection-item/CollectionItem';



const CollectionPreview=({title,items})=>(

    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,idx)=>idx<=3).
                map(({id,...otherItemsProp}) =><CollectionItem key={id} {...otherItemsProp} />) 
            }
        </div>
    </div>

)

export default CollectionPreview;

import React from "react";
import './ShopPage.scss';
import CollectionPreview from '../../Components/Collection-preview/CollectionPreview';
import SHOP_DATA from "./ShopData";

class ShopPage extends React.Component {

    constructor() {
        super();

        this.state={
            collections: SHOP_DATA,
        }
    }


    render() {
        const {collections}=this.state;
        return (
            <div>
                  { collections.map(({id,...otherCollections}) =>(
                       <CollectionPreview key={id} {...otherCollections}></CollectionPreview>
                   ))
                  }
            </div>
        );
    }
}

export default ShopPage;

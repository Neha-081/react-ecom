import {createSelector} from 'reselect';

const COLLECTION_ID_MAP={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

const selectShop=state=>state.shop

export const selectCollections=createSelector(
    [selectShop],
    shop=>shop.collections
)

export const selectCollection=collectionUrlParam=>       //collectionUrlParam - string parameter value for each id from COLLECTION_ID_MAP
createSelector(
    [selectCollections],
    //find collection.id matching the url parameter of our collection id map.
    collections=>collections.find(collection=>collection.id===COLLECTION_ID_MAP[collectionUrlParam])

)
export const createPost = (post) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        //make async call to db HERE, connect db with redux using store enhancers
        const firestore = getFirestore();
        firestore.collection('UserPosts').add({
            title : post.title,
            content : post.content,
            username : "tondy"
        }).then(() => {
            dispatch({type: 'CREATE_POST', post});
    }).catch((err) => {
        dispatch({type: 'CREATE_POST_ERROR', err});
    })
        //carry on with dispatch
}
};

export const createArticle = (article) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        //make async call to db HERE, connect db with redux using store enhancers
        const firestore = getFirestore();
        firestore.collection('Articles').add({
            title : article.title,
            content : article.content,
            username : "beau"
        }).then(() => {
            dispatch({type: 'CREATE_ARTICLE', article});
    }).catch((err) => {
        dispatch({type: 'CREATE_ARTICLE_ERROR', err});
    })
        //carry on with dispatch
}
};
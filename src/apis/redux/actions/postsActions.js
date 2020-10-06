const SET_POSTS_LIST_ACTION = "SET_POSTS_LIST_ACTION";

export {
    SET_POSTS_LIST_ACTION,
    setPostsListAction,
};

const setPostsListAction = (data) => ({data, type: SET_POSTS_LIST_ACTION});
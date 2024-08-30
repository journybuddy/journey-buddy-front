/** LOGIN */
export const API_LOGIN = {
    getKakaoLogin : '/api/auth/kakao',
    getKakaoInfo : '/api/auth/kakao/info', 
};
/** COMMUNITY */
export const API_COMMUNITY = {
    getCommunityList: '/posts/list',
    searchPosts: '/posts/search',
    getCommunityDetail: '/posts/',
    savePost: '/posts/save',
    addComment: (postId: number) => `/posts/${postId}/comment`,
    addLike: (postId: number) => `/posts/${postId}/like`,  
    addScrap: (postId: number) => `/posts/${postId}/scrap`, 
};


/** MAIN PAGE */
export const API_MAIN_PAGE = {
    getTopPicks : '/posts/top3',
}

/** MY PAGE */
export const API_MY_PAGE = {
    getMyPosts : '/my_page/my_posts/posts/my_posts',
    getMyScraps : '/my_page/scraps/myScrap',
    getMyLikes : '/my_page/userlikes/myLikes',
    getMyComments : '/my_page/comment/myComment',
    editProfile: '/user/update',
}
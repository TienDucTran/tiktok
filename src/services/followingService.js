import * as httpRequest from '~/utils/httpRequest';

export const getFollowing = async ({ page = 1 }) => {

    try {
        const res = await httpRequest.get('/me/followings', {
            params: {
                page
            }
        })
        return res.data
    } catch (error) {
        console.log("oidoioi");
    }
}
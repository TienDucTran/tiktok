import * as httpRequest from '~/utils/httpRequest';

export const getUserProfile = async ({ q }) => {

    try {
        const res = await httpRequest.get('/users/@', {
            params: {
                q: q
            }
        })
        return res.data
    } catch (error) {
        console.log("oidoioi");
    }
}
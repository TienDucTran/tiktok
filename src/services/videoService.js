import * as httpRequest from '~/utils/httpRequest';

export const getVideo = async ({ type = "for-you", page }) => {

    try {
        const res = await httpRequest.get('/videos', {
            params: {
                type: type,
                page
            }
        })
        return res.data
    } catch (error) {
        console.log("oidoioi");
    }
}
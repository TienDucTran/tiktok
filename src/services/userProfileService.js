import * as httpRequest from '~/utils/httpRequest';

export const getUserProfile = async ({ nickname }) => {
    try {
        const res = await httpRequest.get(`/users/@${nickname}`);
        return res.data;
    } catch (error) {
        console.log('oidoioi');
    }
};

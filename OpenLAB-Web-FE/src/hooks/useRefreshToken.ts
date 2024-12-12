// import axios from '@configs/axios'
// import useAuth from './useAuth';
// import { useDispatch } from 'react-redux';
// import { logoutSuccess } from '@redux/authSlice';
// type resType = {
//     data: {
//         access_token: string
//     }
//     status: number
// }
// const useRefreshToken = () => {
//     const { user } = useAuth();
//     const dispatch = useDispatch();
//     const refresh = async () => {
//         try {
//             const res: resType = await axios.get('/auth/refresh',
//                 { withCredentials: true })
//             return {
//                 ...user,
//                 access_token: res.data.access_token
//             }
//         } catch (error) {
//             console.log(error);
//             dispatch(logoutSuccess());
//         }
//     }
//     return refresh;
// }
// export default useRefreshToken;
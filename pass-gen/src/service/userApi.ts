import { AxiosResponse } from 'axios';
import axiosInstance from '../config/axios';
import { PasswordProperty } from '@/interfaces/interface';

export const createPassWord = (property: PasswordProperty): Promise<AxiosResponse> => {
    return axiosInstance.post('/user/create-password/', { ...property });
};


import { createApi } from '@reduxjs/toolkit/dist/query';
import axiosBaseQuery from '../axiosBaseQuery';

const projectApi = createApi({
	reducerPath: 'projects',
	tagTypes: ['Projects'],
	baseQuery: axiosBaseQuery(),
	endpoints(build) {
		return {};
	},
});

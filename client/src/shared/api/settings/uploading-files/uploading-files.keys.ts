import { createQueryKeys } from '@lukemorales/query-key-factory';

import { InfiniteUploadFilesParams } from './uploading-files.types';

export const uploadingFilesKeys = createQueryKeys('uploadingFiles', {
  uploadingFilesUpdate: null,
  infiniteUploadFiles: (infiniteParams: InfiniteUploadFilesParams) => [infiniteParams],
});

let finishPhotos: () => void;
export const aboutPhotosFinished = new Promise<void>(resolve => { finishPhotos = resolve; });
export function markAboutPhotosFinished() { finishPhotos(); }

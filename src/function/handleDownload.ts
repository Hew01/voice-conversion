import * as Sharing from "expo-sharing";
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

const imageFileExts = ['jpg', 'png', 'gif', 'heic', 'webp', 'bmp'];

if (isIos && imageFileExts.every(x => !downloadedFile.uri.endsWith(x))) {
  const UTI = 'public.item';
  const shareResult = await Sharing.shareAsync(downloadedFile.uri, {UTI});
}

const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
if (perm.status != 'granted') {
  return;
}

try {
  const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri);
  const album = await MediaLibrary.getAlbumAsync('Download');
  if (album == null) {
    await MediaLibrary.createAlbumAsync('Download', asset, false);
  } else {
    await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
  }
} catch (e) {
  handleError(e);
}
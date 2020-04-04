declare module "react-native-convert-ph-asset" {
  import { EmitterSubscription } from "react-native";

  export type ConvertPHAssetEvent = 'VideoProcessingProgress' | 'DownloadAssetProgress';

  export interface ConvertAssetEventResponse {
    progress: number;
    assetId: string;
  }

  export type ConvertAssetPHEventResponse = (info: ConvertAssetEventResponse) => void

  export type ConvertAssetExportFormat = 'mpeg4' | 'm4v' | 'mov';

  export type ConvertAssetExportQuality = 'high' | 'medium' | 'low' | 'original' | 'aVAssetExportPreset640x480' | 'aVAssetExportPreset960x540' | 'aVAssetExportPreset1280x720';

  export interface ConvertPHAssetParams {
    url: string,
    convertTo: ConvertAssetExportFormat,
    quality: ConvertAssetExportQuality
  }

  export const convertVideoFromUrl: (params: ConvertPHAssetParams) => Promise<string>
  export const registerToEvent: (eventName: ConvertPHAssetEvent, handler: ConvertAssetPHEventResponse) => EmitterSubscription
}
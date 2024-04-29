  export type AuthContextType = {
  session: SessionType | null;
  login: (data: SessionType) => void;
  logout: () => void;
};

export type SessionType = {
  user: {
    id: string;
    email: string;
    name: string;
    role: string
  };
  token: string;
}

export type AppContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export type GenericAPIResponse<T> = Promise<{ // <T> Type is anything means type is not define and it will be any
  status: string;
  message: string;
  data: T;
}>;
  
//   export type HeadBodyItem = {
//     head: string;
//     body: string;
//   };
  
//   export type Option = {
//     value: string;
//     label: string;
//   };
//   export type TMedia = {
//     type: 'image' | 'video_yt' | 'video_gcp';
//     thumbnail: string;
//     assetUrl: string;
//   };
  



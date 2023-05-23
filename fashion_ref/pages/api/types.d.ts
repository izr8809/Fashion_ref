interface UserInfo {
  id: number;
  name: string;
  email: string;
  lastWorkspaceId: number;
  lastReferenceId: number;
  lastBoardId: number;
  Workspaces: {
    name: string;
    isPremium: number;
    code: string;
    WorkspaceUser: [];
    References: {
      id: number;
      name: string;
      WorkspaceId: number;
      Hashtag: []; // 레퍼런스 전체 해시태그
      SavedHashs: []; // 자주 검색하는 태그 저장
    }[];
    Users: [];
    WorkspaceAdministrators: [];
  }[];
  Notifications: {
    notitype: string;
    content: string;
    workspaceId: number;
    From: number;
  }[];
}

interface PostInfo {
  id: number;
  name: string;
  brand: string;
  category: string;
  season: string;
  userId: number;
  ReferenceId: number;
  Images: { id: number; postId: number; src: string; name: string }[];
  Hashtags: { id: number; name: string }[];
  Likers: { PostId: number; UserId: number }[];
  References: { id: number; name: string; WorkspaceId: number }[];
  reason?: string;
}

interface FailureResponse {
  data: {
    message: string;
    error?: Error | any;
  };
}

interface WorkspaceInfo {
  id: number;
  name: string;
  isPremium: number;
  code: string;
  References: {
    id: number;
    name: string;
    WorkspaceId: number;
    Hashtags: {
      id: number;
      name: string;
    }[];
    SavedHashs: {
      id: number;
      hashs: string;
    }[];
  }[];
}

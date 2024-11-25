export type LabelColorKey = 'moderator' | 'idea-submitter';

export type AuthorInfoType = {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  emailHash: string;
  userName: string;
  globalModerator: boolean;
  admin: boolean;
  customRole: boolean;
  registeredDateTime: string;
  modifiedAt: string;
  lastAccess: string;
  source: string;
  status: string;
  ideaCount: number;
  voteCount: number;
  commentCount: number;
  tosAccepted: boolean;
  avatarUrl: string;
  kudoCount: number;
};

export type LabelType = {
  id: number;
  name: string;
  key: string;
  colorKey: LabelColorKey;
};

export type IdeaPermissionInfoType = {
  canVote: boolean;
  canRetractVote: boolean;
  canComment: boolean;
};

export type CommentType = {
  id: number;
  parentId: number;
  creationDateTime: string;
  editedAt: string;
  statusChangeDate: string;
  text: string;
  campaignId: number;
  authorId: number;
  authorInfo: AuthorInfoType;
  voteCount: number;
  upVoteCount: number;
  downVoteCount: number;
  myVote: number;
  commentCount: number;
  url: string;
  statusId: number;
  status: string;
  stageId: number;
  stageName: string;
  stageLabel: string;
  flag: string;
  ideaPermissionInfo: IdeaPermissionInfoType;
  labels: LabelType[];
  pinned: boolean;
  parentType: string;
};

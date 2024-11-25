type AttachmentDetailType = {
  altText: string;
  downloadUrl: string;
  fileName: string;
  fileSize: number;
  id: number;
  ideaId: number;
  imageFile: boolean;
  memberId: number;
  timeStamp: string;
};

type AuthorType = {
  admin: boolean;
  avatarUrl: string;
  commentCount: number;
  customRole: boolean;
  email: string;
  emailHash: string;
  firstName: string;
  globalModerator: boolean;
  id: number;
  ideaCount: number;
  kudoCount: number;
  lastAccess: string;
  lastName: string;
  modifiedAt: string;
  name: string;
  profileQuestion: Record<string, string>;
  registeredDateTime: string;
  source: string;
  status: string;
  tosAccepted: boolean;
  userName: string;
  voteCount: number;
};

type IdeaPermissionInfoType = {
  canComment: boolean;
  canRetractVote: boolean;
  canVote: boolean;
};
type LabelType = {
  colorKey: string;
  id: number;
  key: string;
  name: string;
};

export type IdeaType = {
  attachmentDetails: Array<AttachmentDetailType>;
  attachments: Array<string>;
  authorId: number;
  authorInfo: AuthorType;
  campaignCustomFields: Record<string, string>;
  campaignId: number;
  campaignName: string;
  commentCount: number;
  contributors: Array<any>;
  creationDateTime: string;
  customFieldsByKey: Record<string, string>;
  downVoteCount: number;
  editedAt: string;
  flag: string;
  funnelId: number;
  funnelName: string;
  id: number;
  ideaNumber: number;
  ideaPermissionInfo: IdeaPermissionInfoType;
  labels: Array<LabelType>;
  myVote: number;
  stageId: number;
  stageLabel: string;
  stageName: string;
  status: string;
  statusId: number;
  tags: Array<string>;
  text: string;
  title: string;
  upVoteCount: number;
  url: string;
  voteCount: number;
};

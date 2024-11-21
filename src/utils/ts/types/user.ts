import { CommunityType } from '@/utils/ts/types/community';

export type UserType = {
  dateFormat: string;
  email: string;
  id: number;
  name: string;
  username: string;
  workspaceId: number;
  workspaceName: string;
  memberships: Array<CommunityType>;
};

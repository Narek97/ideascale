// import React, { ChangeEvent, useCallback } from "react";
// import { AttachImage } from "../../../../atom/attach-image";
// import { Button } from "@fluentui/react-components";
// import { useStyles } from "./style";
// import { useAttachments } from "../../../../../api/attachments";
// import { useCampaignState } from "../../../../../providers/CampaignProvider";
// import { AttachmentCard } from "./attachment-card";
//
// export const Attachments = ({ ideaId }: { ideaId: number }) => {
//   const { apiToken } = useCampaignState();
//
//   const classes = useStyles();
//
//   const { data: attachments, isLoading } = useAttachments(apiToken, ideaId);
//   console.log(attachments, "attachments");
//   const onHandleSelectFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       console.log(e.target.files[0]);
//     }
//   }, []);
//
//   const handleAttachSubmit = () => {};
//
//   return (
//     <div>
//       <div>
//         {attachments?.map((attachment) => (
//           <AttachmentCard key={attachment.id} attachment={attachment} />
//         ))}
//       </div>
//       <AttachImage onHandleSelectFile={onHandleSelectFile} />
//       <div className={classes.submitAttach}>
//         <Button appearance="primary" onClick={handleAttachSubmit}>
//           Upload File
//         </Button>
//       </div>
//     </div>
//   );
// };
import React from 'react';

const Attachments = ({ ideaId }: { ideaId: number }) => {
  return <div></div>;
};

export default Attachments;

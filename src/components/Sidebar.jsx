import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import { SidebarOption } from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Sidebar = () => {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>a/A</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & User Groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File Browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption />
      {channels?.docs.map((doc) => {
        return (
          <SidebarOption title={doc.data().name} key={doc.id} id={doc.id} />
        );
      })}
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  background-color: var(--primary-color);
  color: white;
  flex: 0.2;
  border-top: 1px solid var(--secondary-color);
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid var(--secondary-color);
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--secondary-color);
  padding: 13px;
  > .MuiSvgIcon-root {
    border-radius: 999px;
    padding: 8px;
    font-size: 28px;
    color: var(--secondary-color);
    background-color: white;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 10px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 900;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    color: green;
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
  }
`;

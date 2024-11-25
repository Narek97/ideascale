import React, { FC, useState } from 'react';
import { IdeaType } from '@/utils/ts/types/idea';
import {
  Avatar,
  Badge,
  Button,
  Caption1,
  Card,
  Link,
  Menu,
  MenuTrigger,
  Tag,
} from '@fluentui/react-components';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import MoreIcon from '@/public/more.svg';
import KudosIcon from '@/public/kudos.svg';

import { useStyles } from '@/components/templates/ideas/idea-list/idea-card/style';

dayjs.extend(utc);

interface IIdeaCard {
  idea: IdeaType;
  onHandleSelectIdea: (id: number) => void;
}

const IdeaCard: FC<IIdeaCard> = ({ idea, onHandleSelectIdea }) => {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      onClick={() => {
        onHandleSelectIdea(idea.id);
      }}
      className={classes.base}
      floatingAction={
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <Button
              onClick={e => e.stopPropagation()}
              appearance="transparent"
              icon={<MoreIcon />}
              className={classes.action}
            />
          </MenuTrigger>

          {/*<MenuPopover>*/}
          {/*  <SearchBox*/}
          {/*    contentBefore={null}*/}
          {/*    className={classes.search}*/}
          {/*    placeholder="Search idea"*/}
          {/*  /> */}
          {/*  <MenuList>*/}
          {/*    <MenuItem>CV2 Test community</MenuItem>*/}
          {/*    <MenuItem>Ideas for IdeaScale</MenuItem>*/}
          {/*    <MenuItem>Human Resources</MenuItem>*/}
          {/*    <MenuItem>Financial</MenuItem>*/}
          {/*    <MenuItem>Research and Development</MenuItem>*/}
          {/*    <MenuItem>Sales and marketing</MenuItem> */}
          {/*  </MenuList>*/}
          {/*</MenuPopover>*/}
        </Menu>
      }>
      <div className={classes.header}>
        <Caption1 className={classes.subtitle}>{idea.campaignName}</Caption1>
        <p className={classes.title}>{idea.title}</p>
        <div className={classes.labels}>
          {idea.labels.map(label => (
            <Tag key={label.id} className={classes.label}>
              {label.name}
            </Tag>
          ))}
        </div>

        <div className={classes.userInfo}>
          <div className={classes.user}>
            <Avatar
              name={idea.authorInfo.name}
              image={{
                src: idea.authorInfo.avatarUrl,
              }}
              className={classes.avatar}
            />
            <Badge className={classes.badge}>
              <KudosIcon width={14} /> 8
            </Badge>
            <p className={classes.name}>{idea.authorInfo.name}</p>
          </div>
          <Caption1 className={classes.date}>
            {dayjs(idea.editedAt).format('MM/DD/YYYY hh:mm A')}
            <span className={classes.dot} /> Idea #{idea.ideaNumber}
          </Caption1>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.desc}>
          {parse(isExpanded ? idea.text : `${idea.text.substring(0, 400)}`)}
          {idea.text.length >= 400 && (
            <Link className={classes.readMore} onClick={() => setIsExpanded(prev => !prev)}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </Link>
          )}
        </div>
        <div className={classes.tags}>
          {idea.tags.map((tag, index) => (
            <p className={classes.tag} key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default IdeaCard;

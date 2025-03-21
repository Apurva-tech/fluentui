import * as React from 'react';
import { Avatar } from '@fluentui/react-components';
import { Tree, TreeItem, TreeItemPersonaLayout } from '@fluentui/react-tree';
import story from './TreeItemPersonaLayoutMedia.md';

export const Media = () => {
  return (
    <Tree aria-label="Tree">
      <TreeItem itemType="branch">
        <TreeItemPersonaLayout media={<Avatar />}>Default media</TreeItemPersonaLayout>
        <Tree>
          <TreeItem itemType="leaf">
            <TreeItemPersonaLayout media={<Avatar size={24} />}>Smaller size</TreeItemPersonaLayout>
          </TreeItem>
          <TreeItem itemType="leaf">
            <TreeItemPersonaLayout media={<Avatar size={24} />}>Smaller size</TreeItemPersonaLayout>
          </TreeItem>
          <TreeItem itemType="leaf">
            <TreeItemPersonaLayout media={<Avatar size={24} />}>Smaller size</TreeItemPersonaLayout>
          </TreeItem>
        </Tree>
      </TreeItem>
      <TreeItem itemType="branch">
        <TreeItemPersonaLayout media={<Avatar shape="square" />}>Square media</TreeItemPersonaLayout>
        <Tree>
          <TreeItem itemType="leaf">
            <TreeItemPersonaLayout media={<Avatar shape="square" size={24} />}>Smaller size</TreeItemPersonaLayout>
          </TreeItem>
          <TreeItem itemType="leaf">
            <TreeItemPersonaLayout media={<Avatar shape="square" size={24} />}>Smaller size</TreeItemPersonaLayout>
          </TreeItem>
          <TreeItem itemType="leaf">
            <TreeItemPersonaLayout media={<Avatar shape="square" size={24} />}>Smaller size</TreeItemPersonaLayout>
          </TreeItem>
        </Tree>
      </TreeItem>
    </Tree>
  );
};

Media.parameters = {
  docs: {
    description: {
      story,
    },
  },
};

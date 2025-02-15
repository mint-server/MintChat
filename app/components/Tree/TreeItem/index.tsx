import React from 'react';
import { TreeItem2Content, TreeItem2IconContainer, TreeItem2Root, TreeItem2GroupTransition } from '@mui/x-tree-view/TreeItem2';
import { useTreeItem2, type UseTreeItem2Parameters } from '@mui/x-tree-view/useTreeItem2';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { useTheme } from '@mui/material/styles';
import TreeItemLabel from '../TreeItemLabel';
import sx from './styles';
import clsx from 'clsx';

interface ITreeItem extends Omit<UseTreeItem2Parameters, 'rootRef'>, React.HTMLAttributes<HTMLLIElement> {
  labelIcon: React.ElementType;
  labelInfo?: string;
}

const TreeItem = React.forwardRef(function ChannelTreeItem(
  props: ITreeItem,
  ref: React.Ref<HTMLLIElement>
) {
  const { id, itemId, label, disabled, children, labelIcon: LabelIcon, labelInfo, ...other } = props;
  const theme = useTheme();

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  const contentProps = getContentProps({
    className: clsx('content', {
      expanded: status.expanded,
      selected: status.selected,
      focused: status.focused
    })
  });

  return (
    <TreeItem2Provider itemId={itemId}>
      <TreeItem2Root {...getRootProps({ ...other })} sx={sx.treeItem2Root(theme)}>
        <TreeItem2Content {...contentProps} sx={sx.treeItem2Content(theme)}>
          <TreeItem2IconContainer {...getIconContainerProps()} sx={sx.treeItem2IconContainer(theme)}>
            <TreeItem2Icon status={status} />
          </TreeItem2IconContainer>

          <TreeItemLabel icon={LabelIcon} info={labelInfo || ""} getLabelProps={getLabelProps} />

        </TreeItem2Content>
        {children && (
          <TreeItem2GroupTransition {...getGroupTransitionProps()} sx={sx.childItem(theme)} className='child-node' />
        )}
      </TreeItem2Root>
    </TreeItem2Provider>
  );
});

export default TreeItem;



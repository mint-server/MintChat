import { useEffect, useRef, useState } from 'react';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TreeView from '~/components/Tree/TreeView';
import TreeItem from '~/components/Tree/TreeItem';

interface IChannelTreeView {
  data: Array<{ [key: string]: any }>
}

const ChannelTreeView = ({ data }: IChannelTreeView) => {
  const networkItemIds = useRef<string[]>([]);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string>("");

  const getChannels = (channels: Array<{ [key: string]: any }>, networkIndex: number) => {
    const items = channels.map((channel, index) => {
      const itemId = `channel-${networkIndex + index + 1}`;

      return (
        <TreeItem
          key={itemId}
          itemId={itemId}
          label={channel.name}
          labelIcon={ArticleOutlinedIcon}
          labelInfo="90"
        />
      )
    })

    return items;
  }

  const getNetworks = (): React.ReactElement[] => {
    let networkIndex = 0;
    let tempNetworkItemIds: string[] = [];

    const items = data.map((network, index, arr) => {
      if (index !== 0) {
        networkIndex += arr[index - 1].channels.length;
      }

      const itemId = `network-${index + 1}`;
      tempNetworkItemIds = [...tempNetworkItemIds, itemId];

      return (
        <TreeItem key={itemId} itemId={itemId} label={network.name} labelIcon={FolderOpenTwoToneIcon}>
          {getChannels(network.channels, networkIndex)}
        </TreeItem>
      )
    })

    networkItemIds.current = tempNetworkItemIds;
    return items;
  }

  const init = ()=> {
    if (data?.length && networkItemIds.current?.length) {
      setExpandedItems(networkItemIds.current);
      setSelectedItems("channel-1");
    }
  }

  useEffect(() => init(), []);

  const handleExpandedItemsChange = (event: React.SyntheticEvent, itemIds: string[]) => {
    setExpandedItems(itemIds);
  };

  const handleSelectedItemsChange = (event: React.SyntheticEvent, ids: string | null) => {
    if(ids) {
      setSelectedItems(ids);
    }
  };

  return (
    <TreeView
      expandedItems={expandedItems}
      onExpandedItemsChange={handleExpandedItemsChange}
      selectedItems={selectedItems}
      onSelectedItemsChange={handleSelectedItemsChange}
    >
      {getNetworks()}
    </TreeView>
  );
}

export default ChannelTreeView;
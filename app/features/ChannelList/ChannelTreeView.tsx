import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TreeView from '~/components/Tree/TreeView';
import TreeItem from '~/components/Tree/TreeItem';

interface IChannelTreeView {
  data: Array<{ [key: string]: any }>
}

const ChannelTreeView = ({ data }: IChannelTreeView) => {
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

    const items = data.map((network, index, arr) => {
      if (index !== 0) {
        networkIndex += arr[index - 1].channels.length;
      }

      const itemId = `network-${index + 1}`;

      return (
        <TreeItem key={itemId} itemId={itemId} label={network.name} labelIcon={FolderOpenTwoToneIcon}>
          {getChannels(network.channels, networkIndex)}
        </TreeItem>
      )
    })

    return items;
  }

  return (
    <TreeView>{getNetworks()}</TreeView>
  );
}

export default ChannelTreeView;
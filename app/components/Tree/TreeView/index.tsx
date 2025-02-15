import { SimpleTreeView, type SimpleTreeViewProps } from '@mui/x-tree-view/SimpleTreeView';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import sx from './styles';

const TreeView = (props: SimpleTreeViewProps<undefined>) => {
  return (
    <SimpleTreeView
      {...props}
      slots={{
        expandIcon: ArrowRightIcon,
        collapseIcon: ArrowDropDownIcon
      }}
      sx={sx.simpleTreeView}
    >
      {props.children}
    </SimpleTreeView>
  );
}

export default TreeView;
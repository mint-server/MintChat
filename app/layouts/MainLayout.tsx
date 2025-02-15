import type { ReactNode } from "react";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import "./style.css";


interface IMainLayout {
  leftSidebar: ReactNode,
  rightSidebar: ReactNode,
  children: ReactNode
}

const MainLayout = ({ leftSidebar, rightSidebar, children }: IMainLayout) => {

  return (
    <PanelGroup direction="horizontal" className="main-layout">
      <Panel defaultSize={15} className="panel">
        {leftSidebar}
      </Panel>
      <PanelResizeHandle className="separator" />
      <Panel minSize={20} className="panel">
        {children}
      </Panel>
      <PanelResizeHandle className="separator" />
      <Panel defaultSize={15} className="panel">
        {rightSidebar}
      </Panel>
    </PanelGroup>
  );
}

export default MainLayout;
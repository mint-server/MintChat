import type { ReactNode } from "react";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import "./style.css";

interface IHomeLayout {
  leftSidebar: ReactNode,
  rightSidebar: ReactNode,
  children: ReactNode
}

const HomeLayout = ({ leftSidebar, rightSidebar, children }: IHomeLayout) => {
  return (
    <PanelGroup direction="horizontal" className="main-layout">

      <Panel defaultSize={17} className="panel left-panel">
        <div className="overflow-content">
          {leftSidebar}
        </div>
      </Panel>

      <PanelResizeHandle className="separator" />
      <Panel minSize={20} className="panel">
        <div className="overflow-content">
          {children}
        </div>
      </Panel>

      <PanelResizeHandle className="separator" />
      <Panel defaultSize={15} className="panel">
        <div className="overflow-content">
          {rightSidebar}
        </div>
      </Panel>

    </PanelGroup>
  );
}

export default HomeLayout;
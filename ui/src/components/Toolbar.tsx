interface Props {
  showSidebar: boolean;
  showTerminal: boolean;
  workspaceFolders: string[];
  onToggleSidebar: () => void;
  onToggleTerminal: () => void;
}

export default function Toolbar({
  showSidebar,
  showTerminal,
  workspaceFolders,
  onToggleSidebar,
  onToggleTerminal,
}: Props) {
  return (
    <div className="toolbar">
      {workspaceFolders.length > 0 && (
        <button
          className={`toolbar-btn${showSidebar ? " active" : ""}`}
          onClick={onToggleSidebar}
          title={showSidebar ? "Hide Tree" : "Show Tree"}
        >
          <i className="fa-regular fa-folder-tree"></i>
        </button>
      )}
      <button
        className={`toolbar-btn${showTerminal ? " active" : ""}`}
        onClick={onToggleTerminal}
        title={showTerminal ? "Hide Terminal" : "Show Terminal"}
      >
        <i className="fa-solid fa-terminal"></i>
      </button>
    </div>
  );
}
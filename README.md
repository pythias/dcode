# DCode

![macOS](https://img.shields.io/badge/macOS-≥11-blue)
![Platform](https://img.shields.io/badge/platform-arm64%20%7C%20x86__64-lightgrey)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/github/v/release/pythias/dcode)

> A minimal, high-performance desktop code editor for macOS built with Tauri 2, React, Monaco Editor, and xterm.js.

## 快速开始

### 安装

```bash
brew tap pythias/tools
brew install dcode
```

Homebrew 会根据本机架构自动选择 Apple Silicon 或 Intel 安装包。

### 直接下载（GitHub Releases 最新版）

| 架构 | DMG |
|------|-----|
| Apple Silicon（M 系列芯片） | [DCode_latest_aarch64.dmg](https://github.com/pythias/dcode/releases/latest/download/DCode_latest_aarch64.dmg) |
| Intel（x86_64） | [DCode_latest_x64.dmg](https://github.com/pythias/dcode/releases/latest/download/DCode_latest_x64.dmg) |

版本化的文件名：`DCode_<版本>_aarch64.dmg` / `DCode_<版本>_x64.dmg`（在对应 [Release](https://github.com/pythias/dcode/releases) 资产列表中）。

### 从源码运行

```bash
# 前置依赖：Node.js 22.13+, pnpm 11+, Rust 1.80+

cd /path/to/dcode

# 安装前端依赖
cd ui && pnpm install && cd ..

# 启动开发模式
cargo tauri dev
```

## 功能特点

- **Monaco Editor** — VS Code 同款编辑器，支持语法高亮、代码补全、多主题
- **集成终端** — 底部/右侧分屏，支持多 tab、拖拽调整大小
- **多窗口** — 新建独立窗口，同时打开不同项目
- **多主题** — Dark / Light / Monokai / Solarized Dark
- **拖拽支持** — 从 Finder 拖入文件/文件夹到窗口
- **工作区恢复** — 重启后自动恢复上次打开的文件和目录

## 技术栈

| 层 | 技术 |
|---|---|
| Desktop Shell | Tauri 2 (WKWebView) |
| Frontend | React 18 + TypeScript 5 + Vite 5 |
| Editor | Monaco Editor |
| Terminal | xterm.js |
| Backend | Rust (portable-pty + 文件系统) |
| 包管理 | pnpm / Cargo |

## 开发

```bash
cargo tauri dev                        # 启动开发模式（Rust + Vite）
cargo build --manifest-path src-tauri/Cargo.toml  # 仅编译 Rust
cd ui && npx tsc --noEmit              # TypeScript 类型检查
```

### 目录结构

```
dcode/
├── src-tauri/         # Rust 后端 — IPC commands、PTY 管理、文件系统操作
│   └── src/
│       ├── main.rs
│       ├── lib.rs
│       ├── fs_commands.rs
│       └── pty.rs
├── ui/                # React 前端 — 编辑器、终端、侧边栏
│   └── src/
│       ├── App.tsx
│       └── components/
│           ├── Sidebar.tsx
│           ├── EditorTabs.tsx
│           ├── MonacoEditor.tsx
│           ├── TerminalPanel.tsx
│           └── ContextMenu.tsx
```

## 许可证

MIT
